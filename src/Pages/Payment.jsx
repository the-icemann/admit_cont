import React from 'react'
import SchoolSideBar from '../components/SchoolSideBar'
import Logo from '../components/Logo'
import {Link} from 'react-router-dom'
const Payment = () => {
  return (
    <div className='flex mx-auto'>
        <div>
            <SchoolSideBar/>
        </div>
<div className='flex items-center flex-col mx-auto'>

<nav className='border-b-[1px] border-yellow-400 w-full'>
  <Logo/>
</nav>


<div className='w-full flex '>
 
 <form action="" className=' mx-auto border border-blue-500 h-fit mt-8 rounded-2xl p-24 lg:w-auto '>
 <div>
  <div className='mb-10 text-center mt-5'>
    <h2 className='text-blue-700 font-semibold'>ADMISSION FEE PAYMENT FORM</h2>
  </div>
  <div className='border-b-[1px] border-gray ml-3'>
    <p className='text-[#271563] text-[14.13px]'>PAYMENT INFORMATION</p>
  </div>
 </div>
<div className='lg:flex lg:justify-between mx-5 grid gap-3 mt-9 mb-9'>

<div className='w-fit'>
<label for="payment" class="block mb-2 text-sm font-medium text-[#271563]">Select an option</label>
  <select id="payment" class=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-52 ">
    <option selected>--Select--</option>
    <option value="MTN">MTN MOMO</option>
    <option value="AIRTEL">AIRTEL</option>
    <option value="VISA">VISA PAY</option>
    <option value="PAYPAL">PayPal</option>
  </select>
</div>

<div className='w-full'>
    <label for="Expiration Date" class="block mb-2 text-sm font-medium text-[#271563]">Expiration Date</label>
    <input type="date" id="Expiration Date" class=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-52 outline-none" placeholder="mm/yyyy" required />
</div>
</div>

<div className='lg:flex lg:justify-between mx-5 grid gap-3'>
<div className='w-fit'>
    <label for="cardNumber" class="block mb-2 text-sm font-medium text-[#271563]">Card Number</label>
    <input type="text" id="cardNumber" class=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 w-52 outline-none" placeholder="CardNumber" required />
</div>

<div className='w-full'>
    <label for="SecurityCode" class="block mb-2 text-sm font-medium text-[#271563]">Security Code</label>
    <input type="text" id="SecurityCode" class=" border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 w-52 outline-none" placeholder="security Code" required />
</div>

</div>
 <div className='flex items-center justify-center lg:my-10 gap-2 mt-3'>
  <input type="checkBox" id='remember'/>
  <label htmlFor="remember">Rememeber Me</label>
 </div>
 <div className='flex items-center justify-center lg:my-10 gap-2 mx-5'>
  <Link to={'/confirm'}><button className='bg-blue-900 text-white rounded-lg w-full h-10 font-semibold text-xl my-4'>
    Continue
  </button></Link>
 </div>
 </form>
</div>
</div>
</div>
    
  )
}

export default Payment