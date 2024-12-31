import React from 'react'
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Buttons from './Buttons';
 
const Applications = () => {
  return (
    
    <div className='  h-auto mt-3 border-solid border bg-gray-200 rounded-xl h-36 mb-2'>
        <h1 className='md:text-3xl text-xl ml-2 text-blue-900 mb-7 '>MENGO SENIOR SCHOOL</h1>
        <div className='md:flex md:justify-between ml-6 grid gap-2'>
        <div className='flex flex-col gap-4 '>
            <div className='flex '>
            <p className='mr-2'>Class:</p><span className='text-blue-500 hover:text-blue-800'>Senior Five</span>
            </div>
            <div className='flex '>
            <p className='mr-2'>Date of Submission: </p><span className='text-blue-500  hover:text-blue-800'>21/02/2026</span>
            </div>
           
        </div>
        <div className='mr-6 flex flex-col gap-3 mr-4'>
           <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-3'>
                <p className='md:text-xs mr-2'>Status: </p>
                <div className=' flex items-center bg-green-700 hover:bg-green-600 gap-3 rounded-md max-w-24'>
                    <IoCheckmarkCircleOutline size={20} className='text-white ml-3'/>
                    <p className='text-[10px] text-white mr-2'>Admission  Accepted</p>
                </div>
                
            </div>
            <div className='flex mr-4'>
                <p className='md:text-xs mr-2'>FormID:</p><span className='text-slate-400'>43455532455</span>
            </div>
           </div>
        </div>
        </div>
        
    </div>
    
  )
}

export default Applications