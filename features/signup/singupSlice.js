import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit'
import axios from 'axios';
// import Api from '../API/api';

const singupSlice = createSlice({
  name: 'singup',
  initialState : {
    status: 'idle',
    error: null},
    reducers: {
    registerUser :   (state, action) => {
  
    },
  }
})

export const { registerUser } = singupSlice.actions

export default singupSlice.reducer