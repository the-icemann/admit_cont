import {useState} from 'react'

const Buttons = () => {
    
const[isActive,setIsActive]=useState(0);
const handleClick=(buttonId)=>{
    setIsActive(buttonId);
}

  return (
    <div className='flex gap-2 mt-20 ml-3'>
        <button className={`text-xl ${isActive===0&&'bg-blue-950 text-yellow-400 rounded-xl duration-100 translate-x-0'} font-semibold `} onClick={()=>setIsActive(0)}>
          <p className='m-2'>My Application </p> 
        </button>
        <button className={`text-xl ${isActive===1&&'bg-blue-950 text-yellow-400 rounded-xl duration-100 translate-x-0'}  font-semibold`} onClick={()=>setIsActive(1)}>
           <p className='m-2'>My Admissions</p> 
        </button>         

    </div>
  )
}

export default Buttons