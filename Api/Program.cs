using System.Security.Claims;
using Authorization;
using MakeItCount.Entities;
using MakeItCount.Reposity.Implementations;
using MakeItCount.Reposity.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.IdentityModel.Logging;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder =>
    {
        builder.WithOrigins("http://localhost:5173")
               .AllowAnyHeader()
               .AllowAnyMethod();
    });
});

var config = builder.Configuration;

// Authorization
var domain = $"https://{builder.Configuration["Auth0:Domain"]}/";
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
.AddJwtBearer(opt =>
{

    opt.Authority = domain;
    opt.Audience = builder.Configuration["Auth0:Audience"];
    opt.TokenValidationParameters = new TokenValidationParameters
    {
        NameClaimType = ClaimTypes.NameIdentifier
    };
});

// Authentication
builder.Services.AddAuthorization(opt =>
{
    opt.AddPolicy("read:workouts", policy => policy.Requirements.Add(
            new HasScopeRequirement("read:workouts", domain)));
});


IdentityModelEventSource.ShowPII = true; //To show detail of error and see the problem

// Add services to the container.
builder.Services.Configure<MakeItCountDatabaseSettings>(
    builder.Configuration.GetSection("MakeItCountDatabase"));

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

#region service registrations
builder.Services.AddSingleton<IWorkoutRepository, WorkoutRepository>();
builder.Services.AddSingleton<IAuthorizationHandler, HasScopeHandler>();
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();

app.UseHttpsRedirection();


app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
