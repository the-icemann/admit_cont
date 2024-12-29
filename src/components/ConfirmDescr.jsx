import React from 'react'

const ConfirmDescr = ({...props}) => {
  return (
    <div className='flex justify-between items-center my-3'>
    <p className='font-semibold text-blue-900 text-xl'>{props.info}</p>
    <span className='font-semibold text-blue-900 text-xs'>{props.edit}</span>
    </div>
  )
}

export default ConfirmDescr