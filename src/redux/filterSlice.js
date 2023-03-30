import { createSlice } from '@reduxjs/toolkit';
import { initialState } from './initialState';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    addFilter: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { addFilter } = filterSlice.actions;
