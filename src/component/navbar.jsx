import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItemIcon from '@mui/material/ListItemIcon';
import {ListItemText,ListItemButton,ListItem,Divider,Typography,List,Toolbar,CssBaseline,Drawer,Box,Avatar, Card, CardMedia ,styled, useTheme} from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Logo from '../img/logo.png'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { useFireCon } from '../context/fireCon';
import { logOutFromFirebase } from '../firebase.js'
import { useNavigate,useLocation ,Link} from 'react-router-dom';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    textDecoration: 'none',
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
      textDecoration: 'none'
    }),
  }),
}));



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
  textDecoration: 'none'
}));





export  const PersistentDrawerLeft = ({open,handleDrawerOpen,handleDrawerClose})  =>{
  const theme = useTheme();

  const { docData, setDocData } = useFireCon()
  const menu = ['Захиалга', 'График', 'Тохиргоо', 'Меню']
  const direction = ['order', 'graph', 'test1', 'soon']
  let location = useLocation()
  let index = direction.indexOf(location.pathname.slice(1))



  const navigate = useNavigate();


  const logOut = () => {
    logOutFromFirebase().then(() => { navigate('/signin') })
    setDocData((docData = false))
  }

  return (

    <Box sx={{ display: 'flex', }}>

      <CssBaseline />
      {docData === true ?
        <Box>
          <AppBar position="fixed" open={open} sx={{ backgroundColor: "#fff" }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                // sx={{ mr: 2, ...(open && { display: "none" }) }}
                sx={{ mr: 2, ...(open && { display: 'none', color: '#000' }), color: '#000' }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div" sx={{ color: '#000' }}>
                {menu[index] || 'Foody'}
              </Typography>
              <Box display='flex' sx={{ textIndent: '30px', alignItems: 'center' }}>
                <SearchIcon sx={{ color: '#000' }}></SearchIcon>
                <NotificationsActiveIcon sx={{ color: '#000', marginLeft: '30px' }}></NotificationsActiveIcon>
                <Divider orientation="vertical" flexItem sx={{ width: '30px', justifyContent: 'center', alignItems: 'center' }}></Divider>
                <Typography sx={{ color: '#000' }}>Gantulga</Typography>
                <Avatar sx={{ marginLeft: '20px' }} alt="Remy Sharp" src="https://sportshub.cbsistatic.com/i/2021/03/18/fbe99a54-7f1a-4ca2-ba2b-9a2e04bc1461/naruto-1249229.jpg" />
              </Box>
            </Toolbar>
          </AppBar>

          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              textDecoration: 'none',
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
                backgroundColor: '#000723',
                color: '#ffffff',
                textDecoration: 'none'
              },
            }}
            variant="persistent"
            anchor="left"
            open={open}
          >
            <DrawerHeader sx={{ marginTop: '36px', display: 'flex', flexDirection: 'row', textDecoration: 'none' }}>
              <Card sx={{ maxWidth: '300px', backgroundColor: '#000723', alignItems: 'center', justifyContent: 'center' }}>
                <CardMedia
                  component="img"
                  image={Logo}
                />
              </Card>
              <IconButton onClick={handleDrawerClose} sx={{ color: '#ffffff' }}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{ color: '#ffffff', textDecoration: 'none' }} /> : <ChevronRightIcon />}
              </IconButton>
            </DrawerHeader>

            <List sx={{ marginTop: '50px', textDecoration: 'none' }}>
              {menu.map((text, index) => (

                <ListItem key={text} disablePadding sx={{ textDecoration: 'none' }}>

                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon sx={{ color: '#ffffff', marginLeft: '5px', textDecoration: 'none' }} /> : <MailIcon sx={{ color: '#ffffff', marginLeft: '5px' }} />}
                    </ListItemIcon>
                    <Link to={direction[index]} style={{ textDecoration: 'none' }}>
                      <ListItemText primary={text} sx={{ color: '#fff'}} />
                    </Link>
                  </ListItemButton>
                </ListItem>

              ))}
            </List>

            <List sx={{ position: 'absolute', bottom: '200px', textDecoration: 'none' }} >
              {['Logout'].map((text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon sx={{ color: '#ffffff', marginLeft: '5px' }} /> : <MailIcon sx={{ color: '#ffffff', marginLeft: '5px' }} />}
                    </ListItemIcon>
                    <ListItemText primary={text} sx={{ textDecoration: 'none' }} onClick={logOut} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>


          </Drawer></Box>
        : null}
    </Box>

  );
}
