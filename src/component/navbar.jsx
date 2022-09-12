import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Logo from '../img/logo.png'
import { Card, CardMedia } from '@mui/material';
import frame1 from '../img/Frame.png'
import {Link, } from "react-router-dom";
import { useLocation } from "react-router-dom";


const drawerWidth = 240;


const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));





export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);


    const menu =['Захиалга', 'График', 'Тохиргоо', 'Меню']
    const direction = ['soon','test','test1','test2']

  
  let location = useLocation()
  let index = direction.indexOf(location.pathname.slice('/'))
  console.log(index)
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{backgroundColor:"#fff"}}>
        <Toolbar >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' ,color:'#000'}) ,color:'#000'}}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{color:'#000'}}>
            Persistent drawer
            {}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
      
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'#000723',
            color:'#ffffff'
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{marginTop:'36px',display:'flex',flexDirection:'row'}}>
        <Card sx={{ maxWidth: '300px',backgroundColor:'#000723',alignItems:'center',justifyContent:'center' }}>
          <CardMedia
        component="img"
        image={Logo}
      />
          </Card>
          <IconButton onClick={handleDrawerClose} sx={{color:'#ffffff'}}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{color:'#ffffff'}}/> : <ChevronRightIcon />}
          </IconButton>
     
          
        </DrawerHeader>
     
        <List sx={{marginTop:'50px'}}>
          {menu.map((text, index) => (
           
            <ListItem key={text}  disablePadding >
                 
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon sx={{color:'#ffffff', marginLeft:'5px'}} /> : <MailIcon sx={{color:'#ffffff', marginLeft:'5px'}}/>}
                </ListItemIcon>
                <Link to={direction[index]} >
                <ListItemText primary={text} sx={{color:'#fff',textDecorationStyle:'none',}}/>
              </Link>
              </ListItemButton>
            </ListItem>
        
          ))}
        </List>
      
        <List sx={{position:'absolute',bottom:'200px'}} >
          {['Logout'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon sx={{color:'#ffffff', marginLeft:'5px'}} /> : <MailIcon sx={{color:'#ffffff', marginLeft:'5px'}}/>}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
     
     
      </Drawer>
      
    </Box>
  );
}
