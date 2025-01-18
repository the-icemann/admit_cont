import React from 'react'

const LandingCard = ({logo,heading,paragraph}) => {
  return (
    <div>
        <div className='border bg-[#D3DFEE4D] w-fit rounded-lg relative  '>
        <img src={logo} alt=""  className='absolute  mt-[-38px] left-4'/>
        <h3 className='text-xl mt-12 mx-auto text-[#223A59] text-[16.54px] mx-3'>{heading}</h3>
        <p className='mb-4 text-[#5C5C5C] text-xs mt-4 font-normal leading-4 mx-4'>{paragraph}</p>
        </div>
    </div>
  )
}

export default LandingCard