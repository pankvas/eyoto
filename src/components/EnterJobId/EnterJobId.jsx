import React from 'react';

import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import configData from '../../config.js';

import Fab from '@mui/material/Fab';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import PlayCircleFilled from '@mui/icons-material/PlayCircleFilled';

import FetchWrapper from '../../services/FetchWrapper';
  
const EnterJobId = ({lastJobId}) => {

    if(!lastJobId) lastJobId = 'N/A first run'

    //console.log('EnterJobId JSX lastJobId : ' + lastJobId);

    const navigate = useNavigate();
    const [startData, setStartData] = useState(false);
    const [jobId, setJobId] = useState(null);

    const handleInput = event => {
        setJobId(event.target.value);
    };

    const handleClick = () => {
        configData.getServerPath( (serverPath) => { 
            FetchWrapper.get(serverPath + "?command=start&jobId=" + jobId, function(data){ setStartData(data); }); 
        });
    }

    useEffect(() => {
           
        if (startData && jobId) {       
            var pageData = {jobId:jobId};
            console.log( "JobCompletePage JSX pageData : "+JSON.stringify(pageData));
            navigate(`/InProgressPage`, {state:{pageData:pageData}} );            
        };
    }, [startData, jobId]);

    return (
        <>
            <Container>
                <TextField className='EnterAJobText' id="outlined-basic" onChange={handleInput} label="Enter Job Id" variant="outlined" />
                <Fab color="primary" aria-label="add" sx={{ position: 'relative', left: '20px' }} 
                onMouseDown={handleClick}>
                    <PlayCircleFilled marginbottom={5}/>
                </Fab>
                <Typography data-testid="startButton" paddingLeft={33} marginTop={1} variant="body1">Start</Typography>
            </Container>
        </>
    )
}

export default EnterJobId;