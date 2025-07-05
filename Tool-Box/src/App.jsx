import React from 'react'
import { useState,useEffect} from 'react'
import { TodoContext,TodoProvider,useTodo } from './Context/TodoContext'
import Card from './Componets/Card'
import Create_todo from './Componets/Create_todo'

function App() {

  const [todos,setTodos]=useState([])
  
  const addTodo=(todo_msg)=>{
    setTodos((todos)=>[{id:Math.random(),todo_msg:todo_msg,complete:false},...todos])
    
    
  }
  const updateTodo=(id,todo_msg)=>{
    setTodos((todos)=>todos.map((todo)=>(todo.id===id ? {todo_msg:todo_msg,...todo}:todo)))
  }
  const deleteTodo=(id)=>{ 
    setTodos((todos)=>todos.filter((todo)=>todo.id !== id))
  }
  const toogleTodo=(id)=>{
    setTodos((todos)=>todos.map((todo)=>todo.id===id ? {...todo,complete:!todo.complete}:todo ))
  }
  const delete_all=()=>{
    setTodos([])
  }
  const all_done=()=>{
    setTodos((todos)=>todos.map((todo)=>({...todo,complete:true})))
  }
  
  useEffect(() => {
    const newtodos=JSON.parse(localStorage.getItem('todos'))
    if(newtodos && newtodos.length>0){
      setTodos(newtodos)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos))
  }, [todos])
  
  

  return (
    <TodoProvider value={{todos,addTodo,updateTodo,deleteTodo,toogleTodo}}>
      <div className={`w-screen h-screen bg-gray-800 flex flex-col gap-3 justify-center items-center bg-[url('./assets/todo_bg.jpg')] bg-cover bg-center`}>
        <Create_todo/>
        <div className='w-[900px] h-auto flex flex-col gap-2 items-center rounded-lg p-2'>
          {todos.map((todo)=>{
           return <Card key={todo.id} {...todo} />  
           
})}
        </div>
        <button className='px-5 bg-blue-600 text-white rounded-xl text-md hover:cursor-pointer hover:bg-black' onClick={all_done}>All Done</button>
        <button className='px-5 bg-red-600 text-white rounded-xl text-md hover:cursor-pointer hover:bg-black' onClick={delete_all}>Clear All</button>
      </div>
    </TodoProvider>
  )
}

export default App      