import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const addContactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState.contacts,
  reducers: {
    addContacts: (state, action) => {
      state.push(action.payload);
    },
    deleteContacts: (state, action) => {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContacts, deleteContacts } = addContactsSlice.actions;
