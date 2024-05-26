import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "../Features/counterSlice";

const store =configureStore({
    reducer:counterSliceReducer
})

export default store