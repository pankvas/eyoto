import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import EnterJobId from '../components/EnterJobId/EnterJobId';

const LandingPage = () => {   
    return(
        <Container >
            <Grid>
                <Box sx = {{ color:'grey'}}>                       
                    <h1>Please scan your first job</h1>
                </Box>
                <Grid xs={2}></Grid>
                <Grid xs={5}>
                    <Box sx = {{ position:'relative', top:'50px'}}>   
                        <Paper elevation={24} sx={{ width:'400px', padding:'50px',margin: 'auto'}}>
                            <EnterJobId />                        
                        </Paper>
                    </Box>    
                </Grid>
                <Grid xs={2}></Grid>
            </Grid>            
        </Container>
    )
}

export default LandingPage;