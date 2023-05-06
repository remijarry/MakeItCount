using MakeItCount.Entities;
using MakeItCount.Reposity.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace MakeItCount.Controllers
{

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

        [HttpGet(Name = "GetWorkouts")]
        public async Task<List<Workout>> Get()
        {
            return (await _workoutRepository.GetWorkouts()).ToList();
        }

        [HttpGet("{id}", Name = "GetWorkout")]
        public async Task<Workout?> Get(int id)
        {
            return await _workoutRepository.GetWorkout(id);
        }

        [HttpGet("track/{trackName}", Name = "GetWorkoutByTrackName")]
        public async Task<List<Workout>> Get(string trackName)
        {
            return (await _workoutRepository.GetWorkoutsByTrackName(trackName)).ToList();
        }

    }
}