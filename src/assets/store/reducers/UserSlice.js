import {createSlice} from '@reduxjs/toolkit'
const UserSlice=createSlice({
    name:'user',
    initialState:{
        users:[],
        userLogin:{},
        isLogin:false,
        load:true
    },
    reducers:{
        CheckDataOnServer:(state,action)=>{
            const {name,password}=action.payload
            const check=state.users.find(user=>user.userName===name&&user.userPassword===password)
            // console.log(userName)
            if(check){
                state.isLogin=true
                state.usersLogin=check
                
            }
        },
        sendDataToServer:(state,action)=>{
            
            const check=state.users.find(pro=>pro===action.payload)
            if(check){
                return state
            }
            else{
                state.users.push(action.payload)
            }
            
        },
        logout:(state,action)=>{
            state.isLogin=false
            state.load=false
        }
    }
})
export const UserReducer=UserSlice.reducer
export const userSelector=state=>state.user.users
export const LoginSelector=state=>state.user.userLogin
export const checkSelector=state=>state.user.isLogin
export const loadSelector=state=>state.user.load
export const {sendDataToServer,CheckDataOnServer,logout}=UserSlice.actions