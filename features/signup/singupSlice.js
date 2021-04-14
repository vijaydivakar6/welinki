import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
// import Api from '../API/api';

const singupSlice = createSlice({
  name: 'singup',
  initialState : {},
  reducers: {
    registerUser : (state, action) => {
      // console.log(action.payload);

     axios.get(`https://jsonplaceholder.typicode.com/todos/1`)
     .then(success => console.log(success))
     .catch(error => console.log(error));


    },
  }
})

export const { registerUser } = singupSlice.actions

export default singupSlice.reducer