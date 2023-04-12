import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/contacts');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/contacts', credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const res = await axios.delete(`/contacts/${contactId}`);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
// import { createAsyncThunk } from '@reduxjs/toolkit';

// import * as contactsApi from 'services/contactsApi';

// export const fetchContacts = createAsyncThunk(
//   'contacts/getContacts',
//   async (_, thunkAPI) => {
//     try {
//       const contactsItems = await contactsApi.getContacts();
//       return contactsItems;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.code);
//     }
//   }
// );

// export const saveContact = createAsyncThunk(
//   'contacts/addContact',
//   async ({ name, number }, thunkAPI) => {
//     try {
//       const contactToAdd = await contactsApi.addContact({ name, number });
//       return contactToAdd;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.code);
//     }
//   }
// );

// export const deleteContact = createAsyncThunk(
//   'contacts/deleteContact',
//   async (id, thunkAPI) => {
//     try {
//       const contactToDelete = await contactsApi.deleteContact(id);
//       return contactToDelete;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.code);
//     }
//   }
// );
