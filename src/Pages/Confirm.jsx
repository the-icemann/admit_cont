import React from 'react'
import SteperTitle from '../components/SteperTitle';
import ConfirmDescr from '../components/ConfirmDescr';
import AbountContent from '../components/AbountContent';
import Logo from '../components/Logo';
import Journey from '../Steps/Journey';
import JourneyContent from '../components/JourneyContent';
import PlanContent from '../components/PlanContent';
import StepThreeContent from '../components/StepThreeContent';
import { MdOutlineCancel } from "react-icons/md"; 
import { VscPass } from "react-icons/vsc";
import FinalContent from '../components/FinalContent';
import Button from '../components/Button';
const Confirm = () => {
  return (
    <div className=''>
  <Logo/>
  <div className='text-center my-5 '>    
    <h2 className='text-blue-900 text-xl'>Application Review</h2>
  </div>
 <SteperTitle h2={"Please review your application carefully for accuracy and completeness."} 
 p={'If you need to to make any changes, please click the "Edit" button next to the section you wish to revise.'}/>
  <div className=''>  
      <div className='md:w-1/2 mx-auto'>
      <ConfirmDescr info={'Personal Information'} edit={'Edit'}/>
      <AbountContent/>
      <ConfirmDescr info={'Previous School Information'} edit={'Edit'}/>
      <JourneyContent/>
      <PlanContent/>
      <div>
      <StepThreeContent/>
      </div>
      <ConfirmDescr info={'Choice of Schools'} edit={'Edit'}/>
      {/* <FinalContent schoolName={'Mengo Senior School'} bg={'border-red-500'} icon={<MdOutlineCancel size={20} className='text-red-500'/>}  paraColor={'text-red-500'}/> */}
      
      <div className='flex flex-col gap-2 mb-2'>
      <FinalContent schoolName={'Mengo Senior School'} bg={'border-red-500'} icon={<MdOutlineCancel size={20} className='text-red-500'/>}  paraColor={'text-red-500'} para={'Admissions ended'}/>
      <FinalContent schoolName={'Namilyango Secondary School,Wakiso'} bg={'border-green-500'} icon={<VscPass size={20} className='text-green-500'/>}  paraColor={'text-green-500'} para={'Admission accepted'}/>
      <FinalContent schoolName={'Mengo Senior School'} bg={'border-red-500'} icon={<MdOutlineCancel size={20} className='text-red-500'/>}  paraColor={'text-red-500'} para={'Admissions ended'}/>
      <FinalContent schoolName={'Namilyango Secondary School,Wakiso'} bg={'border-green-500'} icon={<VscPass size={20} className='text-green-500'/>}  paraColor={'text-green-500'} para={'Admission accepted'}/>

        </div>
        <div>
        <Button text={'Submit Application'}/>
        </div>

    </div>
    
      </div>
  </div>
  )
}

export default Confirm