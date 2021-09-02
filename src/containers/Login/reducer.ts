import { createSlice } from '@reduxjs/toolkit';
import { ACCESS_TOKEN_KEY } from '../../constants/localStorage';
import { REQUEST_STATUS } from '../../constants/common';

const sliceName = 'loginSlice';

export const slice = createSlice({
  name: sliceName,
  initialState: {
    loginStatus: REQUEST_STATUS.IDLE,
    loginMessage: '',
  },
  reducers: {
    makeLoading: (state, { payload }) => {
      state.loginStatus = payload;
    },
    loginRequest: (state, action) => {
      if (action) state.loginStatus = REQUEST_STATUS.REQUESTING;
    },
    loginSuccess: (state, { payload: { token } }) => {
      if (token) localStorage.setItem(ACCESS_TOKEN_KEY, token);
      state.loginStatus = REQUEST_STATUS.SUCCESS;
    },
    loginFail: (state, { payload }) => {
      state.loginStatus = REQUEST_STATUS.ERROR;
      state.loginMessage = payload;
    },
    clearAPIMessage: (state) => {
      state.loginMessage = '';
    },
  },
});

export const {
  loginRequest,
  makeLoading,
  loginSuccess,
  loginFail,
  clearAPIMessage,
} = slice.actions;

export const selectLoginSlice = (state: any) => state[sliceName];

export default slice.reducer;
