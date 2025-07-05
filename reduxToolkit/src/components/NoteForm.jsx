import React, { useEffect } from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {addNote, clearSelectNote, updateNote} from '../features/notes/NoteSlice'
function NoteForm() {


   

    const selectNote=useSelector(state=>state.selectNote)
    const [titleName,setTitleName]=useState('')
    const [content,setContent]=useState('')
    const dispatch=useDispatch()
    const add=(e)=>{
        e.preventDefault()
        if(selectNote){
            dispatch(updateNote({id:selectNote.id,title:titleName,content:content}))
            dispatch(clearSelectNote())
        }
        else{
            dispatch(addNote({title:titleName,content:content}))
        }
        
        setTitleName('')
        setContent('')
    }
    useEffect(()=>{
        if(selectNote){
            setTitleName(selectNote.title)
            setContent(selectNote.content)
        }
    },[selectNote])

  return (
    <form onSubmit={add} className='mt-2'>
        <div className='w-[600px] h-auto flex flex-col items-center mx-auto'>
            <input type="text" className='p-2 w-[600px] border-2 border border-black rounded-t-lg rounded-b-none' placeholder='Enter Title' value={titleName}
            onChange={(e)=>setTitleName(e.target.value)}/>

            <textarea className='p-2 rounded-b-lg border-2 border border-black w-[600px] min-h-[100px] rounded-t-none' placeholder='Enter Content' value={content}
            onChange={(e)=>setContent(e.target.value)}/>

            <button className='bg-blue-700 rounded-lg mt-2 text-white text-md px-3' type="submit">{selectNote ? 'Update':'Create'}</button>
        </div>
        
    </form>
  )
}

export default NoteForm 