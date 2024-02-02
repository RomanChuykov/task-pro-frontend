import { createSlice } from '@reduxjs/toolkit';

import { register } from './operations';

const initialState = {
  user: { name: null, email: null, avatar: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
  errorMessage: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoading = false;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, (state, action) => {
        const errorMessage = action.payload;
        if (errorMessage === 'Email in use') {
          state.errorMessage = errorMessage;
        } else {
          state.isError = true;
        }
        state.isLoading = false;
      });
  },
});

export const authReducer = authSlice.reducer;

// export const {} = authSlice.actions;
