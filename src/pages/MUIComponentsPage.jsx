

import * as React from 'react';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from "react";

import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

import StarIcon from '@mui/icons-material/Star';
import MailIcon from '@mui/icons-material/Mail';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

import { DataGrid } from '@mui/x-data-grid';
import Modal from '@mui/material/Modal';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Fab from '@mui/material/Fab';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import Rating from '@mui/material/Rating';
import InputLabel from '@mui/material/InputLabel';
import NativeSelect from '@mui/material/NativeSelect';
import Snackbar from '@mui/material/Snackbar';
import Slider from '@mui/material/Slider';
import FormGroup from '@mui/material/FormGroup';
import Switch from '@mui/material/Switch';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ToggleButton from '@mui/material/ToggleButton';
import Avatar  from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Skeleton from '@mui/material/Skeleton';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import TextareaAutosize from  '@mui/material/TextareaAutosize';

function Temp() {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
  const [openModal, setOpenModal] = useState(false);  

  const handleModalOpen = () => {
    setOpenModal(true);
  }; 

  const handleModalClose = () => {
    setOpenModal(false);
  }; 

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const autoCompleteOptions = ['The Godfather', 'Pulp Fiction', 'The Butterfly Effect', 'The Matrix', 'Scarface'];

  const [ratingValue, setRatingValue] = useState(0);

  const handleSliderChange = (event) =>{
    window.console.log("slider value: "+event.target.value);
  }

  const [snackBarOpen, openSnackbar] = useState(false);
  useEffect(() => {
    console.log("snackBarOpen: "+snackBarOpen);
    Snackbar.open = true;
  }, [snackBarOpen]);

  const [alignment, setAlignment] = useState();
  const handleDevices = (event, newDevices) => {
    if (newDevices.length) {
      console.log("newDevices : "+newDevices);
      setAlignment(newDevices);
    }
  };  
  
  const handleDeleteChip = (event) => {
    document.getElementById("testChip").remove();
  }; 

  const [openBackdrop, setBackdrop] = useState(false);  
  const handleToggleBackdrop = () => {
    setBackdrop(true);
  }; 
  const handleClose = () => {
    setBackdrop(false);
  }; 
  
  const [openDialogue, setDialogueOpen] = useState(false);

  const handleDialogueClickOpen = () => {
    setDialogueOpen(true);
  };

  const handleDialogueClose = () => {
    setDialogueOpen(false);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }  

  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
];

const SpeedDialActions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];
  
