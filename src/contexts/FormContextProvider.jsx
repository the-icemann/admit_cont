import {React,useState,useEffect} from 'react'
import FormContext from './FormContext'
const FormContextProvider = ({children}) => {
const[formData,setFormData]=useState({
  firstName:'',
  lastName:'',
  gender:'',
  day:'',
  date:'',
  Address:'',
  phoneNumber:'',
  previousSchool:'',
  month:'',
  year:'',
  previousClass:'',
  grade:'',
  expectedSchoolTerm:'',
  nextClassOfEnrollment:'',
  fieldOfStudy:'',
  desiredCombination:'',
  file:[],
  



});
useEffect(()=>{
  const handleSubmit=async()=>{
    const res=await fetch('api/submit',{
      method:POST,
      headers:{
        'content-Type':'application/json'
      },
      body:JSON.stringify(formData)
    })
    const result=await res.json();
  }
},[])

console.log(formData)

const updateFormData = (data) => {
  //setFormData((prevFormData) => ({ ...prevFormData, ...data }));
  setFormData({...formData,...data});
};


  


  return (
    <FormContext.Provider value={{formData,updateFormData}}>
        {children}
    </FormContext.Provider>
  )
}

export default FormContextProvider;