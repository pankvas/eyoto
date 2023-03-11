import { useState, useEffect } from "react";
import Container from '@mui/material/Container';
import FetchWrapper from "./services/FetchWrapper";

const TestHarness = () => {

    const [statusData, setStatusData] = useState(false);
    const [startData, setStartData] = useState(false);
    const [cancelData, setCancelData] = useState(false);
    const [scanData, setScanData] = useState(false);
    const [putData, setPutData] = useState(false);
    const [postData, setPostData] = useState(false);    
    const [removeData, setRemoveData] = useState(false);    

    useEffect(() => {
    }, [statusData, startData, cancelData, scanData]);

    const GetStatus = async () => {
        const URL = 'https://localhost:44395/status?command=status&jobId=9999';
        FetchWrapper.setBearerToken("gjnfjn2323"); // example bearer token for Azure B2C authentication
        FetchWrapper.get(URL, setStatusData, GetStatus);
    };  

    const GetStart = async () => {
        const URL = 'https://localhost:44395/status?command=start&jobId=9999';
        FetchWrapper.get(URL, setStartData);
    };  

    const GetCancel = async () => {
        const URL = 'https://localhost:44395/status?command=cancel&jobId=9999';
        FetchWrapper.get(URL, setCancelData);        
    };  

    const GetScan = async () => {
        const URL = 'https://localhost:44395/status?command=scan&jobId=9999';
        FetchWrapper.get(URL, setScanData);
    };  

    /** Example POST/PUT/REMOVE(delete) methods - not part of Gallifrey backend specification */

    const Post = async () => {
        const URL = 'https://localhost:44395/example';
        let data = 'example post data'
        FetchWrapper.post(URL, setPostData, data);
    };  

    const Put = async () => {
        const URL = 'https://localhost:44395/example';
        let data = 'example put data';
        FetchWrapper.put(URL, setPutData, data);
    };      

    const Remove = async () => {
        const URL = 'https://localhost:44395/example';
        let data = 'example remove data';
        FetchWrapper.remove(URL, setRemoveData, data);
    };          

    return(
        <Container>
        <br/><br/>
            <div>
                <button onClick={GetStatus}>Status</button>

                {statusData && (
                <div><b>Status Response : </b><br/><br/>
                    {JSON.stringify(statusData)}
                </div>
                )}
            </div>

            <br/><br/>
            <div>
                <button onClick={GetStart}>Start</button>

                {startData && (
                <div><b>Start Response : </b><br/><br/>
                    {JSON.stringify(startData)}
                </div>
                )}
            </div>

            <br/><br/>
            <div>
                <button onClick={GetCancel}>Cancel</button>

                {cancelData && (
                <div><b>Cancel Response : </b><br/><br/>
                    {JSON.stringify(cancelData)}
                </div>
                )}
            </div>        

            <br/><br/>
            <div>
                <button onClick={GetScan}>Scan</button>

                {scanData && (
                <div><b>Scan Response : </b><br/><br/>
                    {JSON.stringify(scanData)}
                </div>
                )}
            </div>               

            <br/><br/>
            <div>
                <button onClick={Put}>Example Put</button>

                {putData && (
                <div><b>Put Response : </b><br/><br/>
                    {JSON.stringify(putData)}
                </div>
                )}
            </div>       

            <br/><br/>
            <div>
                <button onClick={Post}>Example Post</button>

                {postData && (
                <div><b>Post Response : </b><br/><br/>
                    {JSON.stringify(postData)}
                </div>
                )}
            </div>   

            <br/><br/>
            <div>
                <button onClick={Remove}>Example Remove</button>

                {removeData && (
                <div><b>Remove Response : </b><br/><br/>
                    {JSON.stringify(removeData)}
                </div>
                )}
            </div>                                                     

        </Container>        
    )
 }
 
 export default TestHarness;