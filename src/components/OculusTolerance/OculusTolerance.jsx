import React from 'react';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableBody } from '@mui/material';
import { Box } from '@mui/material';

import './OculusTolerance.css';

const oculusTolerance_box = {
    marginTop:'1', height:'250', width:'325', minHeight:'250', maxHeight:'250', minWidth:'325', maxWidth:'325'
}

const LMS = ({jobId, lmsLeftSph, lmsLeftCyl, lmsLeftAdd, lmsLeftAx, lmsRightSph, lmsRightCyl, lmsRightAdd, lmsRightAx}) =>
{
    if (!jobId) return <div />;
        return (
            <>
             <Box sx={oculusTolerance_box}>               
                <Table >
                    <TableBody>  
                        <TableRow>
                            <TableCell colSpan={3} align='center' className="oculusTolerance_tableCell_text">Expected</TableCell>
                        </TableRow>   
                        <TableRow>
                            <TableCell padding="none" className="oculusTolerance_tableCell">{lmsRightSph}</TableCell>
                            <TableCell align="center" padding="none" className="oculusTolerance_tableCell_text">Sphere</TableCell>
                            <TableCell padding="none" className="oculusTolerance_tableCell">{lmsLeftSph}</TableCell>
                        </TableRow>   
                        <TableRow>
                            <TableCell padding="none" className="oculusTolerance_tableCell">{lmsRightCyl}</TableCell>
                            <TableCell align="center" padding="none" className="oculusTolerance_tableCell_text">Cylinder</TableCell>
                            <TableCell padding="none" className="oculusTolerance_tableCell">{lmsLeftCyl}</TableCell>
                        </TableRow>   
                        <TableRow>
                            <TableCell padding="none" className="oculusTolerance_tableCell">{lmsRightAx}</TableCell> 
                            <TableCell align="center" padding="none" className="oculusTolerance_tableCell_text">Axis</TableCell> 
                            <TableCell padding="none" className="oculusTolerance_tableCell">{lmsLeftAx}</TableCell>       
                        </TableRow>   
                        <TableRow>
                            <TableCell padding="none" className="oculusTolerance_tableCell">{lmsRightAdd}</TableCell>
                            <TableCell align="center" padding="none" className="oculusTolerance_tableCell_text">Addition</TableCell>
                            <TableCell padding="none" className="oculusTolerance_tableCell">{lmsLeftAdd}</TableCell>
                        </TableRow> 
                    </TableBody>
                </Table>
            </Box> 
        </>
    );
};

const OculusTolerance =({jobData}) => {
    
    let parsedJSON = {};      
    parsedJSON = JSON.parse(jobData);
    return (
        <> 
            <div key={parsedJSON.data}>            
                <LMS
                    key={parsedJSON.data.lms}
                    jobId={parsedJSON.jobid}

                    lmsRightSph={parsedJSON.data.lms.right.sph}
                    lmsRightCyl={parsedJSON.data.lms.right.cyl}
                    lmsRightAdd={parsedJSON.data.lms.right.add}
                    lmsRightAx={parsedJSON.data.lms.right.ax}

                    lmsLeftSph={parsedJSON.data.lms.left.sph}
                    lmsLeftCyl={parsedJSON.data.lms.left.cyl}
                    lmsLeftAdd={parsedJSON.data.lms.left.add}
                    lmsLeftAx={parsedJSON.data.lms.left.ax}                             
                />            
            </div>
        </>
    );
};

export default OculusTolerance;