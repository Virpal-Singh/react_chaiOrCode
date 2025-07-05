import { useContext,createContext } from "react";

export const TodoContext=createContext({
    todos:[{
        id:1,
        todo_msg:'Do Javascript',
        complete:false
    }],
    addTodo:(todo_msg)=>{},
    updateTodo:(id,todo_msg)=>{},
    deleteTodo:(id)=>{},
    toogleTodo:(id)=>{}
})

export const TodoProvider=TodoContext.Provider

export const useTodo=()=>{
    return useContext(TodoContext)
}