import React, { useEffect } from 'react'
import { useState } from 'react'
import classNames from 'classnames'
import { useTodo } from '../Context/TodoContext'


function Card(todo) {
        const {updateTodo,deleteTodo,toogleTodo}=useTodo()

        const [edit_message,setEdit_message]=useState(todo.todo_msg)
        const [isEditable,setIsEditable]=useState(null)

        const update=()=>{
            if(edit_message){
                updateTodo(todo.id,edit_message)
                setIsEditable(false)
            }
            else{
                alert('Enter name first')
            }
        }
        const delet=()=>{
            deleteTodo(todo.id)
        }
        const edit=()=>{
            if(!isEditable){
                setIsEditable(true)
                return
            }
            else{
                update()
            }
            console.log('isEditable: ',isEditable)
        }
        const changeToggle=()=>{
            toogleTodo(todo.id)
        }

  return (     
        <div className={`w-[800px] h-[50px]  mx-auto rounded-2xl ${todo.complete ? 'bg-yellow-200':'bg-gray-800'} p-1 flex justify-around`}>
        <input type="checkbox" checked={todo.complete} onChange={changeToggle}/>

        <input type="text" disabled={isEditable && !todo.complete?false:true}  className={
            `w-[500px]  h-[40px] rounded-lg p-2  text-2xl
            ${isEditable?"text-gray-800 bg-white":"text-white bg-gray-800"}
            ${todo.complete?'line-through text-gray-800 bg-yellow-200':'text-white bg-gray-800'}`} value={edit_message} onChange={(e)=>setEdit_message(e.target.value)} />
        
        <button className='w-[40px]  rounded-full hover:bg-gray-600' disabled={todo.complete ? true:false} onClick={edit} >{isEditable?'📁':'✏️'}</button>
        <button className='w-[40px] rounded-full hover:bg-gray-600' onClick={delet}>❌</button>
            
        </div>

  )
}

export default Card 

