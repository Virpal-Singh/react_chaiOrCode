import React from 'react'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { deleteAll,removeNote,setSelectNote } from '../features/notes/NoteSlice'

function Notes() {

    const notes=useSelector(state=>state.notes)
    const dispatch=useDispatch()
    const edit=(note)=>{
        dispatch(setSelectNote(note))
    }
    const delet=(id)=>{
        dispatch(removeNote(id))
    }


  return (
    <>
    <div className='mt-2 min-h-[400px] flex flex-col items-center gap-2 '>
        {notes.map((note)=>(
                <li key={note.id} className='list-none'>
                    <div className='w-[800px] min-h-[150px] bg-gray-300 gap-2 rounded-tl-[100px] flex flex-col items-center justify-center rounded-tr-xl rounded-bl-xl rounded-br-[100px]'>
                        <div className='w-[500px] h-[30px] '>
                            <p className='text-3xl text-center font-mono font-bold'>{note.title}</p>
                        </div>
                        <div className=' w-[700px] min-h-[50px] overflow-auto'>
                            <p className='text-md '>{note.content}</p>
                        </div>
                        <div className='w-[600px] flex justify-end gap-7 h-auto ]'>
                            <button className='text-xl rounded-xl hover:bg-gray-400' onClick={()=>{edit(note)}}>📝</button>
                            <button className='text-xl rounded-xl hover:bg-gray-400' onClick={()=>{delet(note.id)}}>❌</button>
                        </div>
                    </div>  
                </li>
        ))}
        <button onClick={()=>{dispatch(deleteAll())}} className='bg-red-700 text-white text-xl  rounded-xl px-3'>Delete All</button>
    </div>
    
    </>
  )
}

export default Notes