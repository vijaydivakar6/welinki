import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
// import Api from '../API/api';


export const signupUser = createAsyncThunk('user/signup',async  (signup) => {
  console.log(signup);
   const response = await axios.get(`http://192.168.0.108:3000/categories`);
  return response.data;
})

const singupSlice = createSlice({
  name: 'singup',
  initialState : { 
    posts: {},
    status: 'idle',
    error: null
  },
  reducers: {
    registerUser :  (state, action) => {
      console.log(action.payload);
    },
  },
  extraReducers: {
    [signupUser.pending]: (state, action) => {
      state.status = 'loading'
    },
    [signupUser.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      // Add any fetched posts to the array
      state.posts = action.payload;
    },
    [signupUser.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  }
})

export const { registerUser } = singupSlice.actions



export default singupSlice.reducer