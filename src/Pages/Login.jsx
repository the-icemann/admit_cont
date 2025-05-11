
import React, { useEffect } from 'react';
import Logo from '../components/Logo';
import SteperTitle from '../components/SteperTitle';
import { Link, useNavigate } from 'react-router-dom';
import { BsGoogle } from "react-icons/bs";
import { useFormik } from 'formik';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  sendEmailVerification,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';
import { auth, googleProvider } from '../assets/config/firebaseConfig';
import { mySchema } from '../schemas';

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload(); // 🔁 Refresh user data
        if (user.emailVerified) {
          navigate("/steps");
          
        }
      }
    });

    return () => unsubscribe(); // Clean up listener
  }, [navigate]);

  const sendVerificationAndAlert = async (user) => {
    try {
      

      await sendEmailVerification(user);
      alert("A verification email has been sent to your inbox. Please verify your email before continuing.");
      
    } catch (err) {
      console.error("Failed to send verification email:", err);
    }
  };

  const signIn = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      await sendVerificationAndAlert(userCredential.user);
    } catch (err) {
      console.log(err);
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    googleProvider.setCustomParameters({ prompt: "select_account" });

    try {
      if (auth.currentUser) {
        await signOut(auth);
      }

      await signInWithPopup(auth, googleProvider);
      navigate("/steps"); // Google accounts are usually verified
    } catch (err) {
      console.log(err);
    }

    localStorage.clear();
    sessionStorage.clear();
  };

  const {
    values,
    errors,
    handleBlur,
    touched,
    handleChange,
    handleSubmit
  } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: mySchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        await signIn(values);
      } catch (error) {
        console.log("Error", error);
        setErrors({ email: "Invalid credentials" });
      } finally {
        setSubmitting(false);
      }
    }
  });

  const inputDesign = 'mt-4 border w-full h-14 rounded-md focus:border-blue-400 outline-none placeholder:italic bg-gray-100';
  const paradesign = 'mt-3 mb-3 font-semibold text-xl hover:text-gray-400';

  return (
    <div className='mx-auto container flex items-center justify-center my-16'>
      <div className="flex flex-col justify-center w-3/4 md:w-1/2 ">
        <div className='my-8'>
          <Logo />
        </div>

        <SteperTitle
          h2={'Find Your Dream School Here'}
          p={'Sign up now, create your account and begin the application process!'}
        />

        <form onSubmit={handleSubmit}>
          <div className='my-4'>
            <label htmlFor="email" className={paradesign}>Email</label><br />
            <input
              type="email"
              id='email'
              className={`${inputDesign} ${errors.email && touched.email ? "border-red-600" : ""}`}
              placeholder='Enter Email Address'
              onChange={handleChange}
              value={values.email}
              name='email'
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className='text-red-700'>{errors.email}</p>
            )}
          </div>

          <div className='my-4'>
            <label htmlFor="password" className={paradesign}>Password</label><br />
            <input
              type="password"
              id='password'
              name="password"
              className={inputDesign}
              placeholder='Password'
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />
            {touched.password && errors.password && (
              <p className='text-red-700'>{errors.password}</p>
            )}
          </div>

          <div className='text-center'>
            <button
              className='bg-blue-950 w-full h-14 rounded-xl text-white text-xl my-3'
              type='submit'
            >
              Get started
            </button>
            <p className='text-center text-2xl text-gray-300'>OR</p>
          </div>

          <button
            className='flex shadow-2xl rounded-xl justify-center h-16 items-center gap-4 text-gray-300 mx-auto mt-5 hover:text-gray-600 cursor-pointer w-full'
            onClick={signInWithGoogle}
          >
            <div className='flex md:gap-28 items-center md:justify-center lg:mx-auto'>
              <div className='sm:mr-8'>
                <BsGoogle size={30} className='sm:-ml-12' />
              </div>
              <p className='text-xl md:text-2xl md:-ml-20 sm:text-center sm:ml-10'>
                Sign Up with Google
              </p>
            </div>
          </button>
        </form>

        <div className="flex justify-start p-8">
          <Link to='/' className='text-slate-600 text-xl'>Back</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
