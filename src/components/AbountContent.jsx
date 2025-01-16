import React,{useState,useContext} from 'react'
import FormContext from '../contexts/FormContext';
const AbountContent = () => {
const inputDesign='border w-full h-12 rounded-md  focus:border-blue-400 outline-none placeholder:italic bg-gray-100';
const paradesign='mt-3 mb-3 font-semibold'

const{formData,updateFormData,errors,setErrors}=useContext(FormContext);
const handleChange=(e)=>{
  
  updateFormData({    
    [e.target.name]:e.target.value,  
  });
  setErrors({ ...errors, [e.target.name]: '' });
}






  return (
    <div>
     <p className={paradesign}><label htmlFor="Name">Name</label></p>
      <div className='flex flex-col gap-2 w-full ml-2 '>
      <input type="text" id='name' name='firstName' value={formData.firstName} onChange={handleChange}
       placeholder='first name' className={inputDesign}  required/>
       {/* {errors.firstName && <span className='text-red-500 text-sm'>{errors.firstName}</span>} */}
      <input type='text' id='name' placeholder='Last name' name='lastName' value={formData.lastName} onChange={handleChange} className={inputDesign} required />
      {/* {errors.lastName && <span className='text-red-500 text-sm'>{errors.lastName}</span>} */}
      </div>

     <p className={paradesign}><label htmlFor="Gender">Gender</label></p> 
      <div className='ml-2 w-full'>
      <input type="text" id='Gender' name='gender' value={formData.gender} onChange={handleChange} placeholder='Gender' className={inputDesign}  required />
      {/* {errors.gender && <span className='text-red-500 text-sm'>{errors.gender}</span>} */}
      </div>

      <p className={paradesign}>
        <label htmlFor="Date">Date of Birth</label>
      </p>
      <div className='flex gap-3 ml-3'>
        <input type="text" id='Date' placeholder='Day' name='day' value={formData.day} onChange={handleChange} className={inputDesign} required />
        {/* {errors.day && <span className='text-red-500 text-sm'>{errors.day}</span>} */}
        <input type="month" id='Date' name='date' className={inputDesign}   value={formData.date} onChange={handleChange} required/>
        {/* {errors.date && <span className='text-red-500 text-sm'>{errors.date}</span>} */}
      </div>

      <p className={paradesign}><label htmlFor="Address">Physical Address</label></p> 
      <div className='ml-2 w-full'>
      <input type="text" id='Address' placeholder='Physical Address' className={inputDesign} name='Address' value={formData.Address} onChange={handleChange} />
      {/* {errors.Address && <span className='text-red-500 text-sm'>{errors.Address}</span>} */}
      </div>

      <p className={paradesign}><label htmlFor="phoneNumber">Phone Number</label></p> 
      <div className='ml-2 w-full'>
      <input type="text" id='PhoneNumber' placeholder='Phone Number' className={inputDesign} name='phoneNumber'  value={formData.phoneNumber} onChange={handleChange} required/>
      {/* {errors.phoneNumber && <span className='text-red-500 text-sm'>{errors.phoneNumber}</span>} */}
      </div>
      </div>
    
  )
}

export default AbountContent