import { configureStore } from "@reduxjs/toolkit";

import toAppReducer from "./features/todoApp";


export const store= configureStore({
    reducer:{
        todoApp:toAppReducer
    }
})