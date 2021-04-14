import { configureStore } from '@reduxjs/toolkit'

import singupReducer  from '../features/signup/singupSlice'


export default configureStore({
    reducer:{
        singup : singupReducer 
    },
  })