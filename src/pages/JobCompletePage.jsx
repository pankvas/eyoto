import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import EnterJobId from '../components/EnterJobId/EnterJobId';
import Fab from '@mui/material/Fab';
import Typography from '@mui/material/Typography';
import DoneIcon from '@mui/icons-material/Done';
import Divider from '@mui/material/Divider';
import {useLocation, useNavigate } from 'react-router-dom';

const JobCompletePage = () => {

    const location = useLocation();
    const navigate = useNavigate();
    
   // console.log("XXXX JobCompletePage location.state :  "+JSON.stringify(location.state));
    
    var pageData = location.state.pageData;
    let lastJobId = location.state.pageData.jobId;
    let overalResult = location.state.pageData.resultsData.data.result.common.overall;
        
    //console.log('JobCompletePage JSX lastJobId : ' + lastJobId);

    const handleClick = () => {  
        navigate(`/ResultsPage`, {state:{pageData:pageData}} );
    };

    return(
        <Container>           
            {overalResult && <div id="overalResult" >
                <Fab color="success" aria-label="add">
                    <DoneIcon marginbottom={5}/>
                </Fab>
                <Typography marginTop={1} variant="body1">Job ({lastJobId}) Passed</Typography>
            </div>}
            <Divider />
            <Box sx = {{ color:'grey'}}>                       
                <h1><div style={{cursor:'pointer', color:'blue',textDecoration:'underline'}} onClick={handleClick}>View results</div> or scan your next job</h1>              
            </Box>
            <Grid xs={2}></Grid>
            <Grid xs={5}>
                <Box sx = {{ position:'relative', top:'50px'}}>
                    <Paper elevation={24} sx={{ width:'400px', padding:'50px',margin: 'auto'}}>
                        <EnterJobId lastJobId={lastJobId}/>             
                    </Paper>
                </Box>
            </Grid>
            <Grid xs={2}></Grid>      
        </Container>
    )
}

export default JobCompletePage;