import React from 'react'
import SteperTitle from '../components/SteperTitle'
import { MdOutlineCancel } from "react-icons/md"; 
import { VscPass } from "react-icons/vsc";//cancel
const Final = () => {
const inputDesign='border w-full h-12 rounded-md  focus:border-blue-400 outline-none placeholder:italic bg-gray-100';
const paradesign='mt-3 mb-3 font-semibold'
  return (
   <div className='w-full'>
    <SteperTitle h2={'Search and apply to Schools'} p={'Please only select Schools  that you are seriously considering to apply to.'}/>


    <form className="max-w-md mx-auto">   
    <label for="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className={`block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg  
          dark:placeholder-gray-400 dark:text-white outline-none  focus:border-blue-400 outline-none placeholder:italic bg-gray-100` }placeholder="Search for Schools across the website..." required />
    </div>
</form>
<p className={paradesign}><label htmlFor="filter">Filter By</label></p>
<div className='flex gap-4'>
  <input type="Text" placeholder='Gender' className={`${inputDesign} `} />
  <input type="Text" placeholder='District' className={`${inputDesign}`} />
  <input type="Text"  placeholder='Location'className={`${inputDesign}`} />
</div>
<p className={` text-xl mt-4`}> <span className='text-blue-900'>Discover</span>/Search</p>
<p className={` text-xl mt-4 mb-5`}>5 Schools</p>

<div className='flex flex-col gap-2'>
<div className=''>
  <input type="checkbox" className='absolute mt-2 cursor-pointer' />
  <div className='flex justify-between relative bg-gray-100 rounded-md hover:translate-x-7 duration-700 h-10 items-center'>
    <p>Mengo Senior School </p>

    <button className='flex items-center  text-[8px] border rounded-2xl  w-20 mr-2 justify-between border-red-500 '><MdOutlineCancel size={20} className='text-red-500'/> <span className='text-red-500'>Admissions ended</span></button>  
      </div>
      

</div>
<div className=''>
  <input type="checkbox" className='absolute mt-2 cursor-pointer' />
  <div className='flex justify-between relative bg-gray-100 rounded-md hover:translate-x-7 duration-700 h-10 items-center'>
    <p>Namilyango Secondary School,Wakiso</p>

    <button className='flex items-center  text-[8px] border rounded-2xl  w-20 mr-2 justify-between border-green-500 '><VscPass size={20} className='text-green-500'/> <span className='text-green-500'>Admission Ongoing</span></button>  
      </div>
      

</div>

</div>

<button className='bg-blue-950 w-full mt-3 h-10 rounded-xl text-white'>Next</button>

   </div>
  )
}

export default Final