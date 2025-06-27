import { Children } from "react"
import { useState } from "react"
    
function Add_box(){
   const colors=['black','white','yellow','green','pink','red','blue','lightblue','lightgreen','grey','orange','darkgrey','olive']
    const [color,setColor]=useState('white')
    return(
        <div className="main" style={{backgroundColor:color}}>
            <div className="container">
            {colors.map((color)=>{
                return(
                    <div className="box" onClick={()=>(
                    setColor(color)
                )} style={{backgroundColor:color}}></div>
                )
            })}
            </div>
        </div>
    )
}
export default Add_box
