import { createSlice,nanoid } from "@reduxjs/toolkit";
import { LgetNote,LsaveNote } from "../../localStorage/localStorageHelpers";
const initialState={
    notes:LgetNote(),
    selectNote:null
}

export const noteSlice=createSlice({
    name:'note',
    initialState,
    reducers:{
        addNote:(state,action)=>{
            const note={
                id:nanoid(),
                title:action.payload.title,
                content:action.payload.content
            }
            state.notes.push(note)
            LsaveNote(state.notes)

        },
        removeNote:(state,action)=>{ 
            state.notes=state.notes.filter((note)=>(note.id !== action.payload))
            LsaveNote(state.notes)
        },
        updateNote:(state,action)=>{
            state.notes=state.notes.map((note)=>(note.id==action.payload.id ? {...note,title:action.payload.title,content:action.payload.content}:note))
            LsaveNote(state.notes)
        },
        deleteAll:(state)=>{
            state.notes=[]
            LsaveNote(state.notes)
        },
        setSelectNote:(state,action)=>{
            state.selectNote=action.payload
        },
        clearSelectNote:(state)=>{
            state.selectNote=null
        }
    }
})

export const {addNote,removeNote,updateNote,deleteAll,setSelectNote,clearSelectNote} = noteSlice.actions
export default noteSlice.reducer 