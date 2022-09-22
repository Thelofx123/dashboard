
import * as React from 'react';
import { Divider, IconButton, TextField, Typography, DialogActions, Dialog, Button, Box, Stack, Avatar, Badge, styled } from '@mui/material';
import { PhotoCamera } from '@mui/icons-material';
import SimpleDialogDemo from './dialog';
import { IngDialog } from "./dialog2"
import { useDtCon } from '../context/dataContext';
import { useStrCon } from '../context/strCon';
import { recipeList, uploadFile } from '../firebase';
import { useState } from 'react';

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


  const MaxWidthDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('sm');
  const [all, setAll] = React.useState([])
  const { dt, usedt } = useDtCon()
  const { str, setStr } = useStrCon()

  const [imageUpload, setImageUpload] = React.useState(null);


  const handleClickOpen = () => {
    setOpen(true);
    setAll([])

  };

  const handleClose = () => {
    setOpen(false);
    setAll([])
  };

  const onchange = (e) => {
    e.preventDefault();
    setStr({ ...str, [e.target.name]: e.target.value })
  }

  const save = () => {
    setAll({ ...str, dt })
    recipeList(all)
    uploadFile(imageUpload, str.name)
    usedt([])
  }

  const [file, setFile] = useState()


  return (
    <React.Fragment  >
      <Button variant="outlined" onClick={handleClickOpen} >
        Хоол нэмэх
      </Button>
      <Dialog
        sx={{ width: '100%' }}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
          <DialogActions>
            <Button onClick={handleClose}>❌</Button>
          </DialogActions>

          <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bolder' }}>Хоол нэмэх</Typography>
          <DialogActions>
            <Button variant="contained" sx={{ backgroundColor: '#9f9f9f' }} onClick={save}>Хадгалах</Button>
          </DialogActions>
        </Box>
        <Divider></Divider>
        <Box sx={{ padding: '50px' }}>
          <Stack direction="row" spacing={2}>
            <StyledBadge
              sx={{ width: '50%', display: 'block' }}
            >

              <Avatar type="file" sx={{ width:'80%',height:'auto' }} alt="Remy Sharp" src={file} />
              <IconButton color="primary" aria-label="upload picture" component="label" onChange={(event) => {
                setImageUpload(event.target.files[0]);
                setFile(URL.createObjectURL(event.target.files[0]))
              }}>
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>

            </StyledBadge>
            <Box
              component="form"
              sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField id="outlined-basic" name="name" onChange={onchange} label="Хоолны нэр" variant="outlined" />
              <TextField id="outlined-basic" name="desc" onChange={onchange} label="Дэлгэрэнгүй" variant="outlined" />
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off">
                <TextField id="outlined-basic" label="Хоолны үнэ ₮" name="price" onChange={onchange} variant="outlined" />
                <SimpleDialogDemo onChange={onchange} name="type"></SimpleDialogDemo>
              </Box>
            </Box>
          </Stack>

        </Box>

        <Divider></Divider>
        <Box sx={{ width: '80%', margin: 'auto' }}>
          <IngDialog ></IngDialog>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
export default MaxWidthDialog