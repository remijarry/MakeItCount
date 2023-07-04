using Microsoft.AspNetCore.Mvc.ModelBinding;

namespace QueryParameters
{
    public record WorkoutsQueryParameters
    {
        [BindRequired]
        public string Track { get; init; }
        [BindRequired]
        public int Week { get; init; }
    }
}