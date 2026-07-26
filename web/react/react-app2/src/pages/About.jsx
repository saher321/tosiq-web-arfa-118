import React from 'react'
import GetStartedBtn from '../components/GetStartedBtn'

const About = () => {
  return (
    <div className='page-title rounded shadow p-4'>
        <GetStartedBtn />
        <div style={{margin:"8px 0px"}}>About</div>
        <GetStartedBtn />
    </div>
  )
}

export default About