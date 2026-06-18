import { configureStore } from "@reduxjs/toolkit";

import toAppReducer from "./features/todoApp";

export const store= configureStore({
    reducer:{
        todoApp:toAppReducer,
        fetchUser: require("./features/fetchUserReducer").default,
       updateUser: require("./features/updateUserReducer").default
    }
})