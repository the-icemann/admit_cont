import React from 'react'
import SteperTitle from '../components/SteperTitle';
import AbountContent from '../components/AbountContent';

const About = () => {
  return (
    <div className=' w-full'>
     <SteperTitle h2={'Tell us about yourself'} p={'Please make sure all the information is up-to-date and accurate'}/>
     <AbountContent/>
     </div>
  )
}

export default About