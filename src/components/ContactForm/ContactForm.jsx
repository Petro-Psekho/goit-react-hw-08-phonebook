import * as React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { useContacts } from 'hooks';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import 'bootstrap/dist/css/bootstrap.min.css';

import { addContact } from 'redux/contacts/operations';

import {
  ErrMessage,
  FormWrap,
  SubmitBtn,
} from 'components/ContactForm/ContactForm.styled';

export const ContactForm = ({ handleClose }) => {
  const dispatch = useDispatch();
  const contactsItems = useContacts();
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
    reset,
  } = useForm({
    defaultValuers: {
      name: '',
      number: '',
    },
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [formState.isSubmitSuccessful, reset]);

  const formSubmitData = data => {
    const currentName = contactsItems.find(
      item => item.name.toLowerCase() === data.name.toLowerCase()
    );
    if (currentName) return toast.error(`${data.name} is already in contacts`);

    dispatch(addContact(data));
    handleClose();
    toast.success(`${data.name} added to your phonebook`);
  };

  return (
    <FormWrap onSubmit={handleSubmit(formSubmitData)}>
      <TextField
        sx={{
          '& > :not(style)': { width: '35ch' },
        }}
        id="standard-basic"
        label="Enter Name"
        variant="standard"
        autoComplete="off"
        {...register('name', {
          required: 'name is a required field',
          minLength: { value: 3, message: 'min lenght is 3' },
          pattern: {
            value: /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
            message:
              'Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore dArtagnan.',
          },
        })}
      />

      <ErrMessage>{errors.name?.message}</ErrMessage>

      <TextField
        sx={{
          '& > :not(style)': { width: '35ch' },
        }}
        id="standard-basic"
        label="Enter Namber"
        variant="standard"
        autoComplete="off"
        {...register('number', {
          required: 'number is a required field',
          pattern: {
            value:
              /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
            message:
              'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +.',
          },
        })}
      />

      <ErrMessage>{errors.number?.message}</ErrMessage>

      {errors.exampleRequired && <p>This field is required</p>}

      <SubmitBtn>
        <Button type="button" variant="text" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="text">
          Add Contact
        </Button>
      </SubmitBtn>
    </FormWrap>
  );
};
