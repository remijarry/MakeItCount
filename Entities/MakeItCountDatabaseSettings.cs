namespace MakeItCount.Entities
{
    public class MakeItCountDatabaseSettings
    {
        public string? ConnectionString { get; init; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string WorkoutCollectionName { get; set; } = null!;
    }
}
