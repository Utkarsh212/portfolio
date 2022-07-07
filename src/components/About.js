import React from 'react'
import AnimateText from './AnimateText'

function About() {
  return (
    <div className='text-white space-y-8 md:space-y-14'>
      <span className='text-[#FFC501] text-2xl font-["La_Belle_Aurore"]'>&lt;h1&gt;</span>
      <br />
      <h1 className='text-2xl md:text-3xl lg:text-5xl xl:text-6xl font-["League_Spartan"] tracking-wider'>
        <AnimateText text="About" />&nbsp;<AnimateText text="me" />
      </h1>
      <span className='text-[#FFC501] text-2xl font-["La_Belle_Aurore"]'>&lt;h1&gt;</span>
      <p className='text-xs md:text-md lg:text-lg xl:text-xl font-["League_Spartan"]'>
        Hi! 👋 I'm Utkarsh, a engineering sophomore pursuing B.Tech. in Computer and Communication Engineering. I am a passionate self-learner, Open source enthusiast, exploring and building projects 👨‍💻 and making things simple using various technologies.<br/><br/>
        I'm very ambitious front-end developer looking for a role in established company with the opportunity to work with the latest technologies on challenging and diverse projects.<br/>
        I'm quietly confident, naturally curious, and love to interact with people and help others.<br/>
        If I need to define myself in one sentence that would be an Engineering Student interests in Travelling, Music lover, and tech-obsessed!!!
      </p>
      <button type="button" className='w-[max(30%,180px)] py-2 px-4 text-[#FFC501] hover:bg-[#FFC501] border-2 border-[#FFC501] hover:text-[#354F60] transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 tracking-widest'>
          RESUME
        </button>
    </div>
  )
}

export default About
