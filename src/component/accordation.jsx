import { Accordion, AccordionSummary, Button, Divider, Typography } from "@mui/material"
import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Box } from "@mui/system";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { orderList } from "../firebase";
const Accord = ({data}) => {

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [db, setDb] = React.useState('')
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
    'Захиалга',
    'Савалсан',
    'Хүргэсэн',
    'Алдаатай',
  ];
  const onclick = () =>{
    orderList(options[selectedIndex],data.code)
  }

    return (

        <Box sx={{height:'auto',marginTop:'20px',display:'flex',flexDirection:'column',alignContent:'center'}}>

                <Accordion sx={{margin:'auto'}}>
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{display:'flex',justifyContent:'space-around',textIndent:'50px'}}
                >
                <Typography>{data.code}</Typography>
                <Typography sx={{color:'#9f9f9f'}}>{data.time}</Typography>
                </AccordionSummary>
                <Divider></Divider>
                <AccordionDetails>
     
                {data.name.map((e,l) =><Typography>* {e} - {data.count[l]}</Typography>)}
         
                </AccordionDetails>
                <Divider></Divider>
                <AccordionDetails>
                <Typography>
                {data.loc}
                </Typography>
                <Typography>{data.phone}</Typography>
                </AccordionDetails>
                <div>
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
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
    <Button onClick={onclick}>Save</Button>
                </Accordion>
  
       </Box>

    )
}
export default Accord