import React from 'react'
import SchoolSideBar from '../components/SchoolSideBar'
import Logo from '../components/Logo'
import phone from '../Images/Group 145.png'
import map from '../Images/map-marker.png'
import Gmail from '../Images/Gmail.png'
import FAB from '../Images/Facebook.png'
import instagram from'../Images/Instagram.png'
import {Link} from 'react-router-dom'


const School = () => {
  
   
      return (
        <div className='flex '>
           
           <div>
            <SchoolSideBar/>
           </div>

           <div className='w-full mx-4'>
            <nav className='my-4'>
                <Logo/>
            </nav>

            <div className='border-t-2 border-b-2 border-yellow-400'>
                <h2 className='text-[41px] mb-4 font-semibold text-[#041084]'>NAMILYANGO COLLEGE</h2>

                <ul className='grid gap-4'>
                    <li className='flex items-center gap-2'>
                        <img src={phone} alt="phone" />
                        <p className='text-[18.98px]'>+256 756 039 467</p>                        
                    </li>
                    <li className='flex items-center gap-2'>
                        <img src={map} alt="location" />
                        <p className='text-[18.98px]'>Namilyango Road,Seeta, Mukono</p>                        
                    </li>
                </ul>

                <div className='lg:flex lg:justify-between items-center mb-4 grid'>
                    <div>
                        <p className='text-[18.98px]'>Website: <span className='text-blue-400 '>namilyangocollege.education</span></p>
                    </div>
                    <ul className='flex gap-4 my-4'>
                        <li>
                            <img src={Gmail} alt="Gmail" className='h-10'/>
                        </li>
                        <li>
                            <img src={FAB} alt="facebookLogo" className='h-10' />
                            </li>
                        <li>

                            <img src={instagram} alt='instagram' className='h-10'/>
                        </li>
                    </ul>
                </div>
            </div>

            <div>
                <h3 className='text-[26.57px] text-[#041084] mb-4'>Application Details</h3>
                <div className='grid gap-5'>
                    <p>Start:<span className='ml-3'>17/01/2025</span></p>
                    <p>Stop:<span className='text-[#35BD42] ml-3'>21/05/2025</span></p>
                    <p>Admission Fee:<span className='text-[#35BD42] ml-3'>UGX 50,000</span></p>
                </div>
            </div>

            <div className=''>
         <div className='text-center mt-10'>
      <Link to={'/payment'}><button className='w-40 text-white bg-[#041084] h-10 rounded-3xl'>APPLY NOW</button></Link>
      </div>
    </div>
           </div>
        </div>
  )
}

export default School