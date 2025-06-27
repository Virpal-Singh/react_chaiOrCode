import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
function App() {
  return (
    <>  <h1>This is Virpal here</h1>
        <div>
          <h2>The founder of PALBAZ</h2>
          <img id='photo' src={img1} alt="Close Eye" />
          <button id='button' onClick={()=>{
            const photo=document.getElementById('photo')
            const button=document.getElementById('button')
            
            if(photo.alt=='Close Eye'){
              document.body.style.backgroundImage=`url(${img1})`;
              document.body.style.backgroundSize="cover";
              document.body.style.backgroundRepeat='no-repeat';
              
              photo.src={img2}
              photo.alt='Open Eye'
              button.innerText='Close Eye'
            }
            else if(photo.alt=='Open Eye'){
               document.body.style.backgroundImage=`url(${img2})`;
              document.body.style.backgroundSize="cover";
              document.body.style.backgroundRepeat='no-repeat';
              
              photo.src={img1}
              photo.alt='Close Eye'
              button.innerText='OpenEye'
            }
            else{
              button.innerText='Something wrong'
            }
          }}>Open Eye</button>
        </div>
    </>
    
  )
}

export default App
