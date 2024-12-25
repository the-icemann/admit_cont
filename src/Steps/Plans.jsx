import React from 'react'
import SteperTitle from '../components/SteperTitle'

const Plans = () => {
  const inputDesign='border h-12 rounded-md  focus:border-blue-400 outline-none placeholder:italic bg-gray-100';
const paradesign='mt-3 mb-3 font-semibold'
  return (
    <div className='w-full'>
      <SteperTitle h2={'What are your plans for the next step?'}
       p={'Please make sure that your application results are accurate and up-to-date.'}/>

       <p className={paradesign}><label htmlFor="nextClass">Next Class Of Enrollment</label></p>
       <div>
        <input type="text" id='nextClass' className={`${inputDesign} w-full`} />
       </div>

       <p className={paradesign}><label htmlFor="nextClass">Field of Study</label></p>
       <div>
        <input type="text" id='nextClass' className={`${inputDesign} w-1/2`} />
       </div>

       <p className={paradesign}><label htmlFor="nextClass">Desired Combination</label></p>
       <div>
        <input type="text" id='nextClass' className={`${inputDesign} w-full`} />
       </div>

    </div>
  )
}

export default Plans