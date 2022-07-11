import React from 'react'
import AnimateText from './AnimateText'
import Card from './Card'

function Projects() {
  return (
    <div className='w-full'>
      <div className='text-white'>
        <span className='text-[#FFC501] text-xl font-["La_Belle_Aurore"]'>&lt;h1&gt;</span>
        <br />
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-["League_Spartan"] font-semibold tracking-wider'>
          <AnimateText text="Projects" />{/* &nbsp;&amp;&nbsp; */}
        </h1>
        <span className='text-[#FFC501] text-xl font-["La_Belle_Aurore"]'>&lt;/h1&gt;</span>
      </div>
      <div className='min-w-fit max-w-[90%] max-h-screen overscroll-y-contain overflow-y-auto space-y-8'>
        <Card title={'PORTFOLIO'} techstack={'React, JSX, TailwindCss'} imgUrl={'https://www.tailwind-kit.com/images/car/1.jpg'}/>
        <Card title={'PORTFOLIO'} techstack={'React, JSX, TailwindCss'} imgUrl={'https://www.tailwind-kit.com/images/car/1.jpg'}/>
        <Card title={'PORTFOLIO'} techstack={'React, JSX, TailwindCss'} imgUrl={'https://www.tailwind-kit.com/images/car/1.jpg'}/>
        <Card title={'PORTFOLIO'} techstack={'React, JSX, TailwindCss'} imgUrl={'https://www.tailwind-kit.com/images/car/1.jpg'}/>
        <Card title={'PORTFOLIO'} techstack={'React, JSX, TailwindCss'} imgUrl={'https://www.tailwind-kit.com/images/car/1.jpg'}/>
        <Card title={'PORTFOLIO'} techstack={'React, JSX, TailwindCss'} imgUrl={'https://www.tailwind-kit.com/images/car/1.jpg'}/>
        <Card title={'PORTFOLIO'} techstack={'React, JSX, TailwindCss'} imgUrl={'https://www.tailwind-kit.com/images/car/1.jpg'}/>
        <Card title={'PORTFOLIO'} techstack={'React, JSX, TailwindCss'} imgUrl={'https://www.tailwind-kit.com/images/car/1.jpg'}/>
        <Card title={'PORTFOLIO'} techstack={'React, JSX, TailwindCss'} imgUrl={'https://www.tailwind-kit.com/images/car/1.jpg'}/>
        <Card title={'PORTFOLIO'} techstack={'React, JSX, TailwindCss'} imgUrl={'https://www.tailwind-kit.com/images/car/1.jpg'}/>
      </div>
    </div>
  )
}

export default Projects
