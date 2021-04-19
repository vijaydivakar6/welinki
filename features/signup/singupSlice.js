import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
// import Api from '../API/api';

const singupSlice = createSlice({
  name: 'singup',
  initialState : {errors: []},
  reducers: {
    registerUser :  async (state, action) => {
      // state.errors = {name : 'Hello'};
      console.log(state.errors);
      try {
        // fetch data from a url endpoint
        const response = await axios.post(`http://192.168.0.108/api/v1/register`,{ ...action.payload});
        const data = await response.json();
        console.log('====================================');
        console.log(data);
        console.log('====================================');
  
      } catch (error) {
        if (error.response.status === 422) {
          state.errors.push(error.response.data.errors);
        }
        // console.log(error.response.status);
        // console.log(error.response.data.errors); // catches both errors
      }

      // console.log(action.payload);
    

    //  axios.post(`http://192.168.0.108/api/v1/register`,{
    //      ...action.payload
    //  })
    //  .then(success => console.log(success))
    //  .catch(error => {
    //   // if (error.response.status === 422) {
  
        
    //     // console.log(state);
        
    //   // }
    //  });


    },
  }
})

export const { registerUser } = singupSlice.actions

export default singupSlice.reducer