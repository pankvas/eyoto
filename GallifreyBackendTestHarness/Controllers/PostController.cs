using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendTestHarness.Controllers
{
    /* Example HTTP Post Controller - not part of Gallifrey backend specification */
    [ApiController]
    [Route( "[controller]" )]
    public class PostController : ControllerBase
    {
        private readonly ILogger<PostController> _logger;

        public PostController( ILogger<PostController> logger )
        {
            _logger = logger;
        }

        [HttpPost]
        [Route( "/example" )]
        public string Post( [FromBody] string data )
        {
            return JsonConvert.SerializeObject( new
            {
                PostRequest = data
            } );
        }
    }
}
