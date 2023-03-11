using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendTestHarness.Controllers
{
    /* Example HTTP Put Controller - not part of Gallifrey backend specification */
    [ApiController]
    [Route( "[controller]" )]
    public class PutController : ControllerBase
    {
        private readonly ILogger<PutController> _logger;

        public PutController( ILogger<PutController> logger )
        {
            _logger = logger;
        }

        [HttpPut]
        [Route( "/example" )]
        public string Put( [FromBody] string data )
        {
            return JsonConvert.SerializeObject( new
            {
                PutRequest = data
            } );
        }
    }
}
