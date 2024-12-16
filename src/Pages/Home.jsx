import React from 'react'
import DashBoard from '../components/DashBoard'
import SideBar from '../components/sideBar'
import NavBar from '../components/NavBar'
import Heading from '../components/Heading'
import Widget from '../components/Widget'
import Buttons from '../components/Buttons'
import Applications from '../components/Applications'
import Admissions from '../components/Admissions'
const Home = () => {
  return (
    
    <div className='flex'>
      <div>
      <SideBar/>
      </div>
       <div  className='flex  h-20 w-full flex-col'>
        <NavBar/>  
        <Heading/>
        <div className='grid grid-cols-2 ml-8'>
          <Widget/>
          <Widget/>
        </div>  
<div  className='mt-8 '>
<Buttons />
<div className='ml-10 border border-yellow-300 max-h-72 rounded-xl overflow-y-auto mt-4'>
  <div className='ml-20 mr-20'>
  <Applications/>
  <Applications/>
  
  </div>

</div> 

</div>
           
       </div>
       
       </div>
       
   
    
   
    
    
    
  )
}

export default Home