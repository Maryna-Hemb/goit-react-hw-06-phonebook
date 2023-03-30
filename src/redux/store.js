import { configureStore } from '@reduxjs/toolkit';
import { addContactsSlice } from './taskSlice';
import { filterSlice } from './filterSlice';

export const store = configureStore({
  reducer: {
    contacts: addContactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
