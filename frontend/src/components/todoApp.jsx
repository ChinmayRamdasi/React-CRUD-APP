import React from "react";
import { useSelector,useDispatch } from "react-redux";
 import { addTodo,removeTodo } from "../features/todoApp";


 export default function TodoApp(){
    const dispatch=useDispatch()
    const todos=useSelector((state)=>state.todoApp.todo)

    return(
        <div> 
            <h1>Todo App</h1>
            <button onClick={()=>dispatch(addTodo({id:Date.now(), text:"New Task"}))}>Add Task</button>
            {todos.map((todo,index)=>(
              <div key={index}>
                <p>{todo.text}</p>
                <button onClick={()=>dispatch(removeTodo(todo.id))}>Remove Task</button>
              </div>
            ))}
          
        </div>
    )
 }