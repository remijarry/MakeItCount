using MongoDB.Bson.Serialization.Attributes;

namespace MakeItCount.Entities
{
    public record WorkoutItemModel
    {
        public int WorkoutItemId { get; init; }

        public string? Name { get; init; }

        public string? Info { get; init; }

        public int Position { get; set; }

        public IEnumerable<Exercise>? Exercises { get; set; }
    }
}