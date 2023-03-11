import React from 'react';
import Table from '@mui/material/Table';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TableBody } from '@mui/material';
import { Box } from '@mui/material';

import combinedResultIndicatorPass from '../../images/combinedResultIndicatorPass.png';
import combinedResultIndicatorFail from '../../images/combinedResultIndicatorFail.png';

import './CombinedResults.css';
const divStyleLeft = {
    position: 'relative',
    top : 10,left : 90,
  };
const combindedResults_box = {
    marginTop:'1', height:'250', width:'325', minHeight:'250', maxHeight:'250', minWidth:'325', maxWidth:'325'
}

const parsedtoFixed = (dataValue) => {
    return parseFloat(Number(dataValue)).toFixed(2);      
};  

const CombinedResults =({jobData}) => {
    let parsedJSON = JSON.parse(jobData);
    let expectedCombinedPrismUP = 0, expectedCombinedPrismIN = 0,  measuredCombinedPrismUP = 0, measuredCombinedPrismIN = 0;
    let resultCombinedPrism = '';
    // console.log('CombinedResults : ' + (jobData) );
    
    expectedCombinedPrismUP = (parsedJSON.data.lms.common.combinedprism.up ? parsedtoFixed(parsedJSON.data.lms.common.combinedprism.up) : 0);
    expectedCombinedPrismIN = (parsedJSON.data.lms.common.combinedprism.in ? parsedtoFixed(parsedJSON.data.lms.common.combinedprism.in) : 0);
    measuredCombinedPrismUP = (parsedJSON.data.measure.common.combinedprism.up ? parsedtoFixed(parsedJSON.data.measure.common.combinedprism.up) : 0);
    measuredCombinedPrismIN = (parsedJSON.data.measure.common.combinedprism.in ? parsedtoFixed(parsedJSON.data.measure.common.combinedprism.in) : 0);
    resultCombinedPrism = parsedJSON.data.result.common.combinedprism;
    
    return (
        <>    
            <div style={divStyleLeft}>
            <Box sx={combindedResults_box}>
                <label className='combindedResults_tableCell_text'><b>Combined</b></label> 
                <div>                
                    <img src={resultCombinedPrism == 'pass' ? combinedResultIndicatorPass : combinedResultIndicatorFail} 
                        alt={resultCombinedPrism == 'pass' ? combinedResultIndicatorPass : combinedResultIndicatorFail} />
                </div>
                <Table>            
                    <TableBody>  
                        <TableRow>                        
                            <TableCell className="combindedResults_tableCell_blue_label">Expected</TableCell>
                            <TableCell className="combindedResults_tableCell_blue_text">{expectedCombinedPrismUP} UP</TableCell>
                        </TableRow>  
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell className="combindedResults_tableCell_blue_text">{expectedCombinedPrismIN} IN</TableCell>
                        </TableRow>  
                        <TableRow>
                            <TableCell className="combindedResults_tableCell_green_label">Measured</TableCell>
                            <TableCell className="combindedResults_tableCell_green_text">{measuredCombinedPrismUP} UP</TableCell>
                        </TableRow>  
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell className="combindedResults_tableCell_green_label">{measuredCombinedPrismIN} IN</TableCell>
                        </TableRow>
                    </TableBody>  
                </Table>
            </Box>
            </div>
        </>
    );
};

export default CombinedResults;