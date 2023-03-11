using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.IO;
using System.Text;
using BackendTestHarness.Models;
using Newtonsoft.Json.Linq;

namespace BackendTestHarness.Controllers
{
    [ApiController]
    [Route( "[controller]" )]
    public class StatusController : ControllerBase
    {
        const string COMMAND_TYPE_START = "start";
        const string COMMAND_TYPE_CANCEL = "cancel";
        const string COMMAND_TYPE_SCAN = "scan";
        const string COMMAND_TYPE_STATUS = "status";

       // private int _progressCounter = 10;
        private readonly ILogger<StatusController> _logger;

        public StatusController( ILogger<StatusController> logger )
        {
            _logger = logger;
        }

        [HttpGet]
        [Route( "/action" )]
        public string Get(string command, int jobId)
        {
            if ( command == COMMAND_TYPE_START )
            {
                return getStart();
            }
            else if ( command == COMMAND_TYPE_CANCEL )
            {
                return getCancel();
            }
            else if ( command == COMMAND_TYPE_SCAN )
            {
                return getScan();
            }
            else if ( command == COMMAND_TYPE_STATUS )
            {
                {
                    if ( jobId == 1111 ) return getProgress();
                    else return getStatus();
                }
            }

            return "";
        }

        private string getStart()
        {
            return JsonConvert.SerializeObject( new
            {
                jobid = 99999,
                status = "running",
                message = new
                {
                    id = "text.id.string",
                    texten = "Measurement in progress",
                    textlocale = "Measurement in progress"
                },
                progress = 0,
                result = new { },
                data = new { }
            } );
        }

        private string getCancel()
        {
            return JsonConvert.SerializeObject( new
            {
                jobid = 99999,
                status = "cancelled",
                message = new
                {
                    id = "text.id.string",
                    texten = "Measurement cancelled",
                    textlocale = "Measurement cancelled"
                },
                progress = 100,
                result = new { },
                data = new { }
            } );
        }

        private string getScan()
        {
            return JsonConvert.SerializeObject( new
            {
                jobid = 99999,
                status = "",
                message = new
                { },
                progress = 0,
                result = new { },
                data = new { }
            } );
        }

        private string getProgress()
        {
            
            return JsonConvert.SerializeObject( new
            {
                jobid = 99999,
                status = "running",
                message = new
                {
                    id = "text.id.string",
                    texten = "Running surface scan",
                    textlocale = "Running surface scan"
                },
                progress = 30,
                result = new { },
                data = new { }
            } );
        }

        private string getStatus()
        {
            string counter = "0";
            if (TestHarness.ProgressCounter >= 100)
            {
                counter = "100";
                TestHarness.ProgressCounter = 0;
            } 
            else
            {
                counter = (Convert.ToString(TestHarness.ProgressCounter += 10));
            } 

            string path = @"C:\source\GallifreyBackendTestHarness\JSONdata.txt";
            
            using var fs = new FileStream(path, FileMode.Open, FileAccess.Read);
            using var sr = new StreamReader(fs, Encoding.UTF8);

            string content = sr.ReadToEnd();
            JObject jsonDataObject = JsonConvert.DeserializeObject( content ) as JObject; 

            // set current progress value
            jsonDataObject[ "progress" ] = counter;

            if (TestHarness.ProgressCounter >= 100)
            {
                jsonDataObject[ "status" ] = "completed";
            }

            // serialise data for output
            string outputData = JsonConvert.SerializeObject(jsonDataObject);

            return outputData;
        }        
    }
}
