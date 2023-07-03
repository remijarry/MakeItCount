using MakeItCount.Entities;
using MakeItCount.Reposity.Interfaces;
using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace MakeItCount.Reposity.Implementations
{
    public class WorkoutRepository : IWorkoutRepository
    {
        private readonly ILogger<WorkoutRepository> _logger;
        private readonly IMongoCollection<Workout> _workoutsCollection;

        public WorkoutRepository(IOptions<MakeItCountDatabaseSettings> options, ILogger<WorkoutRepository> logger)
        {
            _logger = logger;
            var client = new MongoClient(options.Value.ConnectionString);
            var database = client.GetDatabase(options.Value.DatabaseName);
            _workoutsCollection = database.GetCollection<Workout>(options.Value.WorkoutCollectionName);
        }

        public async Task<Workout> GetWorkout(int id) =>
            await _workoutsCollection
                .FindAsync(workout => workout.WorkoutId == id)
                .Result
                .FirstOrDefaultAsync();


        public async Task<IEnumerable<Workout>> GetWorkouts() =>
            await _workoutsCollection.Find(_ => true).ToListAsync();

        public async Task<IEnumerable<Workout>> GetWorkoutsByTrackAndWeek(string track, int week)
        {
            return await _workoutsCollection.Find(workout => workout.TrackName == track.ToLowerInvariant() && workout.Week == week).ToListAsync();
        }

        public async Task<IEnumerable<Workout>> GetWorkoutsByTrackName(string trackName) =>
            await _workoutsCollection
                .Find(workout => !string.IsNullOrEmpty(workout.TrackName)
                                && workout.TrackName.ToLower() == trackName.ToLower())
                .ToListAsync();
    }
}