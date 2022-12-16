import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function AlertDialog({open, onClose, title, content, closeButton, okayButton, handleOkay, handleCancel}) {
  return (
    <div>
      <Dialog open={open} onClose={onClose}>
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOkay} color="custom">
            {okayButton}
          </Button>
          <Button onClick={handleCancel} color="custom" autoFocus>
            {closeButton}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default AlertDialog;