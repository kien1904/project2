import {createSlice} from '@reduxjs/toolkit'
import { data } from '../../../data'
const ProSlice=createSlice({
    name:'pro',
    initialState:{
        products:data,
        product:{},
        searchData:[]
    },
    reducers:{
        getDataById:(state,action)=>{
            
            state.product=state.products.find(pro=>pro.id===action.payload)
        },
        searchDataByName:(state,action)=>{
            state.searchData=state.products.filter(pro=>pro.name.search(action.payload)!==-1)

        }
    }
})
export const ProReducer=ProSlice.reducer
export const productSelector=state=>state.pro.products
export const productID=state=>state.pro.product
export const searchData=state=>state.pro.searchData
export const {getDataById,searchDataByName}=ProSlice.actions