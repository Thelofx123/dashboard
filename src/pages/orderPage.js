import * as React from 'react';
import { Box } from "@mui/system";
import { useGetDocsFromFireBase } from '../firebase';
import { Divider, Grid, Typography ,ListItemText,ListItem,List,MenuItem,Menu,Paper} from '@mui/material';
import AccordWrap from '../component/agree';


const StickyHeadTable = () => {
  const  {data,refresh, orderList } = useGetDocsFromFireBase("order")

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

  return (
    <Paper 
        sx={{ 
          width: '90%',
          display: 'flex',
          margin:'auto', 
          alignitems: 'center', 
          justifyContent: 'center', 
          flexDirection: 'column' 
          }}
      >

      <div style={{ width: '100%', alignContent: 'center', textAlign: 'center', margin: 'auto', }}>
        <List
          component="nav"
          aria-label="Device settings"
          sx={{ bgcolor: 'background.paper', color: 'white' }}
        >
          <ListItem
            button
            aria-haspopup="listbox"
            aria-controls="lock-menu"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClickListItem}
            sx={{ background: '#9f9f9f', color: 'white', textAlign: 'center' }}
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
          sx={{ color: 'white' }}
          MenuListProps={{
            'aria-labelledby': 'lock-button',
            role: 'listbox',
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              sx={{ minWidth: '300px', height: '6vh' }}
              selected={index === selectedIndex}
              onClick={(event) => handleMenuItemClick(event, index)}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
      <Grid
      container spacing={8}
      sx={{ display: 'flex', width: '95%', textAlign: 'center', alignItems: 'center', margin: 'auto', justifyContent:'space-between' }}>

        <Box sx={{minWidth: '300px',background:'#F5F5F7', height: '80vh',marginTop:'20px'}} >
          <Typography sx={{ minWidth: "300px", border: '1px solid grey', textTransform: 'uppercase' }}>Захиалга</Typography>
          {data.map((e, l) => e.type === "Захиалга" && e.date === options[selectedIndex] ?<AccordWrap orderList={orderList} refresh={refresh} data={e} date={options[selectedIndex]} key={l} type={"Захиалга"}></AccordWrap> : null)}
        </Box>
        <Divider orientation='vertical' />
        <Box sx={{minWidth: '300px',background:'#F5F5F7', height: '80vh',marginTop:'20px'}} >
          <Typography sx={{ minWidth: "300px", border: '1px solid grey' }}>Савалсан</Typography>
          {data.map((e, l) => e.type === "Савалсан" && e.date === options[selectedIndex] ?<AccordWrap orderList={orderList} refresh={refresh} data={e} date={options[selectedIndex]} key={l} type={"Савалсан"}></AccordWrap> : null)}
        </Box>
        <Divider orientation='vertical' />
        <Box sx={{minWidth: '300px',background:'#F5F5F7', height: '80vh',marginTop:'20px'}} >
          <Typography sx={{ minWidth: "300px", border: '1px solid grey' }}>Хүргэсэн</Typography>
          {data.map((e, l) => e.type === "Хүргэсэн" && e.date === options[selectedIndex] ?<AccordWrap orderList={orderList} refresh={refresh} data={e} date={options[selectedIndex]} key={l} type={"Хүргэсэн"}></AccordWrap> : null)}
        </Box>
        <Divider orientation='vertical' />
        <Box sx={{minWidth: '300px',background:'#F5F5F7', height: '80vh',marginTop:'20px'}} >
          <Typography sx={{ minWidth: '300px',border: '1px solid grey', }}>Алдаатай</Typography>
          {data.map((e, l) => e.type === "Алдаатай" && e.date === options[selectedIndex] ?<AccordWrap orderList={orderList} refresh={refresh} data={e} date={options[selectedIndex]} key={l} type={"Алдаатай"}></AccordWrap> : null)}
        </Box>

      </Grid>

    </Paper>
  );
}
export default StickyHeadTable