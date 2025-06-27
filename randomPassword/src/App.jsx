import { useState,useRef,useEffect } from 'react'

function App() {
  const inputref=useRef(null)
  const [password,setPassword]=useState('')
  const [range, setRange] = useState(8)
  const [useNumbers, setNumbers] = useState(false)
  const [useCharacters, setCharacters] = useState(false)
  let str='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

  const handlecopy=()=>{
    if(inputref.current){
      inputref.current.select()
      document.execCommand('copy')
      alert('Copied to Clipboard!')
    }
  }
  function getrandomPassword(){
    let answer=''
    if(useNumbers){
        str+='1234567890'
      }
      if(useCharacters){
        str+='~!@#$%^&*()_+{}[]|:;.,'
      }
    let i=0
    while(i<range){
      let azindex=Math.floor((Math.random())*str.length)
      answer+=str[azindex]
      i++
    }
    setPassword(answer)
  }
  useEffect(()=>{
    getrandomPassword()
  },[range,useCharacters,useNumbers])
  

  return (
    <>
      <div className="bg-[black] w-[900px] h-[300px] rounded-xl flex flex-col items-center justify-center">
        <div className="upper flex justify-center">
          <input className="text-blue-700 text-xl rounded-r-none p-5 bg-[white] w-[600px] h-[50px] rounded-l-xl" ref={inputref} type="text" value={password} />
          <button className='bg-[blue] w-[200px] h-[50px] rounded-r-xl rounded-l-none' onClick={handlecopy} >copy</button>

        </div>
        <div className="lower flex gap-4" >
          <label htmlFor="range" className='text-sm font-medium text-white-700 mb-1'>Length: 
            <span id="rangeValue" className="font-bold">{range}</span>
          </label>
          
           <input type="range"  id="range" min={8} max={25} value={range}className="w-full accent-blue-600 cursor-pointer" onChange={
            (e)=>{
              setRange(Number(e.target.value))
            }
           }/>
            
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600" checked={useNumbers} 
                onChange={(e)=>{
                  setNumbers(e.target.checked)
                }}/>
                <span className="ml-2">Numbers</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-600" checked={useCharacters}
                onChange={(e)=>{
                  setCharacters(e.target.checked)
                }} />
                <span className="ml-2">Characters</span>
              </label>
            
          
        </div>
      </div>
    </>
  )
}

export default App

