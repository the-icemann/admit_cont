import React from 'react'

const AbountContent = () => {
const inputDesign='border w-full h-12 rounded-md  focus:border-blue-400 outline-none placeholder:italic bg-gray-100';
const paradesign='mt-3 mb-3 font-semibold'
  return (
    <>
     <p className={paradesign}><label htmlFor="Name">Name</label></p>
      <div className='flex flex-col gap-2 w-full ml-2 '>
      <input type="text" id='name' placeholder='first name'className={inputDesign}/>
      <input type='text' id='name' placeholder='Last name' className={inputDesign}/>
      </div>

     <p className={paradesign}><label htmlFor="Gender">Gender</label></p> 
      <div className='ml-2 w-full'>
      <input type="text" id='Gender' placeholder='Gender'className={inputDesign} />
      </div>

      <p className={paradesign}>
        <label htmlFor="Date">Date of Birth</label>
      </p>
      <div className='flex gap-3 ml-3'>
        <input type="text" id='Date' className={inputDesign} /><input type="month" id='Date' className={inputDesign} /><input type="text" id='Date' className={inputDesign }/>
      </div>

      <p className={paradesign}><label htmlFor="Address">Physical Address</label></p> 
      <div className='ml-2 w-full'>
      <input type="text" id='Address' placeholder='Physical Address'className={inputDesign} />
      </div>

      <p className={paradesign}><label htmlFor="Gender">Phone Number</label></p> 
      <div className='ml-2 w-full'>
      <input type="text" id='Phone Number' placeholder='Phone Number'className={inputDesign} />
      </div>
      </>
    
  )
}

export default AbountContent