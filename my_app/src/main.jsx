import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDom from 'react-dom/client'
import { Route } from 'react-router-dom'
import {createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import './index.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Layout from './components/Layout/Layout.jsx'
import Find from './components/Find/Find.jsx'
import FindResult from './components/Find/FindResult.jsx'
import App from './App.jsx'

const router= createBrowserRouter(
  // [
  // {
  //   path:'/',
  //   element:<Layout/>,
  //   children:[
  //     {
  //       path:'',
  //       element:<Home/>
  //     },
  //     {
  //       path:'about',
  //       element:<About/>
  //     },
  //     {
  //       path:'contact',
  //       element:<Contact/>
  //     },
  //     {
  //       path:'find',
  //       element:<Find/>,
  //       children:[{
  //         path:'k',
  //         element:<FindResult/>
  //       }]
  //     }
  //   ]
  // }]
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='find' element={<Find/>}/>
        <Route path='/findresult/:gitname' element={<FindResult/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
