import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    // addContacts: (state, action) => {
    //   state.push(action.payload);
    // },
    // deleteContacts: (state, action) => {
    //   return state.filter(contact => contact.id !== action.payload);
    // },
  },
});

export const { addContacts, deleteContacts } = filterSlice.actions;
