import * as React from 'react';
import PropTypes from 'prop-types';
import {Typography,Dialog,DialogTitle,ListItemText,ListItem,List,Button} from '@mui/material';
import { Box } from '@mui/system';
import { useStrCon } from '../context/strCon';
const emails = ['Шөлтэй', 'Шөлгүй'];

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const { str, setStr } = useStrCon()
  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    setStr({ ...str, "type": value });
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Төрөл</DialogTitle>
      <List sx={{ pt: 0, padding: '20px' }}>
        {emails.map((email) => (
          <ListItem button onClick={() => handleListItemClick(email)} key={email}>
            <ListItemText primary={email} sx={{ marginTop: '20px' }} />
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

export default function SimpleDialogDemo() {
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div >
      <Box sx={{ display: 'flex', width: '230px', justifyContent: 'space-between', marginTop: '20px', alignItems: 'center' }}>

        <Button variant="outlined" onClick={handleClickOpen}>
          Төрөл
        </Button>

        <Typography variant="subtitle1" component="div">
          {selectedValue}
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
