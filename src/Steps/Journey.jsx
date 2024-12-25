import React from 'react'
import SteperTitle from '../components/SteperTitle'

const Journey = () => {
  const inputDesign='border w-full h-12 rounded-md  focus:border-blue-400 outline-none placeholder:italic bg-gray-100 ';
const paradesign='mt-3 mb-3 font-semibold'

  return (
  <div className='w-full'>
    <div>
      <SteperTitle h2={'Take us through your School journey'} p={'Make sure your current school results are accurate and up-to-date.'}/>
    </div>

    <p className={paradesign}><label htmlFor="">Name of previous School</label></p>
    <div>
      <input type="text" placeholder='previous school' className={inputDesign} />
    </div>
    <p className={paradesign}><label htmlFor="">Previous school date</label></p>
    <div className='flex gap-4 '>
      <input type="text" placeholder='month' className={inputDesign} />
      <input type="text" placeholder='year' className={inputDesign} />
    </div>
    <p className={paradesign}><label htmlFor="">Previous Class</label></p>
    <div>
      <input type="text" placeholder='class' className={inputDesign}/>
    </div>
    <p className={paradesign}><label htmlFor="">Results</label></p>
    <div>
      <input type="text" placeholder='0.00' className={inputDesign}/>
    </div>

  </div>
   
  )
}

export default Journey