import {createSlice} from '@reduxjs/toolkit'
const CartSlice=createSlice({
    name:'cart',
    initialState:{
        products:[],
        totalPrice:0,
        totalQuantities:0
    }
    ,
    reducers:{
        addToCart:(state,action)=>{
            const {id,data}=action.payload
            const check = state.products.find(pro=>pro.id===id)
            if(check){
                return state
            }
            else{
                state.products.push(data)
                state.totalQuantities=state.totalQuantities+data.amount
                state.totalPrice=state.totalPrice+data.amount*data.price
            }
        },
        updateQuantity:(state,action)=>{
            const {id,sl,index}=action.payload
            const old_Product=state.products.find(pro=>pro.id===id)
           const quantity=old_Product.amount
            state.products[index]={
                ...old_Product,
                amount:sl
            }
            state.totalPrice=state.totalPrice+old_Product.price*(sl-quantity)
            state.totalQuantities=state.totalQuantities-quantity+sl
            
        }

    }
})
export const CartReducer=CartSlice.reducer
export const ListCart=state=>state.cart.products
export const priceSelector=state=>state.cart.totalPrice
export const totalItem=state=>state.cart.totalQuantities
export const {addToCart ,updateQuantity} =CartSlice.actions