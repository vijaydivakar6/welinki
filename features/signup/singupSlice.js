import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
// import Api from '../API/api';

const singupSlice = createSlice({
  name: 'singup',
  initialState : {},
  reducers: {
    registerUser : (state, action) => {
      // console.log(action.payload);
     
      

     axios.post(`https://we-linki.com/api/test`,{
         ...action.payload
     })
     .then(success => console.log(success))
     .catch(error => console.log(error));


    },
  }
})

export const { registerUser } = singupSlice.actions

export default singupSlice.reducer