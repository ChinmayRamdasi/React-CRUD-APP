import { configureStore } from "@reduxjs/toolkit";

import toAppReducer from "./reducers/todoApp";

export const store= configureStore({
    reducer:{
        todoApp:toAppReducer,
        fetchUser: require("./reducers/fetchUserReducer").default,
       updateUser: require("./reducers/updateUserReducer").default
    }
})