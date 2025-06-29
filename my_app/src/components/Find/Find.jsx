import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Find(){

    const [name,setName]=useState('')
    const navigate=useNavigate()
    const makegit=()=>{
        if(!name) return
        navigate(`/findresult/${name}`)
    
    }
    return(
        <>
            <section className="bg-white py-16">
                  <div className="max-w-7xl mx-auto px-20   flex justify:center items-center">
                  
                    <div className="w-full lg:w-1/2 lg:pl-12 mb-10 lg:mb-0 text-center lg:text-left">
                      <h2 className="text-3xl lg:text-4xl font-bold text-grey-900 mb-4">
                        Find Person By Github
                      </h2>
                    <input
                        type="text"
                        placeholder="Your name"
                        value={name}
                        onChange={(e)=>setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
            
                      <button 
                      onClick={(makegit)}
                      className="mt-4 px-6 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition">
                        Find
                      </button>
                    </div>
                  </div>
                </section>
        </>
    )
}
export default Find