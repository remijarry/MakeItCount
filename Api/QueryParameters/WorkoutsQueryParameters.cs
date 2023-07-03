using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace QueryParameters
{
    public record WorkoutsQueryParameters
    {
        [BindRequired]
        public string TrackName { get; init; }
        [BindRequired]
        public int Week { get; init; }
    }
}