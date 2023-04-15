import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Toaster, toast } from 'react-hot-toast';
import Button from '@mui/material/Button';
import { AiOutlinePlus } from 'react-icons/ai';

import { fetchContacts } from 'redux/contacts/operations';
import { useContacts, useLoading, useError } from 'hooks';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Spinner } from 'components/Spinner/Spinner';

import FormDialog from 'components/ModalFormDialog/MoadalFormDialog';

import {
  Container,
  ContactsTitleWrap,
  ContactsTitle,
} from 'components/App.styled';

export default function Contacts() {
  const [open, setOpen] = useState(false);

  const contactsItems = useContacts();
  const isLoading = useLoading();
  const error = useError();

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error === 'ERR_BAD_REQUEST') {
      toast.error('Something went wrong, try again later');
      return;
    }
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <Container style={{ display: 'block' }}>
      {isLoading && <Spinner />}

      <div>
        <ContactsTitleWrap>
          <ContactsTitle>Contacts</ContactsTitle>
          <Button
            style={{ height: '30px' }}
            variant="outlined"
            onClick={handleClickOpen}
          >
            <AiOutlinePlus
              size={14}
              color={'#0d6efd'}
              style={{ marginRight: '10px' }}
            />
            Add Contact
          </Button>
          <FormDialog isOpen={open} onClose={handleClose}>
            <ContactForm handleClose={handleClose} />
          </FormDialog>
        </ContactsTitleWrap>

        <Filter />
        {contactsItems.length ? <ContactList /> : <p>No any contacts</p>}
      </div>
      <Toaster />
    </Container>
  );
}
