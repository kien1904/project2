import {configureStore} from '@reduxjs/toolkit'
import {UserReducer} from './reducers/UserSlice'
import { ProReducer} from './reducers/ProductSlice'
import { CartReducer } from './reducers/CartSlice'
export const store =configureStore({
    reducer:{
        
       pro: ProReducer,
       user:UserReducer,
       cart:CartReducer
    }
})
