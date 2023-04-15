import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';

export default function FormDialog({ isOpen, onClose, children }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent>{children}</DialogContent>
      {/* <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>add contact</Button>
      </DialogActions> */}
    </Dialog>
  );
}
