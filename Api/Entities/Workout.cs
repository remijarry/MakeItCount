using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MakeItCount.Entities
{
    [BsonIgnoreExtraElements]
    public record Workout
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _id { get; set; }

        [BsonElement("id")]
        public int WorkoutId { get; init; }

        [BsonElement("shortDescription")]
        public string? ShortDescription { get; init; }

        [BsonElement("title")]
        public string? Title { get; init; }

        [BsonElement("workoutItems")]
        public IEnumerable<WorkoutItem>? WorkoutItems { get; init; }

        [BsonElement("warmupDescription")]
        public string? WarmupDescription { get; init; }

        [BsonElement("warmUpExercises")]
        public IEnumerable<Exercise>? WarmUpExercises { get; init; }

        [BsonElement("cooldownDescription")]
        public string? CooldownDescription { get; init; }

        [BsonElement("coolDownExercises")]
        public IEnumerable<Exercise>? CooldownExercises { get; init; }

        /// <summary>
        /// Order of the workout in the week
        /// </summary>
        [BsonElement("order")]
        public int Order { get; set; } // might not be useful

        [BsonElement("trackName")]
        /// <summary>
        /// [Persist, Pump, Minimalist, Pillars]
        /// </summary>
        public string? TrackName { get; init; }

        [BsonElement("week")]
        public int Week { get; init; }

    }
}