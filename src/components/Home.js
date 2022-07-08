import React from 'react'
import LogoU from '../assets/images/LogoU-03.png'
import AnimateText from './AnimateText'

function Home() {
  return (
    <div className='w-full h-full flex flex-col lg:flex-row justify-evenly'>
      <div className='w-full text-white space-y-8 lg:space-y-12'>
        <div>
          <span className='text-[#FFC501] text-2xl font-["La_Belle_Aurore"]'>&lt;h1&gt;</span>
          <p className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-["League_Spartan"] font-semibold tracking-wider'>
            <AnimateText text="Hi,"/><br />
            <AnimateText text="I" />&nbsp;<AnimateText text="am" />&nbsp;<AnimateText text="Utkarsh," /><br />
            <AnimateText text="web" />&nbsp;<AnimateText text="developer." />&nbsp;<span className='text-[#FFC501] text-2xl font-["La_Belle_Aurore"]'>&lt;/h1&gt;</span>
          </p>
        </div>
        <p className='text-gray-200 text-sm lg:text-lg tracking-widest'>Front End Developer</p>
        <button type="button" className='w-[max(30%,180px)] py-2 px-4 text-[#FFC501] hover:bg-[#FFC501] border-2 border-[#FFC501] hover:text-[#354F60] transition ease-in duration-200 text-center text-base font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 tracking-widest'>
          CONTACT ME
        </button>
      </div>
      <img src={LogoU} alt='Utkarsh' className='md: w-1/2 animate-bafxs lg:animate-baflg xl:animate-baf lg:-rotate-12' />
    </div>
  )
}

export default Home
/* hover:text-[#BC0E4C] */