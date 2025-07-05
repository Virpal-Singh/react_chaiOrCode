import React from 'react'
import { useState } from 'react'
import { useTodo } from '../Context/TodoContext'

function Create_todo() {
    const [todoName,setTodoName]=useState('')
    const {addTodo}=useTodo()
    const add=()=>{
        if(!todoName){
            alert('Enter Name first')
            return }
        else{
        addTodo(todoName)
        }
}
  return (
    <div className='flex flex-col items-center gap-2'>
          <h1 className='text-3xl text-black shadow-lg rounded-3xl px-3 font-sans font-bold '>Manage Your Todos</h1>
          <div className='w-auto h-auto bg-gray-600 rounded-lg flex'>
              <input type="text" value={todoName}  onChange={(e)=>setTodoName(e.target.value)} className='w-[400px] bg-gray-600 h-[50px] rounded-l-lg rounded-r-none p-1 text-white text-xl ' />
              <button className='px-2 text-xl text-white bg-blue-600 h-[50px] rounded-r-lg rounded-l-none' onClick={add} >Create</button>
          </div>
        </div>
  )
}

export default Create_todo  