export const LsaveNote=(note)=>{
    try{
        localStorage.setItem('note',JSON.stringify(note))
    }
    catch(e){
        console.log(e)
    }
}
export const LgetNote=()=>{
    try{
        const note=JSON.parse(localStorage.getItem('note'))
        if(note)return note
        return []
    }
    catch(e){
        console.log(e)
        return []
    }
}