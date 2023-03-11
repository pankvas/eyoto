// Fetch Wrapper for HTTP communication with backend API's

// bearer token for Azure B2C authentication
let bearerToken = null;

/**
* Handle the HTTP response and output any errors
* @param {object} httpPromise The promise object after the HTTP request has been sent
* @param {function} callback The callback function call with the results of the Get request
* @param {function} callingMethod An optional reference to the calling method (this) used for debugging
* @param {function} errorHandler An optional reference to the error handling method
*/
const responseHandler = async (httpPromise, callback, callingMethod, errorHandler) => {
  httpPromise.then(function (response) {
    if(callingMethod){
       console.log(callingMethod.name + " response.status: " + response.status);  
    }else {
     // console.log("response.status: " + response.status);
    }    
    return response.json();
  })
  .then((responseData) => {
    // console.log('Success:', responseData);
    try{
      callback(JSON.parse(responseData));
    }
    catch{
      callback(responseData);
    }
  })
  .catch((error) => {
    if(callingMethod){
      console.log("callingMethod : " + callingMethod.name);
    }
    if(errorHandler){
      errorHandler(error);
    }else{
      console.log('Error:', error);
    }
  });
}

/**
* Set the bearer token used in Azure B2C authentication with server
* @param {string} token The Bearer token
*/
const setBearerToken = (token) => {
  console.log("setBearerToken : " + token);
  bearerToken = token;
}

/**
* Perform a HTTP Get request via the Fetch API
* @param {string} URL The function to call once the group has been added
* @param {function} callback The callback function call with the results of the Get request
* @param {function} callingMethod An optional reference to the calling method (this) used for debugging
* @param {function} errorHandler An optional reference to the error handling method
*/
const get = async (URL, callback, callingMethod, errorHandler) => {

  responseHandler(
    fetch(URL, {
      mode: 'cors',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
       // 'Authorization': `Bearer ${bearerToken}`
      },
    })
  ,callback, callingMethod, errorHandler);
}

/**
* Perform a HTTP Put request via the Fetch API
* @param {string} URL The function to call once the group has been added
* @param {function} callback The callback function call with the results of the Put request
* @param {object} data Any data to be included as part of the request body
* @param {function} callingMethod An optional reference to the calling method (this) used for debugging
* @param {function} errorHandler An optional reference to the error handling method
*/
const put = async (URL, callback, data, callingMethod, errorHandler) => {

  responseHandler(
    fetch(URL, {
      mode: 'cors',
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
      },
      body: JSON.stringify(data),
    })
    ,callback, callingMethod, errorHandler);
  }
/**
* Perform a HTTP Post request via the Fetch API
* @param {string} URL The function to call once the group has been added
* @param {function} callback The callback function call with the results of the Post request
* @param {object} data Any data to be included as part of the request body
* @param {function} callingMethod An optional reference to the calling method (this) used for debugging
* @param {function} errorHandler An optional reference to the error handling method
*/
const post = async (URL, callback, data, callingMethod, errorHandler) => {
  
  responseHandler(
    fetch(URL, {
      mode: 'cors',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
      },
      body: JSON.stringify(data),
    })
    ,callback, callingMethod, errorHandler);
}

/**
* Perform a HTTP Delete request via the Fetch API (note: 'Delete' is a reserved keyword in javascript, hence the method name 'remove')
* @param {string} URL The function to call once the group has been added
* @param {function} callback The callback function call with the results of the Delete request
* @param {object} data Any data to be included as part of the request body
* @param {function} callingMethod An optional reference to the calling method (this) used for debugging
* @param {function} errorHandler An optional reference to the error handling method
*/
const remove = async (URL, callback, data, callingMethod, errorHandler) => {
  responseHandler(
    fetch(URL, {
      mode: 'cors',
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${bearerToken}`
      },
      body: JSON.stringify(data),
    })
    ,callback, callingMethod, errorHandler);
}

const FetchWrapper = {
  get, put, post, remove, bearerToken, setBearerToken: setBearerToken
};

export default FetchWrapper;