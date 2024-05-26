import {createSlice} from '@reduxjs/toolkit'
import { Data } from './Data'
import { useReducer } from 'react'

const userSlice =createSlice({
    name:'users',
    initialState:Data,
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload)
        },
        updateUser:(state,action)=>{
            const {id,name,email,password}=action.payload;
            const updatedUser=state.find(user =>user.id == id)
            if (updatedUser) {
                updatedUser.name= name
                updatedUser.email =email
                updateUser.password=password
            }
        },
        deleteUser:(state,action)=>{
            const {id}=action.payload;
            const deleteduser =state.find(users =>users.id==id)
            if(deleteduser){
                return state.filter(f =>f.id !==id)
            }
        }
    }
})
export const {addUser,updateUser,deleteUser}=userSlice.actions;
export default userSlice.reducer;