return (

<Container sx={{position: "relative", top:"20px"}}>

{/* ROW 1 */}
<Grid container spacing={2}>

  <Grid xs={1}>
    <Item>
      <b>Avatar</b>
      <Avatar
        alt="Jack Sparrow"
        src="https://images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      />    
    </Item>
  </Grid>

  <Grid xs={3}>
    <Item>
      <b>Autocomplete</b>
      <Autocomplete
      id="grouped-demo"
      options={autoCompleteOptions}
      renderInput={(params) => <TextField {...params} label="With categories" />}
      />
    </Item>
  </Grid>

  <Grid xs={2}>
    <Item>
    <b>Standard Button</b>
      <Button variant="contained" onClick={() => {alert("Hello World Clicked");}}>Hello World</Button>
    </Item>
  </Grid>

  <Grid xs={1}>
    <Item>
    <b>Checkbox</b>
      <Checkbox defaultChecked />
    </Item>
  </Grid>  

  <Grid xs={3}>
     <Item>
     <b>Button Group</b>
    <ButtonGroup variant="contained" aria-label="outlined primary button group">
        <Button onClick={() => {alert("Button One Clicked");}}>One</Button>
        <Button onClick={() => {alert("Button Two Clicked");}}>Two</Button>
        <Button onClick={() => {alert("Button Three Clicked");}}>Three</Button>
    </ButtonGroup>
    </Item>  
  </Grid> 

  <Grid xs={2}>
     <Item>
     <b>Floating Action Button</b>
      <Fab color="primary" aria-label="star">
        <StarIcon />
      </Fab>
     </Item>  
  </Grid>
  
</Grid>

{/* ROW 2 */}
<Grid container spacing={2}>

  <Grid xs={6}>
    <Item>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label"><b>Form / Radio Buttons</b></FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="Burgers" control={<Radio />} label="Burgers" />
          <FormControlLabel value="Pizza" control={<Radio />} label="Pizza" />
          <FormControlLabel value="Curry" control={<Radio />} label="Curry" />
        </RadioGroup>
      </FormControl>
    </Item>
  </Grid>   

  <Grid xs={2}>
    <Item>
    <b>Rating / Star Icons</b>
      <Rating
      name="hover-feedback"
      value={ratingValue}
      precision={0.5}
      onChange={(event, newValue) => {
        setRatingValue(newValue);
      }}
      emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
    </Item>
  </Grid>

  <Grid xs={2}>
    <Item>
    <b>Form / Native Select</b>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          Age
        </InputLabel>
        <NativeSelect
            defaultValue={30}
            inputProps={{
              name: 'age',
              id: 'uncontrolled-native',
            }}
          >
            <option value={10}>Ten</option>
            <option value={20}>Twenty</option>
            <option value={30}>Thirty</option>
          </NativeSelect>
      </FormControl>
    </Item>  
  </Grid>    

  <Grid xs={2}>
    <Item>
    <b>Slider</b>
      <Slider id="slider" defaultValue={50} aria-label="Default" valueLabelDisplay="auto" onChange={handleSliderChange}   
        sx={{
          width: 150,
          color: 'success.main',
      }}/>
    </Item>  
  </Grid>

</Grid>

{/* ROW 3 */}
<Grid container spacing={2}>

  <Grid xs={2}>
    <Item>
    <b>Snackbar</b>
      <Button onClick={() => openSnackbar(!snackBarOpen)}>Toggle simple snackbar</Button>
      <Snackbar
        sx={{ '& .MuiPaper-root': {
            backgroundColor: 'green',
          },}}
        open={snackBarOpen}
        autoHideDuration={6000}
        severity="success" 
        message="A Snackbar Message"
      />
    </Item>  
   </Grid>

  <Grid xs={2}>
      <Item>
      <b>Switch Button / Label</b>
      <FormGroup>
        <FormControlLabel control={<Switch defaultChecked />} label="Label" />
      </FormGroup>    
      </Item>
  </Grid>
  
  <Grid xs={5}>
      <Item>
      <b>Text Fields</b>
      <br/>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
      </Item>
  </Grid>

  <Grid xs={3}>
      <Item>
      <b>Toggle Button</b>
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleDevices}
          aria-label="Platform"
        >
          <ToggleButton value="web">Web</ToggleButton>
          <ToggleButton value="android">Android</ToggleButton>
          <ToggleButton value="ios">iOS</ToggleButton>
        </ToggleButtonGroup>
      </Item>  
  </Grid>

</Grid>

{/* ROW 4 */}
<Grid container spacing={2}>

  <Grid xs={7}>
        <Item>
        <b>Data Grid</b>
          <Box sx={{ height: 210, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
              disableSelectionOnClick
              experimentalFeatures={{ newEditingApi: true }}
            />
          </Box>
        </Item>  
  </Grid>

  <Grid xs={2}>
        <Item>
        <b>List / Divider</b>
          <List component="nav" aria-label="mailbox folders">
            <ListItem button>
              <ListItemText primary="Inbox" />
            </ListItem>
            <Divider />
            <Divider light />
            <ListItem button>
              <ListItemText primary="Sent" />
            </ListItem>
          </List>
        </Item>  
        <br/>
          <Item>
          <b>TextareaAutosize</b>
          <br/>
            <TextareaAutosize
              aria-label="empty textarea"
              placeholder="Type here"
              style={{ width: 100 }}
            />
          </Item>        
  </Grid>

  <Grid xs={1}>
        <Item>
          <b>Badge</b>  
          <br/><br/>
          <Badge badgeContent={4} color="secondary">
            <MailIcon color="action" />
          </Badge>
          <br/>
        </Item>
        <br/>
        <Item>
        <b>Modal</b>  
          <Button onClick={handleModalOpen}>Open modal</Button>
          <Modal
            open={openModal}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Text in a modal
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
          </Item>
  </Grid>

  <Grid xs={2}>
        <Item>
        <b>Speed Dial</b>  
            <SpeedDial
            ariaLabel="SpeedDial basic example"
            icon={<SpeedDialIcon />}
            >
            {SpeedDialActions.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                onClick={() => {alert(action.name + " Clicked");}}
              />
            ))}
          </SpeedDial>        
        </Item>  
  </Grid>

