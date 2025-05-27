import React from 'react'

const LandingCard = ({logo,heading,paragraph}) => {
  return (
    <div>
        <div className='border bg-[#D3DFEE4D] w-full rounded-lg relative  px-4 '>
        <img src={logo} alt="picture"  className='absolute  mt-[-38px] left-4'/>
        <h3 className='text-xl mt-12  text-[#223A59] text-[16.54px] mx-3 px-5'>{heading}</h3>
        <p className='mb-4 text-[#5C5C5C]   py-5  font-normal mx-4'>{paragraph}</p>
        </div>
    </div>
  )
}

export default LandingCard