using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using StackExchange.Redis;
using System;

namespace ToDOList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VersionController : ControllerBase
    {
        private readonly IConfiguration _configuration;
       
        public VersionController(IConfiguration Configuration)
        {
            _configuration = Configuration;
        }

        [HttpGet(Name = "GetVersion")]
        public string Get()
        {
            return _configuration.GetSection("BUILD_ID").Value.ToString();
        }
        
        
    }
}
