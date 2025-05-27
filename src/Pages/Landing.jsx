// import { Link } from 'react-router-dom'
// import myImage from '../Images/new admit image.png'
// import cartoon1 from '../Images/Application.png'
// import cartoon2 from '../Images/undraw_studying_re_deca 1.png'
// import cartoon3 from '../Images/Frame 42.png'
// import cartoon4 from '../Images/undraw_exams_re_4ios 1.png'

// import logo from '../Images/Group 152.png'
// import LandingCard from '../components/LandingCard';
// import { useNavigate } from 'react-router-dom'
// import { auth } from '../assets/config/firebaseConfig'
// import { useEffect } from 'react'
// import { onAuthStateChanged } from 'firebase/auth'

// import cartoon5 from '../Images/Frame 39.png';
// import cartoon6 from '../Images/Frame 42.png';
// import cartoon7 from '../Images/Frame 44.png';
// import landingData from '../contexts/landingData'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'



// const Landing = () => {


  

//   useGSAP(()=>{

//     gsap.to("#hero", {
//       opacity:1.5,
//       y:25,
//       ease:"back.inOut",
//       delay:2.25
     
    
//     })
    

//     gsap.to("#trill", {
//       x: 10, // Moves the element slightly
//       duration: 0.5, // Short duration for quick movement
//       repeat: 10, // Number of repetitions
//       yoyo: true, // Makes the animation reverse each time
//       ease: "power1.inOut" // Smooth easing
//     });

//     gsap.set("#nav", {
//       position: "absolute",
//       left: "50vw",
//       top: "50vh",
//       xPercent: -15,
//       yPercent: -40
//     });
    
//     gsap.to("#nav", {
//       top: "5vh",
//       left:"25vw",
//       padding:5,
//       duration: 1,
//       ease: "power2.out",
//       xPercent: -20,
//       yPercent: -50,
//       delay: 1.75 // Waits 2 seconds before starting the animation
//     });

//     gsap.to('#img-box',{
//       opacity:1,
//       y:25,
//       x:15,
//       ease:"power2.inOut",
//       yoyo:true,
      
//     })



//   })

  





//     return (
//         <>
//         <div className="" id="nav">
          
//           <nav className=' container flex justify-between items-center lg:mx-20 lg:my-10 '  >
//             {/* <div className="text-3xl" ><p className="text-blue-950">Ad<span className="text-yellow-400">MIT</span></p> */}
//             <img src={logo} alt="bow" className='w-[200px] h-[100px] ' />
//             {/* </div> */}

           

//             <div className='w-3/4 flex justify-end'>
//               <ul className=' gap-3'>
//                 {/* <li className='border border-blue-900 rounded-lg w-20 text-center flex items-center justify-center hover:bg-blue-950 '>
//                 <Link to={'/login'}><button className='text-lg text-blue-900  hover:text-white'>Log In</button> </Link>           
//                 </li> */}
                
                 
//               </ul>
//             </div>
//         </nav>
//         </div>
        



// <section id="hero" className='opacity-0'>

// {/* FLEX CONTAINER */}

// <div className="flex container flex-col-reverse md:flex-row items-center mx-auto " >

//     {/* First box(left side) */}

//     <div className="flex text-center flex-col p-5 m-10 space-y-12 md:w-1/2 md:text-left" id=''>

//     <h2 className="text-6xl  text-center text-blue-950 md:text-left lg:text-8xl" >Apply To Your Dream School With <span id="trill">Ease!</span></h2>

//     <p className="text-2xl">Our Web App Simplifies the O-level and A-level Application Process for Primary and High School Students.</p>

    
//     <Link to={'/login'}><button className='p-4 px-8 py-4 w-full text-white bg-blue-950  border-2 border-blue-950 rounded baseline text-2xl text-center md:text-left hover:bg-white hover:text-blue-800 '>Start your application</button></Link> 
//     <button className='p-3 px-8 py-1 w-full text-blue-950   rounded baseline text-lg text-center  hover:bg-white hover:text-blue-800 sm:text-base hover:underline' type='submit' >I already have an account</button> 
    

