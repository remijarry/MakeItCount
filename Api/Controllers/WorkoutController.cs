using Api.Extensions;
using MakeItCount.Entities;
using MakeItCount.Reposity.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Web.Resource;

namespace MakeItCount.Controllers
{

    [Authorize]
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
        public async Task<List<WorkoutModel>> Get()
        {
            Console.WriteLine("Getting workouts");
            var workouts = (await _workoutRepository.GetWorkouts()).Select(workout => workout.AsDto()).ToList();
            return workouts;
        }

        [HttpGet("{id}", Name = "GetWorkout")]
        public async Task<Workout?> Get(int id)
        {
            Console.WriteLine($"Getting workout with id {id}");
            return await _workoutRepository.GetWorkout(id);
        }

        [HttpGet("track/{trackName}", Name = "GetWorkoutByTrackName")]
        public async Task<List<Workout>> Get(string trackName)
        {
            return (await _workoutRepository.GetWorkoutsByTrackName(trackName)).ToList();
        }

    }
}