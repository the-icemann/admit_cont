import React from 'react'

const StepperControl = ({handleClick,currentStep,steps}) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
      {/* Back Button */}
      <button
      onClick={()=>{handleClick()}}
      className={`bg-white text-slate-400 uppercase 
      py-2 px-4 rounded-xl font-semibold cursor-pointer border-2 border-slate-700 hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out ${currentStep===1&&'opacity-50 cursor-not-allowed'}`}>
         back
      </button>
      {/* Next button */}
      <button 
      onClick={()=>{handleClick("next")}}
      className={`bg-blue-950 text-yellow-400 uppercase 
      py-2 px-4 rounded-xl font-semibold cursor-pointer border-2   hover:text-yellow-500 transition duration-200 ease-in-out hover:bg-blue-800
      }`}>
         {currentStep===steps.length-1?'confirm':'next'}
      </button>
      </div>
  )
}

export default StepperControl