// </div>

// {/* Second box (Right side) */}

// <div className="md:w-1/2 opacity-0" id='img-box'>
// <img src={myImage} alt="picture of girl studying" />

// </div>

// </div>

// </section>


// <section className='mx-20 my-10 flex gap-8  lg:flex-row md:flex-row flex-col'>

//     {/* Cards go here */}
//   {/* {landingData.map(card=>{
//     <LandingCard logo={card.logo} heading={ card.title} paragraph={card.content}/>
//   })} */}


// <LandingCard logo={cartoon5} heading={'Streamline Your Application Process'} paragraph={'Our web app helps primary and high school students save time and energy by streamlining the application process for multiple schools. With our easy-to-use platform, you can complete and submit your applications quickly and efficiently'}/>
// <LandingCard logo={cartoon6} heading={'Discover Your Best-Fit Schools'} paragraph={`Our web app also helps you find the schools that best fit your academic and personal interests. By answering a few questions about your goals and preferences, we'll provide you with a list of schools that match your profile.`}/>
// <LandingCard logo={cartoon7} heading={'Get Expert Guidance and Support'} paragraph={`Applying to schools can be a daunting process, but our web app is here to help. We provide expert guidance and support throughout the entire application process, from selecting the right schools to crafting a strong personal statement. `}/>



// </section>







//         </>
//     );
// };

// export default Landing;

// import { Link } from 'react-router-dom'
// import myImage from '../Images/new admit image.png'
// import cartoon5 from '../Images/Frame 39.png'
// import cartoon6 from '../Images/Frame 42.png'
// import cartoon7 from '../Images/Frame 44.png'
// import logo from '../Images/Group 152.png'
// import LandingCard from '../components/LandingCard'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import landingData from '../contexts/landingData'
// import { useEffect, useState } from 'react'

// const Landing = () => {


 


//   return (
//     <>
    
//       <div
//         id="nav"
         
//         className={` top-1/2 left-0  w-full z-50 `} 
        
//       >
//         <nav className="flex justify-between items-center w-[90vw] max-w-5xl p-4">
//           <img src={logo} alt="bow" className="w-[200px] h-[100px]" />
//           <div className="w-3/4 flex justify-end">
//             <ul className="gap-3">
//               {/* Login links */}
//             </ul>
//           </div>
//         </nav>
//       </div>

//       <section id="hero" className="opacity-0 ">
//         <div className="flex container flex-col-reverse md:flex-row items-center mx-auto ">
//           <div className="flex text-center flex-col p-5 m-10 space-y-12 md:w-1/2 md:text-left">
//             <h2 className="text-6xl text-center text-blue-950 md:text-left lg:text-8xl">
//               Apply To Your Dream School With <span id="trill">Ease!</span>
//             </h2>
//             <p className="text-2xl">
//               Our Web App Simplifies the O-level and A-level Application Process for Primary and High School Students.
//             </p>
//             <Link to={'/login'}>
//               <button className='p-4 px-8 py-4 w-full text-white bg-blue-950 border-2 border-blue-950 rounded text-2xl hover:bg-white hover:text-blue-800'>
//                 Start your application
//               </button>
//             </Link>
//             <button className='p-3 px-8 py-1 w-full text-blue-950 rounded text-lg hover:bg-white hover:text-blue-800 hover:underline'>
//               I already have an account
//             </button>
//           </div>

//           <div className="md:w-1/2 opacity-0" id="img-box">
//             <img src={myImage} alt="picture of girl studying" />
//           </div>
//         </div>
//       </section>

//       <section className={`mx-20 my-10 flex gap-8 lg:flex-row md:flex-row flex-col opacity-0 cards`} >
//        {landingData.map(card=>
//        <LandingCard logo={card.logo} heading={card.title} paragraph={card.content} />)  }
       
//       </section>
//     </>
//   );
// };

// export default Landing;

