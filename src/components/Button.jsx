import React from 'react'

const Button = ({text}) => {
  return (
    <div>
        <p className='text-center text-gray-400'>Please note that when you submit your application,you cannot make changes.</p>
        <button className='bg-blue-950 w-full  h-10 rounded-xl text-white text-xl my-3'>{text}</button>
    </div>
  )
}

export default Button