import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos:[{id:1,text:"Hello Welcome To Todo "}]
}

export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,actions)=>{
            const todo={
                id:nanoid(),
                text:actions.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,actions)=>{
            state.todos=state.todos.filter((todo)=>todo.id!== actions.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todoToUpdate = state.todos.find(todo => todo.id === id);
            if (todoToUpdate) {
                todoToUpdate.text = text;
            }
        }
        
    }
})

export const {addTodo,removeTodo,updateTodo} =todoSlice.actions

export default todoSlice.reducer