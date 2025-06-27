import { useState } from 'react'
import './App.css'
import Add_card from './Card'

function App() {


  let [name,setName]=useState('')
  let [detail,setDetail]=useState('')
  let [cards,setCard]=useState([])    
  const submit=(e)=>{
      e.preventDefault();
      
      let newcards=[...cards,{name:name,detail:detail}]
      setCard(newcards)
      setName('')
      setDetail('')
  }
  

  return (
    <>
      <div className="box">
        <form>
        <label htmlFor="name">Name</label>
        <input id='name' type="text" onChange={(e)=>setName(e.target.value)} />
        <label htmlFor="">Details</label>
        <input id='detail' type="text" onChange={(e)=>setDetail(e.target.value)}/>
        <button onClick={submit}>Add_card</button>
      </form>
      </div>
       <br />
       <h1>Cards</h1>
      <div className="container">
       {cards.map((item,index)=>(
        <Add_card key={index} name={item.name} detail={item.detail}/>
       ))}
      </div>
     
    </>
  )
}

export default App
