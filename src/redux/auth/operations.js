import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'http://localhost:3000';

// Utility to add JWT

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Utility to remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('api/taskPro/users/register', credentials);

      setAuthHeader(res.data.token);
      return res.data;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.response.data.msg);
    }
  }
);
