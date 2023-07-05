using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MakeItCount.Entities
{
    [BsonIgnoreExtraElements]
    public record Exercise
    {
        [BsonElement("id")]
        public int ExerciseId { get; init; }

        [BsonElement("name")]
        public string? Name { get; init; }

        [BsonElement("videoId")]
        public string? VideoId { get; init; }
    }
}