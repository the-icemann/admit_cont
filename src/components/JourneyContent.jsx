import React from 'react'
import { useContext } from 'react';
import FormContext from '../contexts/FormContext';

const JourneyContent = () => {
const inputDesign='border w-full h-12 rounded-md  focus:border-blue-400 outline-none placeholder:italic bg-gray-100 ';
const paradesign='mt-3 mb-3 font-semibold'

const{formData,updateFormData}=useContext(FormContext);
const handleChange=(e)=>{
  updateFormData({    
    [e.target.name]:e.target.value,  
  });
}


  return (
    <div>
    <p className={paradesign}><label htmlFor="">Name of previous School</label></p>
    <div>
      <input type="text" placeholder='previous school' name='previousSchool' className={inputDesign} value={formData.previousSchool}   onChange={handleChange} required/>
    </div>
    <p className={paradesign}><label htmlFor="">Previous school date</label></p>
    <div className='flex gap-4 '>
      <input type="text" placeholder='month' name='month'  className={inputDesign} value={formData.month}   onChange={handleChange} required/>
      <input type="text" placeholder='year' name='year'  className={inputDesign} value={formData.year}   onChange={handleChange} required/>
    </div>
    <p className={paradesign}><label htmlFor="">Previous Class</label></p>
    <div>
    <select name="previousClass" id="previousClass" className={inputDesign} >
        <option value={formData.previousClass} onChange={handleChange} className=''>Primary 7</option>
        <option value={formData.previousClass} onChange={handleChange}>Senior 4 </option>
      </select>
    </div>
    <p className={paradesign}><label htmlFor="">Results</label></p>
    <div>
      <input type="text" placeholder='0.00' name='grade' className={inputDesign} value={formData.grade}   onChange={handleChange} required/>
    </div>
    </div>
  )
}

export default JourneyContent