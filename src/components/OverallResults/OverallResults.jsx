import React from 'react';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableBody } from '@mui/material/';

import './OverallResults.css';

let prescriptionStatusText = '';
let surfaceStatusText = '';
let overallStatusText = '';

const overallResults_tableCell_black_text = {
    fontWeight: 'bold',
    color: 'black',
    fontFamily: "'Arial', 'Helvetica', 'sans-serif'",
    fontSize: '20px',
    height: '5px',
    lineHeight: '5px'
}

const GetPrescriptionResultStyle = (prescriptionStatus) => {    
    if (prescriptionStatus === 'fail') {
        prescriptionStatusText = 'FAIL';
        return 'red';
    }
    if (prescriptionStatus === 'pass') {
        prescriptionStatusText = 'PASS';
        return 'green';
    }    
}

const GetSurfaceResultStyle = (surfaceStatus) => {
    if (surfaceStatus === 'fail') {
        surfaceStatusText = 'FAIL';
        return 'red';
    }
    if (surfaceStatus === 'pass') {
        surfaceStatusText = 'PASS';
        return 'green';
    }
}

const GetOverallResultStyle = (overallStatus) => {    
    if (overallStatus === 'fail') {
        overallStatusText = 'FAIL';
        return 'red';
    }
    if (overallStatus === 'pass') {
        overallStatusText = 'PASS';
        return 'green';
    }    
}

const OverallResults  =({jobData}) => {

    let parsedJSON  = {};
    let prescriptionStatus = '';
    let surfaceStatus = '';
    let overallStatus = '';
    parsedJSON = JSON.parse(jobData);
    
    prescriptionStatus = parsedJSON.data.result.common.prescription;
    surfaceStatus = parsedJSON.data.result.common.surface;
    overallStatus = parsedJSON.data.result.common.overall;   
    
    return (
        <>    
            <Table>            
                <TableBody>                                    
                    <TableRow>
                        <TableCell sx={overallResults_tableCell_black_text}>Prescription</TableCell>  
                        <TableCell style={{ height: '5px', lineHeight: '5px', fontSize: "20px", fontWeight: 'bold', 
                                    color: GetPrescriptionResultStyle(prescriptionStatus) }} >{prescriptionStatusText}
                        </TableCell>
                    </TableRow>  
                    <TableRow>
                        <TableCell sx={overallResults_tableCell_black_text}>Surface</TableCell> 
                        <TableCell style={{ height: '5px', lineHeight: '5px', fontSize: "20px", fontWeight: 'bold',
                                    color: GetSurfaceResultStyle(surfaceStatus) }}>{surfaceStatusText}
                        </TableCell> 
                    </TableRow>  
                    <TableRow>
                        <TableCell sx={overallResults_tableCell_black_text}>Overall</TableCell>
                        <TableCell style={{ fontSize: "30px", fontWeight: 'bold', height: '15px', lineHeight: '15px',
                                    color: GetOverallResultStyle(overallStatus) }}>{overallStatusText}
                        </TableCell> 
                    </TableRow>
                </TableBody>  
            </Table>    
        </>
    );
};

export default OverallResults;