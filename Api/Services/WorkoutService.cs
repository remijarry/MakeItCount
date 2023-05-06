// using MakeItCount.Entities;
// using Microsoft.Extensions.Options;
// using MongoDB.Driver;

// namespace MakeItCount.Services
// {
//     public class WorkoutService
//     {
//         private readonly ILogger<WorkoutService> _logger;
//         private readonly IMongoCollection<Workout> _workoutsCollection;

//         public WorkoutService(IOptions<MakeItCountDatabaseSettings> options, ILogger<WorkoutService> logger)
//         {
//             _logger = logger;
//             var client = new MongoClient(options.Value.ConnectionString);
//             var database = client.GetDatabase(options.Value.DatabaseName);
//             _workoutsCollection = database.GetCollection<Workout>(options.Value.WorkoutsCollectionname);
//         }

//         public 

//     }
// }