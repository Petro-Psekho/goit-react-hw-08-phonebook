import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

export default function FormDialog({ isOpen, onClose, children }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}