</Grid>

{/* ROW 5 */}
<Grid container spacing={2}>

  <Grid xs={2}>
    <Item>
    <b>Tool Tip</b>
      <Tooltip title="Tool Tip.." arrow>
        <Button>Hover for Tooltip</Button>
      </Tooltip>
    </Item>
  </Grid>

  <Grid xs={2}>
    <Item>
    <b>Backdrop</b>
    <Button onClick={handleToggleBackdrop}>Show backdrop</Button>
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openBackdrop}
      onClick={handleClose}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
    </Item>
  </Grid>

  <Grid xs={2}>
    <Item>
    <b>Dialog</b>
      <Button variant="outlined" onClick={handleDialogueClickOpen}>
        Open alert dialog
      </Button>
      <Dialog
        open={openDialogue}
        onClose={handleDialogueClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            An important decision for you to make
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogueClose}>Disagree</Button>
          <Button onClick={handleDialogueClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </Item>      
  </Grid>

  <Grid xs={1}>
    <Item>
    <b>Progress</b>
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    </Item>
  </Grid>

  <Grid xs={1}>
    <Item>
      <b>Skeleton</b>
      <Skeleton animation="wave" sx={{height: 50}} /> 
    </Item>
  </Grid>  


  <Grid xs={4}>
    <Item>
    <b>Bread Crumbs</b>
      <br/>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          color="inherit"
          href="https://mui.com/material-ui/react-breadcrumbs/"
        >
          Breadcrumbs
        </Link>
        <Typography color="text.primary">MUI Test App</Typography>
    </Breadcrumbs>
    </Item>
  </Grid>    

</Grid>

{/* ROW 6 */}
<Grid container spacing={2}>

<Grid xs={2}>
    <Item>
    <b>Deletable Chip</b>
      <Chip id="testChip" label="Deletable" onDelete={handleDeleteChip} />
    </Item> 
  </Grid>

  <Grid xs={4}>
    <Item>
    <b>Menu List</b>
      <Paper sx={{ width: 320, maxWidth: '100%' }}>
        <MenuList>
          <MenuItem onClick={() => {alert("Cut Clicked");}}>
            <ListItemIcon>
              <ContentCut fontSize="small" />
            </ListItemIcon>
            <ListItemText>Cut</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘X
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => {alert("Copy Clicked");}}>
            <ListItemIcon>
              <ContentCopy fontSize="small" />
            </ListItemIcon>
            <ListItemText>Copy</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘C
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => {alert("Paste Clicked");}}>
            <ListItemIcon>
              <ContentPaste fontSize="small" />
            </ListItemIcon>
            <ListItemText>Paste</ListItemText>
            <Typography variant="body2" color="text.secondary">
              ⌘V
            </Typography>
          </MenuItem>
          <Divider />
        </MenuList>
      </Paper>    
    </Item>
  </Grid>

  <Grid xs={6}>
    <Item>
    <b>Tabs</b>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
      <Tabs value={tabValue} onChange={handleTabChange} aria-label="basic tabs example">
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={tabValue} index={0}>
      Item One
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
      Item Two
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
      Item Three
      </TabPanel>
      </Box>
    </Item>  
  </Grid>    

</Grid>

</Container>
  );
}
export default Temp;