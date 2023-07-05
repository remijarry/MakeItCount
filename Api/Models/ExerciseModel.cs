using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MakeItCount.Models
{

    public record ExerciseModel
    {
        public int ExerciseId { get; init; }

        public string? Name { get; init; }

        public string? VideoId { get; init; }
    }
}