import { Link } from 'react-router-dom';
import myImage from '../Images/new admit image.png';
import cartoon5 from '../Images/Frame 39.png';
import cartoon6 from '../Images/Frame 42.png';
import cartoon7 from '../Images/Frame 44.png';
import logo from '../Images/Group 152.png';
import LandingCard from '../components/LandingCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import landingData from '../contexts/landingData';
import { useEffect, useState } from 'react';

const Landing = () => {
  // GSAP animations
  useGSAP(() => {
    // Properly center #nav first
    gsap.set(".small-screens", {
      xPercent: -20,
      yPercent: -15,
      top: "50%",
      left: "50%",
      position: "absolute"
    });
    gsap.set(".large-screens", {
      xPercent: -5,
      yPercent: -50,
      top: "50%",
      left: "50%",
      position: "absolute"
    });

    // Animate #nav to the top-left
    gsap.to(".large-screens", {
      top: 30,
      left: 100,
      duration: 1.5,
      ease: "power2.out",
      delay: 1
    });

    gsap.to(".small-screens", {
      top: 0,
      left: 150,
      duration: 1.5,
      ease: "power2.out",
      delay: 1
    });



    // Hero section animations
    gsap.to("#hero", {
      opacity: 1,
      y: 25,
      ease: "back.inOut",
      delay: 2,
      duration: 1,
      zIndex: 1
    });

    gsap.to("#trill", {
      x: 10,
      duration: 0.5,
      repeat: 10,
      yoyo: true,
      ease: "power1.inOut"
    });

    gsap.to("#img-box", {
      opacity: 1,
      y: 25,
      x: 15,
      ease: "power2.inOut"
    });

    gsap.to('#cards', {
      opacity: 1,
      y: 25,
      x: 15,
      ease: "elastic.inOut",
      delay: 2.3,
      duration: 1,
      stagger:{
        amount:2
      }
    });

  }, []);

  // Responsive positioning logic
  const [position, setPosition] = useState(window.innerWidth < 760 ? "small-screens" : "large-screens");
  console.log(window.innerWidth)

  useEffect(() => {
    const updatePosition = () => {
      setPosition(window.innerWidth < 760 ?  "small-screens" : "large-screens" );
    };

    window.addEventListener("resize", updatePosition);
    updatePosition(); // Initial setup
    
    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  return (
    <>
      <div id="nav" className={`top-1/2 left-0 w-full z-50 ${position}`}>
        <nav className="flex justify-between items-center w-[90vw] max-w-5xl p-4 ">
          <img src={logo} alt="bow" className="w-[200px] h-[100px]" />
          <div className="w-3/4 flex justify-end">
            <ul className="gap-3">
              {/* Login links */}
            </ul>
          </div>
        </nav>
      </div>

      <section id="hero" className="opacity-0">
        <div className="flex container flex-col-reverse md:flex-row items-center mx-auto">
          <div className="flex text-center flex-col p-5 m-10 space-y-12 md:w-1/2 md:text-left">
            <h2 className="text-6xl text-center text-blue-950 md:text-left lg:text-8xl">
              Apply To Your Dream School With <span id="trill">Ease!</span>
            </h2>
            <p className="text-2xl">
              Our Web App Simplifies the O-level and A-level Application Process for Primary and High School Students.
            </p>
            <Link to={'/login'}>
              <button className="p-4 px-8 py-4 w-full text-white bg-blue-950 border-2 border-blue-950 rounded text-2xl hover:bg-white hover:text-blue-800">
                Start your application
              </button>
            </Link>
            <button className="p-3 px-8 py-1 w-full text-blue-950 rounded text-lg hover:bg-white hover:text-blue-800 hover:underline">
              I already have an account
            </button>
          </div>

          <div className="md:w-1/2 opacity-0" id="img-box">
            <img src={myImage} alt="picture of girl studying" />
          </div>
        </div>
      </section>

      <section className={`mx-20 my-10 flex gap-8 lg:flex-row md:flex-row flex-col opacity-0 `} id='cards'>
        {landingData.map((card, index) => (
          <LandingCard key={card.title} logo={card.logo} heading={card.title} paragraph={card.content} />
        ))}
      </section>
    </>
  );
};

export default Landing;