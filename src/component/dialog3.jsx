import * as React from 'react';
import { Divider, Typography,Stack,Avatar,Badge,styled,DialogActions,Dialog,Button,Box} from '@mui/material';
import SimpleDialogDemo from './dialog';
import { useDtCon } from '../context/dataContext';
import { useStrCon } from '../context/strCon';
import { recipeList,uploadFile } from '../firebase';



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

const MaxWidthDialog = () => {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');
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

  //Save to context
  const onchange = (e) => {
    e.preventDefault();
    setStr({ ...str, [e.target.name]: e.target.value })
  }

  //Upload picture to stroge & context
  const save = () => {
    recipeList(all)
    uploadFile(imageUpload, str.name)
    usedt([])
  }

  React.useEffect(() => {
    setAll({ ...str, dt })
  }, [])

  return (
    <React.Fragment >
      <Button variant="outlined" onClick={handleClickOpen}>
        +
      </Button>
      <Dialog
        sx={{ width: '100%' }}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
      >
        <Box sx={{ width: '100%', borderBottom: '1px solid grey', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>
          <DialogActions>
            <Button onClick={handleClose}>X</Button>
          </DialogActions>

          <Typography sx={{ textTransform: 'uppercase', fontWeight: 'bolder' }}>Хоол нэмэх</Typography>
          <DialogActions>
            <Button variant="contained" sx={{ backgroundColor: 'green' }} onClick={save}>Хадгалах</Button>
          </DialogActions>
        </Box>

        <Box sx={{ padding: '50px' }}>
          <Stack direction="row" spacing={2}>

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

      </Dialog>
    </React.Fragment>
  );
}

export default MaxWidthDialog