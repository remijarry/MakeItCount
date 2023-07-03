using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MakeItCount.Entities
{
    public record WorkoutModel
    {
        public int WorkoutId { get; init; }

        public string? ShortDescription { get; init; }

        public string? Title { get; init; }

        public IEnumerable<WorkoutItem>? WorkoutItems { get; init; }

        public string? WarmupDescription { get; init; }

        public IEnumerable<Exercise>? WarmUpExercises { get; init; }

        public string? CooldownDescription { get; init; }

        public IEnumerable<Exercise>? CooldownExercises { get; init; }

        public int FilePosition { get; init; }

        /// <summary>
        /// Order of the workout in the week
        /// </summary>
        public int Order { get; set; } // might not be useful

        public string? TrackName { get; init; }

        public bool IsBeginningOfCycle { get; init; }

        public int Week { get; set; }

    }
}