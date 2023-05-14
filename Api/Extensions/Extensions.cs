using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MakeItCount.Entities;

namespace Api.Extensions
{
    public static class Extensions
    {
        // create an extension method called AsDto() that maps a workout to a workoutmodel
        public static WorkoutModel AsDto(this Workout workout)
        {
            return new WorkoutModel
            {
                WorkoutId = workout.WorkoutId,
                ShortDescription = workout.ShortDescription,
                Title = workout.Title,
                WorkoutItems = workout.WorkoutItems,
                WarmupDescription = workout.WarmupDescription,
                WarmUpExercises = workout.WarmUpExercises,
                CooldownDescription = workout.CooldownDescription,
                CooldownExercises = workout.CooldownExercises,
                FilePosition = workout.FilePosition,
                Order = workout.Order,
                TrackName = workout.TrackName,
                IsBeginningOfCycle = workout.IsBeginningOfCycle
            };
        }
    }
}