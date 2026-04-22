using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using StackExchange.Redis;
using System;

namespace ToDOList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RedisController : ControllerBase
    {
        private readonly IConfiguration _configuration;
       
        public RedisController(IConfiguration Configuration)
        {
            _configuration = Configuration;
        }

        [HttpGet]
        public IActionResult Get(string key)
        {
            IDatabase cache = ConnectionMultiplexer.Connect(_configuration["RedisConnection"]).GetDatabase();
            var redisValue = cache.StringGet(key).ToString();
            return Ok(redisValue);
        }

        [HttpPost]
        public IActionResult Post(string key, string value)
        {
            IDatabase cache = ConnectionMultiplexer.Connect(_configuration["RedisConnection"]).GetDatabase();
            var isSuccess = false;
            try
            {
                isSuccess = cache.StringSet(key, value);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return Ok(isSuccess);
        }
    }
}
