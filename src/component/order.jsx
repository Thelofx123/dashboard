
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import { Divider, FormLabel, TextField, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Label } from '@mui/icons-material';
import SimpleDialogDemo from './dialog';


const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(
      // @ts-expect-error autofill of arbitrary value is not handled.
      event.target.value,
    );
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment >
      <Button variant="outlined" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog
      sx={{width:'100%'}}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
         <Box  sx={{width:'100%',borderBottom:'1px solid black',display:'flex',alignItems:'center',justifyContent:'space-around'}}>
         <DialogActions>
          <Button variant="contained" sx={{backgroundColor:'green'}}>Хадгалах</Button>
        </DialogActions>
            <Typography sx={{textTransform:'uppercase',fontWeight:'bolder'}}>Хоол нэмэх</Typography>
         <DialogActions>
          <Button onClick={handleClose}>X</Button>
        </DialogActions>
         </Box>

        <Box sx={{padding:'50px'}}>
        <Stack direction="row" spacing={2}>
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
                sx={{width:'50%'}}
            >
                <Avatar sx={{ width: 200, height: 200 }} alt="Remy Sharp" src="https://sportshub.cbsistatic.com/i/2021/03/18/fbe99a54-7f1a-4ca2-ba2b-9a2e04bc1461/naruto-1249229.jpg" />
            </StyledBadge>
            <Box 
             component="form"
             sx={{
               '& .MuiTextField-root': { m: 1, width: '25ch' },
             }}
             noValidate
             autoComplete="off"
            >
           
            <TextField id="outlined-basic" label="Хоолны нэр" variant="outlined" />
            <TextField id="outlined-basic" label="Дэлэгрэнгүй" variant="outlined" />
            <Box
            component="form"
            sx={{
                
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off">
            <TextField id="outlined-basic" label="Хоолны үнэ ₮" variant="outlined" />
           <SimpleDialogDemo></SimpleDialogDemo>
            </Box>
           
            </Box>
           

    </Stack>

        </Box>

     <Divider></Divider>
       <Box sx={{width:'100%'}}></Box>
      </Dialog>
    </React.Fragment>
  );
}
