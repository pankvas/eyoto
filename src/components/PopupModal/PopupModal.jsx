import React from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

//import ODRightLens from '../../images/rightLens.png';
//import OSLeftLens from '../../images/leftLens.png';

 import ODRightLens from '../../images/measure.left.surface.scratch.blobs_0.bmp';
 import OSLeftLens from '../../images/measure.left.surface.scratch.blobs_0.bmp';

import './PopupModal.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    borderRadius: '12px',
    padding: '25px',
    boxShadow: 24,
    p: 20,
  }; 
  
const PopupModal = ({ jobData, eye }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
           
    const anEye = eye;
    let parsedJSON  = {};
    parsedJSON = JSON.parse(jobData);
       
    // const leftLens = '../../images/leftLens.png'; // parsedJSON.data.measure.left.images.surface;
    // const rightLens = '../../images/rightLens.png'; //parsedJSON.data.measure.right.images.surface;
    const ODRightLensImage = ODRightLens;
    const OSLeftLenImage = OSLeftLens;
  
    // console.log(" OD RightLens :" + ODRightLensImage)
    // console.log(" OS leftLens :" + OSLeftLenImage)
    
    return (
        <div>
            <img
                src= {anEye == 'OD' ? ODRightLensImage : OSLeftLenImage}     
                width="180" 
                height="140"
                onClick={handleOpen}
                alt="no small image to display"
            />
            <Modal
                open={open}
                >
                <Box sx={style}>
                    <img 
                        id="largeImage"
                        src={anEye == 'OD' ? ODRightLensImage : OSLeftLenImage}                
                        width="915" 
                        height="624"
                        alt="no large image to display"
                    />
                    <Box sx={{ top:"50px", position:'relative', justifyContent:"center",
                                margin:"auto", width:"50px", alignItems:"center"}}>    
                        <Button onClick={handleClose} variant="contained"
                            startIcon={<CloseIcon />} color="primary"> Close</Button>
                    </Box>
                </Box>
          </Modal>
        </div>
      );
    }

export default PopupModal; 