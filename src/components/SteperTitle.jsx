import React from 'react'

const SteperTitle = ({...props}) => {
  return (
    <div className='flex flex-col items-center mb-6'>
        <h2 className='font-semibold text-xl mb-2'>{props.h2}</h2>
        <p className='text-gray-400 mb-5'>{props.p}</p>
      </div>
  )
}

export default SteperTitle