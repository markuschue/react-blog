import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

/**
 * A custom MUI dialog component, which can be used to display a message to the user.
 *
 * @param {
 *  open: boolean,        // True if the dialog is open, false if it's closed.
 *  onClose: function,    // The function to call when the dialog is closed. 
 *  title: string,        // The title of the dialog.
 *  content: string,      // The content of the dialog.
 *  closeButton: string,  // The text to display on the close button.
 *  okayButton: string,   // The text to display on the okay button.
 *  handleOkay: function, // The function to call when the okay button is clicked.
 *  handleCancel: function // The function to call when the close button is clicked.
 * } props 
 * @returns {JSX.Element} The dialog component. 
 */
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