import React from 'react'

const PlanContent = () => {
    const inputDesign='border h-12 rounded-md  focus:border-blue-400 outline-none placeholder:italic bg-gray-100';
const paradesign='mt-3 mb-3 font-semibold'
  return (
    <div>
        <p className={paradesign}><label htmlFor="ExpectedTerm">Expected College Term</label></p>
        <div className='w-full'>
          <input type="month" className={inputDesign}/>
          {/* <input type="text" className={inputDesign}/> */}
        </div>
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

export default PlanContent