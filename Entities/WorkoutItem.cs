using MongoDB.Bson.Serialization.Attributes;

namespace MakeItCount.Entities
{
    [BsonIgnoreExtraElements]
    public record WorkoutItem
    {
        [BsonElement("id")]
        public int WorkoutItemId { get; init; }
        //public int WorkoutId { get; init; }

        [BsonElement("name")]
        public string? Name { get; init; }

        [BsonElement("info")]
        public string? Info { get; init; }

        [BsonElement("position")] // order of the workout item in the workout
        public int Position { get; set; }

        [BsonElement("selectedExercises")]
        public IEnumerable<Exercise>? Exercises { get; set; }
    }
}