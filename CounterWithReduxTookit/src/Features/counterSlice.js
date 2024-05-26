import { createSlice } from "@reduxjs/toolkit"

const initialState={
    counter:0,
    userIn:"vishal",
}

 export const counterSlice=createSlice({
    name:"Counter",
    initialState,
    reducers:{
        increment:(state,action)=>{
            state.counter +=1;
        },
        dicrement:(state,action)=>{
            state.counter -=1
        },
        incrementByAmount:(state,action)=>{
            state.counter += action.payload
        },
        userName:(state,action)=>{
            state.userIn=action.payload
            
            
            }
    }
})

export const {increment,dicrement,incrementByAmount,userName} = counterSlice.actions

export default counterSlice.reducer;