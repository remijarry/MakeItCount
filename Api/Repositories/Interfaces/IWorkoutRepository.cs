using MakeItCount.Entities;

namespace MakeItCount.Reposity.Interfaces
{
    public interface IWorkoutRepository
    {
        Task<IEnumerable<Workout>> GetWorkouts();
        Task<IEnumerable<Workout>> GetWorkoutsByTrackAndWeek(string trackName, int weekNumber);
        Task<Workout> GetWorkout(int id);
    }
}