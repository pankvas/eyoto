using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendTestHarness.Controllers
{
    /* Example HTTP Delete Controller - not part of Gallifrey backend specification */
    [ApiController]
    [Route( "[controller]" )]
    public class DeleteController : ControllerBase
    {
        private readonly ILogger<DeleteController> _logger;

        public DeleteController( ILogger<DeleteController> logger )
        {
            _logger = logger;
        }

        [HttpDelete]
        [Route( "/example" )]
        public string Delete( [FromBody] string data )
        {
            return JsonConvert.SerializeObject( new
            {
                DeleteRequest = data
            } );
        }
    }
}
