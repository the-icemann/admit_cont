import { useEffect } from 'react';
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
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from '../assets/config/firebaseConfig';
import { useState } from 'react';

const Login = () => {
  const navigate = useNavigate();
   const [idleTime, setIdleTime] = useState(0);

useEffect(() => {
        const resetTimer = () => setIdleTime(0);

        // Detect user interaction
        window.addEventListener("mousemove", resetTimer);
        window.addEventListener("keypress", resetTimer);
        window.addEventListener("click", resetTimer);

        const interval = setInterval(async() => {
          try {
             setIdleTime(prevIdleTime => prevIdleTime + 1);
            if (idleTime >= 20) {
                alert("You have been logged out due to inactivity.");
             
              navigate('/')
            }
          } catch (error) {
            console.log(error)
          }
           
        }, 1000);

        // Cleanup function
        return () => {
            clearInterval(interval);
            window.removeEventListener("mousemove", resetTimer);
            window.removeEventListener("keypress", resetTimer);
            window.removeEventListener("click", resetTimer);
        };
    }, [idleTime]);
    console.log(idleTime)
    
    


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        await user.reload(); // Refresh the user session

        if (auth.currentUser.emailVerified) {
          checkAndProceed(user);
        } else {
          console.log("Unverified user:", user.email);
        }
      }
    });

    return () => unsubscribe();
  }, [navigate]);
  

  const sendVerificationAndAlert = async (user) => {
    try {
      await sendEmailVerification(user, {
        url: "https://localhost/verify-email", // Change this to match your frontend
        handleCodeInApp: true
      });
      alert("A verification email has been sent. Please verify your email before continuing.");
      
    } catch (err) {
      console.error("Failed to send verification email:", err);
    }
  };

  const checkAndProceed = async (user) => {
    try {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        console.log("User exists, proceeding...");
        navigate("/steps"); // Redirect if user exists
      } else {
        console.log("User does not exist, creating account...");
        await setDoc(userRef, { email: user.email });
        navigate("/steps"); // Redirect after account creation
      }
    } catch (error) {
      console.error("Error checking user:", error);
    }
  };

  const signIn = async (values) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, values.email, values.password);
      await sendVerificationAndAlert(userCredential.user);
      checkAndProceed(userCredential.user);
    } catch (err) {
      console.error("Error signing in:", err);
    }
  };

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    googleProvider.setCustomParameters({ prompt: "select_account" });

    try {
      if (auth.currentUser) await signOut(auth);
      const userCredential = await signInWithPopup(auth, googleProvider);
      checkAndProceed(userCredential.user);
    } catch (err) {
      console.error("Error signing in with Google:", err);
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
        console.error("Error:", error);
        setErrors({ email: "Invalid credentials" });
      } finally {
        setSubmitting(false);
      }
    }
  });

  const inputDesign = 'mt-4 border w-full h-14 rounded-md focus:border-blue-400 outline-none placeholder:italic bg-gray-100';
  const paradesign1 = 'mt-3 mb-3 font-semibold text-xl';

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
            <label htmlFor="email" className={paradesign1}>Email</label><br />
            <input
              type="email"
              id='email'
              name='email'
              className={`${inputDesign} ${errors.email && touched.email ? "border-red-600" : ""}`}
              placeholder='Enter Email Address'
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            {touched.email && errors.email && (
              <p className='text-red-700'>{errors.email}</p>
            )}
          </div>

          <div className='my-4'>
            <label htmlFor="password" className={paradesign1}>Password</label><br />
            <input
              type="password"
              id='password'
              name="password"
              className={`${inputDesign} ${errors.password && touched.password ? "border-red-600" : ""}`}
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
            className='flex shadow-2xl rounded-xl justify-center h-16 items-center gap-4 text-gray-600 mx-auto mt-5 hover:text-gray-500 cursor-pointer w-full'
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