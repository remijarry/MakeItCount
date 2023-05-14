using MakeItCount.Entities;

namespace MakeItCount.Reposity.Interfaces
{
    public interface IWorkoutRepository
    {
        Task<IEnumerable<Workout>> GetWorkouts();
        Task<Workout> GetWorkout(int id);

        Task<IEnumerable<Workout>> GetWorkoutsByTrackName(string trackName);
    }
}