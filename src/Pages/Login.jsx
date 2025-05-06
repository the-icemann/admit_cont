import React from 'react'
import Logo from '../components/Logo'
import SteperTitle from '../components/SteperTitle'
import{Link} from 'react-router-dom'
import { BsGoogle } from "react-icons/bs";
import * as Yup from 'yup'
import { useFormik } from 'formik';
import { createUserWithEmailAndPassword } from 'firebase/auth';
/* import { auth } from '../assets/config/firebaseConfig'; */






const Login = () => {



    const inputDesign='mt-4 border w-full h-14 rounded-md  focus:border-blue-400 outline-none placeholder:italic bg-gray-100 ';
const paradesign='mt-3 mb-3 font-semibold text-xl hover:text-gray-400';



  return (
    <div className='  mx-auto container flex items-center justify-center align-middle content-center my-16 '>


      <div className="flex flex-col justify-center align-middle content-center w-3/4  md:w-1/2">

      

      <div className='my-8'>
       <Logo/>
        </div> 
        <SteperTitle h2={'Find Your Dream School Here'} p={'Sign up now create your account and begin the application process! '}/>

        <form action="" >



        <div className='my-4'>

          
            
          <label htmlFor="Email" className={paradesign}>Email</label> <br />
            <input type="email" id='Email' className={inputDesign} placeholder='Enter Email Address'  />
        </div>
            <div className='my-4'>
            <label htmlFor="password" className={paradesign}>Password</label> <br />
            <input type="password" id='password' className={inputDesign} placeholder='Password' />
          </div>

        <div className='text-center'>
        <Link to={'/steps'}><button className='bg-blue-950 w-full  h-14 rounded-xl text-white text-xl my-3 ' type='submit'>Get started</button></Link>
        <p className='text-center text-2xl text-gray-300'>OR</p>
        </div>

        <div className='flex shadow-2xl rounded-xl h-16 items-center gap-4  text-gray-300 nx-auto mt-5 hover:text-gray-600 cursor-pointer '>
           <div className='flex md:gap-28 gap-10 justify-center md:text-center md:justify-center lg:mx-auto'>
            <div>
            <BsGoogle size={30} className='ml-12 md:ml-12'/>
            </div>
            <p className=' text-xl md:text-2xl md:-ml-20 md:text-center'>Sign Up with Google</p>

            </div>


          
      
            
        </div>

        </form>

        
        <div className="flex justify-start content-center p-8">

        <Link to={'/'} className='text-slate-600 text-xl'>Back</Link>

        </div>

      </div>

      

       
    </div>
  )
}

export default Login