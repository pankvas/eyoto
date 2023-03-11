import React from 'react';
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import configData from '../config.js';

import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';
import FetchWrapper from '../services/FetchWrapper'; 

const InProgressPage = () => {

    let requestInProgress = useRef(false);
    let progress = useRef(0);

    const [statusData, setStatusData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const controller = new AbortController();

    const { signal } = controller;

    let jobId = location.state.pageData.jobId;
    //console.log("InProgressPage JSX jobId :" + jobId);  

    const GetStatus = () => {

        if(!requestInProgress.current){

            requestInProgress.current = true;

            configData.getServerPath( (serverPath) => { 

                let URL = serverPath + "?jobid=" + jobId + "&command=status";
    
                FetchWrapper.get(URL, function(data){ 
                    requestInProgress.current = false;
                    console.log("InProgressPage : " + data);
                    setStatusData(data); 
                }); 
            });
        }
     };

    // Run once on intiialisation (Start the progress status checking loop)
    let startProgressInterval = setTimeout(() => {
        if(progress.current < 100 && statusData.status !== "completed"){           
            GetStatus();
         }

    }, 100); // 10th of a second = 100 milliseconds.
    useEffect(() => {  

        // update the progress value
        if(statusData.progress){
            progress.current = parseInt(statusData.progress);
        }
       
        console.log("progress : "+progress.current + " statusData.progress : "+statusData.progress);

        if ( progress.current >= 100 && statusData.status === "running" ) {    
            GetStatus();
        }
        
        console.log("status after GetStatus  : "+statusData.status + "progress.current : " + progress.current);

        if ( progress.current >= 100 && statusData.status === "completed" ) {                     
          
            var pageData = {jobId:jobId, resultsData: statusData};
            console.log('statusData : ' + JSON.stringify(statusData) );

            if(statusData.data.result.common.overall == "pass"){
                navigate(`/JobCompletePage`, {state:{pageData:pageData}} );
            }else{
                navigate(`/ResultsPage`, {state:{pageData:pageData}} );
            }           
        }
    }, [statusData]);

    return (
        <Container>
            <Box sx={{ color: 'grey' }}>
                <h1>Measuring Job ID: {jobId}</h1>
            </Box>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress id='progressValue' color="inherit" />
                <Box
                    sx={{
                        top: 0,
                        left: 0,
                        bottom: 100,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Typography
                        fontSize={40}
                        variant="caption"
                        component="div"
                        color="text.secondary"
                    >{`${ progress.current}%`}</Typography>

                </Box>

            </Backdrop>
        </Container>
    )
}

export default InProgressPage;