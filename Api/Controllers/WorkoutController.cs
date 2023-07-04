using Api.Extensions;
using MakeItCount.Entities;
using MakeItCount.Reposity.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;
using QueryParameters;

namespace MakeItCount.Controllers
{

    //[Authorize]
    [ApiController]
    [Route("[controller]")]
    public class WorkoutsController : ControllerBase
    {
        private readonly ILogger<WorkoutsController> _logger;
        private readonly IWorkoutRepository _workoutRepository;

        public WorkoutsController(
            IWorkoutRepository workoutRepository,
            ILogger<WorkoutsController> logger)
        {
            _workoutRepository = workoutRepository;
            _logger = logger;
        }

        [RequiredScope("Workouts.Read")]
        [HttpGet(Name = "GetWorkouts")]
        public async Task<List<WorkoutModel>> Get([FromQuery] WorkoutsQueryParameters queryParameters)
        {
            var workouts = (await _workoutRepository.GetWorkoutsByTrackAndWeek(queryParameters.Track, queryParameters.Week)).Select(workout => workout.AsDto()).ToList();
            return workouts;
        }

        [RequiredScope("Workouts.Read")]
        [HttpGet("{id}", Name = "GetWorkout")]
        public async Task<Workout?> Get(int id)
        {
            Console.WriteLine($"Getting workout with id {id}");
            return await _workoutRepository.GetWorkout(id);
        }

    }
}