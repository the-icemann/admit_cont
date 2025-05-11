import { Link } from 'react-router-dom'
import myImage from '../Images/new admit image.png'
import cartoon1 from '../Images/Application.png'
import cartoon2 from '../Images/undraw_studying_re_deca 1.png'
import cartoon3 from '../Images/Frame 42.png'
import cartoon4 from '../Images/undraw_exams_re_4ios 1.png'

import logo from '../Images/Group 152.png'
import LandingCard from '../components/LandingCard';
import { useNavigate } from 'react-router-dom'
import { auth } from '../assets/config/firebaseConfig'
import { useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'

import cartoon5 from '../Images/Frame 39.png';
import cartoon6 from '../Images/Frame 42.png';
import cartoon7 from '../Images/Frame 44.png';
import landingData from '../contexts/landingData'



const Landing = () => {

  






    return (
        <>
        <nav className='flex justify-between items-center lg:mx-20 lg:my-10'>
            {/* <div className="text-3xl" ><p className="text-blue-950">Ad<span className="text-yellow-400">MIT</span></p> */}
            <img src={logo} alt="bow" className='w-[200px] h-[100px]' />
            {/* </div> */}

           

            <div className='w-3/4 flex justify-end'>
              <ul className=' gap-3'>
                {/* <li className='border border-blue-900 rounded-lg w-20 text-center flex items-center justify-center hover:bg-blue-950 '>
                <Link to={'/login'}><button className='text-lg text-blue-900  hover:text-white'>Log In</button> </Link>           
                </li> */}
                
                 
              </ul>
            </div>
        </nav>



<section id="hero">

{/* FLEX CONTAINER */}

<div className="flex container flex-col-reverse md:flex-row items-center mx-auto">

    {/* First box(left side) */}

    <div className="flex text-center flex-col p-5 m-10 space-y-12 md:w-1/2 md:text-left" >

    <h2 className="text-6xl  text-center text-blue-950 md:text-left lg:text-8xl">Apply To Your Dream School With Ease!</h2>

    <p className="text-2xl">Our Web App Simplifies the O-level and A-level Application Process for Primary and High School Students.</p>

    
    <Link to={'/login'}><button className='p-4 px-8 py-4 w-full text-white bg-blue-950  border-2 border-blue-950 rounded baseline text-2xl text-center md:text-left hover:bg-white hover:text-blue-800 '>Start your application</button></Link> 
    <button className='p-3 px-8 py-1 w-full text-blue-950   rounded baseline text-lg text-center  hover:bg-white hover:text-blue-800 sm:text-base hover:underline' type='submit' >I already have an account</button> 
    

</div>

{/* Second box (Right side) */}

<div className="md:w-1/2">
<img src={myImage} alt="picture of girl studying" />

</div>

</div>

</section>


<section className='mx-20 my-10 flex gap-8  lg:flex-row md:flex-row flex-col'>

    {/* Cards go here */}
  {/* {landingData.map(card=>{
    <LandingCard logo={card.logo} heading={ card.title} paragraph={card.content}/>
  })} */}


<LandingCard logo={cartoon5} heading={'Streamline Your Application Process'} paragraph={'Our web app helps primary and high school students save time and energy by streamlining the application process for multiple schools. With our easy-to-use platform, you can complete and submit your applications quickly and efficiently'}/>
<LandingCard logo={cartoon6} heading={'Discover Your Best-Fit Schools'} paragraph={`Our web app also helps you find the schools that best fit your academic and personal interests. By answering a few questions about your goals and preferences, we'll provide you with a list of schools that match your profile.`}/>
<LandingCard logo={cartoon7} heading={'Get Expert Guidance and Support'} paragraph={`Applying to schools can be a daunting process, but our web app is here to help. We provide expert guidance and support throughout the entire application process, from selecting the right schools to crafting a strong personal statement. `}/>



</section>







        </>
    );
};

export default Landing;