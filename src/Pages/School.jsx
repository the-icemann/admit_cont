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
        <div className='flex  '>
           
           <div>
            <SchoolSideBar/>
           </div>

           <div className='w-full mx-4 flex flex-col justify-start content-start'>
            <nav className='my-4'>
                <Logo/>
            </nav>

            {/* <div className='border-t-2 border-b-2 border-yellow-400'>
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
            </div> */}

<hr className="border-yellow-400 border-2 border-opacity-20 w-full" />

<div className="flex flex-col px-6 pb-20 pt-6 space-y-6">
    <h2 className="text-5xl text-blue-950 font-bold">Namilyango College</h2>
    <p><a href="/* SCHOOL NUMBER GOES HERE */">+256 756 039467</a></p>
    <p><a href="/* SCHOOL ADDRESS GOES HERE */">Namilyango Road, Seeta , Mukono</a></p>
    <p>Website: <a href="/* SCHOOL WEBSITE GOES HERE */" className='text-blue-300'>namilyangocollege.educ</a></p>

    <div className='lg:flex lg:justify-between items-center mb-4 grid'>
                    <div>
                        <p className='text-[18.98px] invisible'>Website: <span className='text-blue-400 '>namilyangocollege.education</span></p>
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
    <hr className="border-yellow-400 border-2 border-opacity-20" />

    <div className="flex flex-col px-6 pt-6 pb-20 space-y-6">
        <h2 className="text-3xl text-blue-950">Application Details</h2>
        <p>Start: </p>
        <p>Stop: <span className='text-green-500'>Stop Date</span></p>
        <p>Admission Fee: <span className='text-green-500'>Fee</span> </p>


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