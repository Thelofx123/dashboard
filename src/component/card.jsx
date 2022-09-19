import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Box } from "@mui/system";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Accord from './accordation';
import { useGetDocsFromFireBase } from '../firebase';
import { Divider, Typography } from '@mui/material';
import AccordWrap from './agree';
import { SafetyDivider, SafetyDividerSharp } from '@mui/icons-material';


const StickyHeadTable = () => {
  const data = useGetDocsFromFireBase("order")
  console.log(data[0])
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const options = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
  ];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '95%', margin: 'auto', marginTop: '68px', display: 'flex', alignitems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
   
      <div style={{ width: '100%', alignContent: 'center', textAlign: 'center', margin: 'auto', }}>
        <List
          component="nav"
          aria-label="Device settings"
          sx={{ bgcolor: 'background.paper' ,color:'white'}}
        >
          <ListItem
            button
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
            sx={{background:'#9f9f9f',color:'white',textAlign:'center'}}
          >
            <ListItemText
              secondary={options[selectedIndex]}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          sx={{color:'white'}}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              sx={{width:'200px',height:'6vh'}}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <Box sx={{ display: 'flex', width: '95%', textAlign: 'center', justifyContent: 'space-around', alignItems: 'center', margin: 'auto' }}>

        <Box >
          <Typography sx={{ width: "100%", border: '1px solid grey', textTransform: 'uppercase' }}>Захиалга</Typography>
          {data.map((e,l) => <AccordWrap data={e} date={options[selectedIndex]} key={l} type={"Захиалга"}></AccordWrap>)}
        </Box>
        <Divider orientation='vertical' />
        <Box>
          <Typography sx={{ width: "100%", border: '1px solid grey' }}>Савалсан</Typography>
          
          {data.map((e,l) => <AccordWrap data={e} date={options[selectedIndex]} key={l} type={"Савалсан"}></AccordWrap>)}
        </Box>
        <Divider orientation='vertical' />
        <Box>
          <Typography sx={{ width: "100%", border: '1px solid grey' }}>Хүргэсэн</Typography>
          {data.map((e,l) => <AccordWrap data={e} date={options[selectedIndex]} key={l} type={"Хүргэсэн"}></AccordWrap>)}
          
        </Box>
        <Divider orientation='vertical' />
        <Box>
          <Typography sx={{ width: "100%", border: '1px solid grey' }}>Алдаатай</Typography>
          {data.map((e,l) => <AccordWrap data={e} date={options[selectedIndex]} key={l} type={"Алдаатай"}></AccordWrap>)}
        </Box>

      </Box>

    </Paper>
  );
}
export default StickyHeadTable