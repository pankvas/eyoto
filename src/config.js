import FetchWrapper from '../src/services/FetchWrapper';

// Server path file (for external builds)
const SERVER_PATH_FILE = '/api/serverConfig.json';

// BackendTestHarness server endpoint path
let localServerPath = "https://localhost:44395/action";

// Bradleys Server endpoint path:
//let localServerPath = "http://127.0.0.1:8000/action";

const getServerPath = (callback) => {

   // check if file exists first
   var xhr = new XMLHttpRequest()
   xhr.onreadystatechange = function() {
       if (this.readyState === this.DONE) {
            FetchWrapper.get(SERVER_PATH_FILE, function(data){ 
               // SERVER_PATH_FILE exists and has been parsed, get the endpoint path from the file.
               callback(data.path);
            } ,this, 
            (error) => {
               // Error attempting to read SERVER_PATH_FILE (assuming local debug)
               callback(localServerPath);
            }
         );
       }else{
         // Unable to find SERVER_PATH_FILE (assuming local debug)
         callback(localServerPath);
       }
   }
   xhr.open('HEAD', SERVER_PATH_FILE)

}

const ConfigData = { getServerPath };

export default ConfigData;
 