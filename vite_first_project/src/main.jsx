import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Add_box from './color.jsx'
// import Add_round from './round.jsx'
// import Objreturn from './round.jsx'
// import Add_square from './square.jsx'
// let nuber=0
// let square=createRoot(document.querySelector('.square'))
// let round=createRoot(document.querySelector(".round"))
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Add_box/>
  </StrictMode>
)

