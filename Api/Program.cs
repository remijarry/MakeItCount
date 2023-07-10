using MakeItCount.Entities;
using MakeItCount.Reposity.Implementations;
using MakeItCount.Reposity.Interfaces;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Identity.Web;
using Microsoft.IdentityModel.Logging;

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


builder.Services.AddAuthentication(opt =>
{
    opt.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    opt.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;

}).AddJwtBearer(opt =>
{
    opt.Authority = builder.Configuration["OAuth0:Authority"];
    opt.Audience = builder.Configuration["OAuth0:Audience"];
});


// builder.Services.AddAuthorization(config =>
// {
//     config.AddPolicy("MakeItCountPolicy", policyBuilder =>
//     policyBuilder.Requirements
//     .Add(new ScopeAuthorizationRequirement()
//     { RequiredScopesConfigurationKey = $"AzureAd:Scopes" }));
// });

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
