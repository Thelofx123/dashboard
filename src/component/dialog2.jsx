import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { Box } from '@mui/system';
import data from "../json/ing.json"
import { Input } from '@mui/material';
import { useDtCon } from '../context/dataContext';


function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Төрөл</DialogTitle>
      <List sx={{ pt: 0,padding:'20px' }}>
        {data.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email.name)} key={email.name}>
            <ListItemText primary={email.name} sx={{marginTop:'20px'}}/>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export  const IngDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState([]);
  const {dt, usedt} =useDtCon()
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    typeof(value) != "object" ? setSelectedValue(prev => [...prev,value]) :   setOpen(false);
    setOpen(false);
  };
 
  const deleteTodo = (index) => {
    setSelectedValue((todos) => todos.filter((_, i) => i !== index));
  };
  const onchange = (e) =>{
    e.preventDefault();
    usedt({...dt,[e.target.name]: parseInt(e.target.value)})
}



  return (
    <div >
        <Box sx={{display:'flex',width:'100%',justifyContent:'space-between',alignItems:'center',padding:'40px'}}>
        <Typography>Орц найрлага</Typography>
      <Button variant="outlined" onClick={handleClickOpen}>
        Төрөл 
      </Button>
        </Box>
        <Box sx={{width:'80%',margin:'auto'}}>
        <Typography variant="subtitle1" component="div">
         {selectedValue.map((e,i)=> <Box>
            <Typography>{e}</Typography>
            <Box key={i}>
            <Input name={e} onChange={onchange}></Input>
            <Button onClick={() => deleteTodo(i)} sx={{color:'red'}}>Delete</Button>
            </Box>
         </Box>)}
        </Typography>
        </Box>
      <SimpleDialog
        selectedValue={selectedValue}
        open={open}
        onClose={handleClose}
      />
    </div>
  );
}
