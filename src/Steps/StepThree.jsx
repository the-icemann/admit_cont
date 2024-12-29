import React from 'react'
import SteperTitle from '../components/SteperTitle'
import StepThreeContent from '../components/StepThreeContent'

const StepThree = () => {
   
  return (
    <div className='w-full'>
        <SteperTitle h2={'Submit your application results testimonial or essay '} 
        p={'Please upload each essay separately if you have multiple files to submit.'}/>

<StepThreeContent/>


    </div>
  )
}

export default StepThree