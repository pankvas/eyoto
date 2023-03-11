let statusResponse = {};
let jobId = -1;

const getJobId = () => {
    return jobId;
}

const setJobId = (id) => {    
    jobId = id;
}

const setStatusResponse = (response) => {
  console.log("setStatusResponse : " + response);
  statusResponse = response;
}

const getStatusResponse = () => {
    return statusResponse;
}

const DataModel = {
    statusResponse, jobId, 
    setStatusResponse: setStatusResponse,
    getStatusResponse: getStatusResponse, 
    getJobId: getJobId,
    setJobId: setJobId
};

export default DataModel;