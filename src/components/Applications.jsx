import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
 
const Applications = () => {
  return (
    <div className='  h-24 mt-3 border-solid border bg-gray-200 rounded-xl h-36 '>
        <h1 className='text-3xl ml-2 text-blue-900 mb-7 '>King's College Buddo</h1>
        <div className='flex justify-between ml-6 '>
        <div className='flex flex-col gap-4 '>
            <div className='flex '>
            <p className=''>Class: </p><span className='text-blue-500'>Senior Five</span>
            </div>
            <div className='flex '>
            <p className=''>Date of Submission: </p><span className='text-blue-500'>21/02/2026</span>
            </div>
           
        </div>
        <div className='mr-6 flex flex-col gap-3 mr-4'>
           <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
                <p className=''>Status: </p>
                <div className=' flex items-center bg-green-700 gap-3 rounded-md max-w-28'>
                    <IoCheckmarkCircleOutline size={30} className='text-white ml-3'/>
                    <p className='text-xs text-white mr-2'>Admission  Accepted</p>
                </div>
                
            </div>
            <div className='flex mr-4'>
                <p className=''>Form ID:</p><span className='text-slate-400'>43455532455</span>
            </div>
           </div>
        </div>
        </div>
        
    </div>
  )
}

export default Applications