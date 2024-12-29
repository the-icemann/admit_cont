import React from 'react'
import SteperTitle from '../components/SteperTitle'
import JourneyContent from '../components/JourneyContent'

const Journey = () => {
  

  return (
  <div className='w-full'>
    <div>
      <SteperTitle h2={'Take us through your School journey'} p={'Make sure your current school results are accurate and up-to-date.'}/>
    </div>
<JourneyContent/>
  </div>
   
  )
}

export default Journey