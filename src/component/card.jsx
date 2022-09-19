import * as React from 'react';
import Paper from '@mui/material/Paper';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TablePagination from '@mui/material/TablePagination';
// import TableRow from '@mui/material/TableRow';
// import { Divider } from '@mui/material';
// import { Box } from '@mui/system';
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import Accord from './accordation';
// import { AcUnitOutlined } from '@mui/icons-material';
// import data from "../json/order.json"
import MaxWidthDialog from './dialog3';
import { Accordion, AccordionSummary, Button, Divider, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box } from "@mui/system";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Accord from './accordation';
import { useGetDocsFromFireBase } from '../firebase';
const columns = [
  { id: 'Monday', label: 'Name', minWidth: 100 },
  { id: 'Tuesday', label: 'ISO\u00a0Code', minWidth: 100 },
  { id: 'Wednesday', label: 'ISO\u00a0Code', minWidth: 100 },
  { id: 'Thursday', label: 'ISO\u00a0Code', minWidth: 100 },
  { id: 'Friday', label: 'ISO\u00a0Code', minWidth: 100 },

];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const StickyHeadTable = () => {
  const data =useGetDocsFromFireBase("order")
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
  
  const onchange = (e) =>{
    console.log(e.target.value)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '95%', overflow: 'scroll', margin: 'auto', marginTop: '68px', display: 'flex', alignitems: 'center',justifyContent:'space-around' }}>
      <MaxWidthDialog></MaxWidthDialog>
      <div style={{width:'140px',alignContent:'center',textAlign:'center'}}>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{ bgcolor: 'background.paper' }}
      >
        <ListItem
          button
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}
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
        MenuListProps={{
          'aria-labelledby': 'lock-button',
          role: 'listbox',
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
      <Box sx={{width:'30%',border:'1px solid black',height:'80vh', borderRadius:'20px',padding:'20px'}}>
      <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      
    <Typography>ALL: {data.length}</Typography>
  
      </Box>
          {data[0].map(e=> e.date === options[selectedIndex] && e.type === "Захиалга" ? <Accord data={e}></Accord> : null)}
      </Box>
      <Box sx={{width:'30%',border:'1px solid black',height:'80vh',borderRadius:'20px',padding:'20px'}}>
      <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between'}}>
      
    <Typography>ALL: {data.length}</Typography>
      </Box>
          {data[0].map(e=> e.date === options[selectedIndex]  && e.type === "Савалсан" ? <Accord data={e}></Accord> : null)}
      </Box>
    </Paper>
  );
}
export default StickyHeadTable