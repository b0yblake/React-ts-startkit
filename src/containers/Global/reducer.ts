
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'globalStore',
  initialState: {
    errorMessages: [],
    successMessages: [],
    warningMessages: [],
  },
  reducers: {
    setErrorMessages: (state, action) => {
      state.errorMessages = action.payload;
    },
    setSuccessMessages: (state, action) => {
      state.successMessages = action.payload;
    },
  },
});

export const {
  setErrorMessages,
  setSuccessMessages,
} = slice.actions;

export const selectGlobalStore = (state: any) => state.globalStore;

export default slice.reducer;
