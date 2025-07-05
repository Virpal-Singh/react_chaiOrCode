import { configureStore } from "@reduxjs/toolkit";
import noteReducers from '../features/notes/NoteSlice.js'


export const store=configureStore({
    reducer: noteReducers
})
