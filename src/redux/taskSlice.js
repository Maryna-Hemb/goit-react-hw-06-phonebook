import { combineReducers, createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterSlice } from './filterSlice';

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

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['contacts'],
};

const rootReducers = combineReducers({
  contacts: addContactsSlice.reducer,
  filter: filterSlice.reducer,
});

export const contactReducer = persistReducer(persistConfig, rootReducers);

export const { addContacts, deleteContacts } = addContactsSlice.actions;
