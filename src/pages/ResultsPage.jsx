import React from 'react';
import {useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";

import configData from '../config.js';

import Prism from '../components/PrismChart/PrismChart';
import OculusDisplay from '../components/OculusDisplay/OculusDisplay';
import OverallResults from '../components/OverallResults/OverallResults';
import OculusTolerance from '../components/OculusTolerance/OculusTolerance';
import CombinedResults from '../components/CombinedResults/CombinedResults';

import PopupModal from '../components/PopupModal/PopupModal';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import RedoIcon from '@mui/icons-material/Redo';
import Grid from '@mui/material/Unstable_Grid2';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import resultIndicatorPass from '../images/combinedResultIndicatorPass.png';
import resultIndicatorFail from '../images/combinedResultIndicatorFail.png';

import leftLens from '../images/leftLens.png';
import rightLens from '../images/rightLens.png';

import '../Variables/Variables.css';

import '../../src/App.css';
import FetchWrapper from '../services/FetchWrapper';

const resultsPage_box = {    
    height:'768', width:'1024', minHeight:'768', maxHeight:'768', minWidth:'1024', maxWidth:'1024'
}
const divStyleLeftOD = {
    position:'fixed', left: '25px'
  };
const divStyleRightOD = {
    position:'fixed', left: '300px'
  };

  const divStyleLeftOS = {
    position:'fixed', left: '975px'
  };
const divStyleRightOS = {
    position:'fixed', left: '750px'
  };
const blackColor = {color : 'rgb(0, 0, 0)', fontWeight: 'bold'};

const ResultsPage = () =>{

    const [redoData, setRedoData] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const resultsData = location.state.pageData.resultsData;
    let lastJobId = location.state.pageData.jobId;

    const handleRedo = () => {
        
        configData.getServerPath( (serverPath) => { 
            FetchWrapper.get(serverPath + "?command=start&jobId=" + lastJobId, function(data){ setRedoData(data); }); 
        });

     }

     // Once the Job to be redone has started, call the InProgressPage
     useEffect(() => {
        if (redoData && lastJobId) {       
            var pageData = {jobId:lastJobId};               
            navigate(`/InProgressPage`, {state:{pageData:pageData}} );            
        };
    }, [redoData, lastJobId, navigate]);
     
     const handleNext = () => {   
         console.log('handleNext')
         var pageData = {jobId:lastJobId, resultsData: resultsData};
         navigate(`/JobCompletePage`, {state:{pageData:pageData}} );          
     }
      
     const handlePass = () => {   
         var pageData = {jobId:lastJobId, resultsData: resultsData};
         navigate(`/JobCompletePage`, {state:{pageData:pageData}} ); 
     }

    const jobData = JSON.stringify(resultsData);
    
    let parsedJSON  = {};      
    parsedJSON = JSON.parse(jobData);
    const overallResult = parsedJSON.data.result.common.overall;
    let resultLeftPrism = '';
    let resultRightPrism = '';

    resultLeftPrism = parsedJSON.data.result.left.prism;
    resultRightPrism = parsedJSON.data.result.right.prism;

    const imgPosition = {
        position:'relative',
        left:-35        
      };

    return (        
        <Box sx={{ position: 'fixed', left:'20px'}}>            
            <Box sx={resultsPage_box}>
                <Grid container direction="row" spacing={12} >
                    <Grid item xs sx={{paddingBottom:'0px'}}>
                        <span style={divStyleLeftOD}>'OUT'</span><span style={blackColor}>OD</span><span style={divStyleRightOD}>'IN'</span>
                        <OculusDisplay eye={'OD'} jobData={jobData} />
                    </Grid>

                    <Grid sx={{paddingLeft:'80px', paddingBottom:'0px'}} item xs={4}>
                        <OculusTolerance jobData={jobData} />
                    </Grid>
                   
                    <Grid item xs sx={{paddingBottom:'0px'}}>                    
                        <span style={divStyleLeftOS}>'OUT'</span><span style={blackColor}>OS</span><span style={divStyleRightOS}>'IN'</span>
                        <OculusDisplay eye={'OS'} jobData={jobData} />
                    </Grid>
                </Grid>

                <Grid sx={{position:'relative', top:'30px'}} container direction="row" spacing={12} >
                        <Grid sx={{ left: '70px'}} 
                            item xs ={5}>
                                    <img src={resultRightPrism == 'pass' ? resultIndicatorPass : resultIndicatorFail} 
                                        alt={resultRightPrism == 'pass' ? resultIndicatorPass : resultIndicatorFail} />
                        </Grid>  
                        <Grid sx={{position:'fixed', left: '650px' }} 
                            item xs ={5}>
                                    <img src={resultLeftPrism == 'pass' ? resultIndicatorPass : resultIndicatorFail} 
                                        alt={resultLeftPrism == 'pass' ? resultIndicatorPass : resultIndicatorFail} />                               
                        </Grid>  
                </Grid>

                <Grid sx={{position:'relative', top:'-40px'}} container direction="row" spacing={12} >                    
                          
                    <Grid item xs={1.5}>
                        <Prism eye={'OD'} directionUPDOWN={true} jobData={jobData} />
                    </Grid>
                   
                    <Grid item xs={1.5}>
                        <Prism eye={'OD'} directionUPDOWN={false} jobData={jobData} />
                    </Grid>
                    
                    <Grid sx={{paddingLeft:'90px'}} item xs={4}>
                        <CombinedResults jobData={jobData}/>
                    </Grid>
                    <Grid item xs={1.5} sx={{paddingLeft:'90px'}}>
                        <Prism eye={'OS'} directionUPDOWN={true} jobData={jobData} />
                    </Grid>
                   
                    <Grid item xs={1.5} sx={{paddingLeft:'100px'}}>
                        <Prism eye={'OS'} directionUPDOWN={false} jobData={jobData} />
                    </Grid>
                </Grid>            

                <Grid sx={{position:'relative', top:'-60px'}} container direction="row" spacing={12} >
                    <Grid item xs>
                        <PopupModal jobData={jobData} eye={'OD'}/>                    
                    </Grid>
                    <Grid item xs>
                        <OverallResults jobData={jobData}/>
                    </Grid>
                    <Grid item xs>
                        <PopupModal jobData={jobData} eye={'OS'}/>
                    </Grid>
                </Grid>
                
                <Grid sx={{position:'relative', top:'-100px'}} container direction="row" spacing={12} >
                    <Grid item xs>
                        <Button variant="contained" onClick={handleRedo}
                            sx={{ color:'white', backgroundColor: 'red', borderColor: 'red', position:'fixed', left: '20px', }}
                                color="success" startIcon={<RedoIcon />}>
                            REDO
                        </Button>
                    </Grid>           
                    <Grid item xs ={1}></Grid>
                    <Grid item xs ={4}><strong>Job ID : </strong>{lastJobId}</Grid>
                    <Grid item xs>                        
                        <Button sx={{position:'fixed', left: '920px', visibility: overallResult != 'pass' ? 'visible' : 'hidden'    }} 
                            onClick={handlePass} variant="contained"                             
                            startIcon={<CheckCircleOutlineIcon />} color="success"> PASS</Button>                    

                        <Button sx={{position:'fixed', left: '1040px' }} 
                            onClick={handleNext} variant="contained" 
                            startIcon={<CheckCircleOutlineIcon />} color="primary"> OK</Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>        
    )
};

export default ResultsPage; 