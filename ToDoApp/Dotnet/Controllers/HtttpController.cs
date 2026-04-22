using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace ToDOList.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HtttpController : ControllerBase
    {
        private readonly string _connectionSting;
        private readonly IConfiguration _configuration;
        private readonly IHttpClientFactory _clientFactory;

        public HtttpController(IConfiguration Configuration, IHttpClientFactory clientFactory)
        {
            _configuration = Configuration;
            _clientFactory = clientFactory;
            _connectionSting = _configuration.GetValue<string>("httpAPIEndpoint");
        }

        [HttpGet(Name = "GetHttpResponse")]
        public async Task<string> Get()
        {
            var request = new HttpRequestMessage(HttpMethod.Get, _connectionSting + "Version");

            var client = _clientFactory.CreateClient();

            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                var responseStream = await response.Content.ReadAsStringAsync();
                //string todolist = await JsonSerializer.Deserialize<string>(responseStream);
                return "Success:" + responseStream;
            }
            else
            {
                return "Failure";
            }
        }
    }
}
