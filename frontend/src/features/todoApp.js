import {createSlice} from "@reduxjs/toolkit";

const todoAppSlice= createSlice({
    name:"todoApp",
    initialState:{
        todo:[]
    },
    reducers:{
        addTodo: (state,action)=>{
            state.todo.push(action.payload)
        },
        removeTodo:(state,action)=>{
            state.todo=state.todo.filter(todo=>todo.id !== action.payload)
        }
    }
})

export const{addTodo,removeTodo}=todoAppSlice.actions

export default todoAppSlice.reducer