import { Link } from 'react-router-dom'
import myImage from '../Images/new admit image.png'
import cartoon1 from '../Images/Application.png'
import cartoon2 from '../Images/undraw_studying_re_deca 1.png'
import cartoon3 from '../Images/Frame 42.png'
import cartoon4 from '../Images/undraw_exams_re_4ios 1.png'
import cartoon5 from '../Images/Frame 39.png'
import cartoon6 from '../Images/Frame 42.png'
import cartoon7 from '../Images/Frame 44.png'
import logo from '../Images/Group 152.png'
import LandingCard from '../components/LandingCard';

const Landing = () => {
    return (
        <>
        <nav className='flex justify-between items-center lg:mx-20 lg:my-10'>
            {/* <div className="text-3xl" ><p className="text-blue-950">Ad<span className="text-yellow-400">MIT</span></p> */}
            <img src={logo} alt="bow" className='w-[200px] h-[100px]' />
            {/* </div> */}

            <div >
                <ul className='lg:flex lg:gap-10 lg:text-lg text-gray-800  lg:block hidden '>
                    <li className='lg:hover:underline'>Schools</li>
                    <li className='lg:hover:underline'>Courses</li>
                    <li className='lg:hover:underline'>Catalog</li>
                </ul>
            </div>

            <div >
              <ul className='flex gap-3'>
                <li className='border border-blue-900 rounded-lg w-20 text-center flex items-center justify-center hover:bg-blue-950 '>
                <Link to={'/login'}><button className='text-lg text-blue-900  hover:text-white'>Log In</button> </Link>           
                </li>
                <li className='border rounded-lg w-20 text-center bg-blue-950 h-10 w-18 flex items-center justify-center hover:bg-white'>
                  <Link to={'/login'}><button className='text-lg text-white  hover:text-blue-950'>SignUp</button></Link>  
                </li>
              </ul>
            </div>
        </nav>

{/* <section className='mx-20 my-10 flex gap-10 lg:flex-row md:flex-row flex-col' >

<div>
    <div>
        <h1 className='text-3xl tracking-wide text-[#223A59]'>APPLY TO YOUR <br/>DREAM SCHOOL<br/> WITH EASE</h1>
        <p className='tracking-wide mt-4 text-[#333333]'>Our Web App Simplifies the O-level and A-level <br/>
        Application Process for Primary and High School <br/>Students</p>

        <div className=' flex items-center gap-3  '>
            <button className='border bg-blue-950 text-white rounded-lg w-60 h-10 lg:text-xl text-xs'>Start Your Application</button>
            <img src={cartoon1} alt='Logo' className='h-20 mb-0'/>
        </div>
    </div>
</div>

<div className=' lg:block hidden'>

<div className=''>
    <img src={cartoon2} alt="Logo" />
    <img src={cartoon3} alt="Logo" className='h-10 ml-96 mb-4' />
    
</div>

<div>
    <img src={cartoon4} alt="" className='ml-28'  />
</div>

</div>

</section> */}

<section id="hero">

{/* FLEX CONTAINER */}

<div className="flex container flex-col-reverse md:flex-row items-center mx-auto">

    {/* First box(left side) */}

    <div className="flex text-center flex-col p-5 m-10 space-y-12 md:w-1/2 md:text-left" >

    <h2 className="text-6xl text-left text-center text-blue-950 md:text-left lg:text-8xl">Apply To Your Dream School With Ease!</h2>

    <p className="text-2xl">Our Web App Simplifies the O-level and A-level Application Process for Primary and High School Students.</p>

    {/* <a href="" className="p-4 px-6 pt-2 text-white bg-blue-950  border-2 border-blue-950  rounded baseline text-2xl">Start your application</a> */}
    <Link to={'/login'}><button className='p-4 px-8 py-4 w-full text-white bg-blue-950  border-2 border-blue-950 rounded baseline text-2xl text-center md:text-left hover:bg-white hover:text-blue-800 '>Start your application</button></Link> 

</div>

{/* Second box (Right side) */}

<div className="md:w-1/2">
<img src={myImage} alt="picture of girl studying" />

</div>

</div>

</section>


<section className='mx-20 my-10 flex gap-8  lg:flex-row md:flex-row flex-col'>


<LandingCard logo={cartoon5} heading={'Streamline Your Application Process'} paragraph={'Our web app helps primary and high school students save time and energy by streamlining the application process for multiple schools. With our easy-to-use platform, you can complete and submit your applications quickly and efficiently'}/>
<LandingCard logo={cartoon6} heading={'Discover Your Best-Fit Schools'} paragraph={`Our web app also helps you find the schools that best fit your academic and personal interests. By answering a few questions about your goals and preferences, we'll provide you with a list of schools that match your profile.`}/>
<LandingCard logo={cartoon7} heading={'Get Expert Guidance and Support'} paragraph={`Applying to schools can be a daunting process, but our web app is here to help. We provide expert guidance and support throughout the entire application process, from selecting the right schools to crafting a strong personal statement. `}/>



</section>







        </>
    );
};

export default Landing;