import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TailwindLogo from "../assets/images/tailwind-css.svg"
import AnimateText from './AnimateText';
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faGithub,
  faFigma,
  faNodeJs,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <div className='text-white flex flex-col justify-around items-center lg:flex-row md:justify-between md:space-x-7'>
      <div>
        <span className='text-[#FFC501] text-xl font-["La_Belle_Aurore"]'>&lt;h1&gt;</span>
        <br />
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-["League_Spartan"] font-semibold tracking-wider'>
          <AnimateText text="Skills" />
        </h1>
        <span className='text-[#FFC501] text-xl font-["La_Belle_Aurore"]'>&lt;h1&gt;</span>
        <div>
          <p className='text-md md:text-lg lg:text-xl font-["League_Spartan"]'>
            Skills
            I am a front-end web developer well versed in technologies like HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind Css, Git etc.
            <br />
            I'm not a designer but I have a good sense of aesthetics, and experience in responsive, web design. I put special effort into optimizing my code and providing the best user experience. I would love to give you any kind of support also after the project's completion.
            <br />
            Visit my <a href="/">LinkedIn</a> and <a href="/">Github</a> profile for more details.
          </p>
        </div>
      </div>
      <div className='container mx-auto grid grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 pt-6 gap-x-0 gap-y-5'>
        <FontAwesomeIcon icon={faHtml5} color="#F06529" size="4x" className='hover:scale-150 m-auto' />
        <FontAwesomeIcon icon={faCss3} color="#28A4D9" size="4x" className='hover:scale-150 m-auto' />
        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" size="4x" className='hover:scale-150 m-auto' />
        <FontAwesomeIcon icon={faReact} color="#5ED4F4" size="4x" className='hover:scale-150 m-auto' />
        <img src={TailwindLogo} alt="Tailwind" className='max-w-[150px] scale-[0.3] md:scale-[0.4] lg:scale-[0.5] hover:scale-[.8] m-auto' />
        <FontAwesomeIcon icon={faNodeJs} color="#68A063" size="4x" className='hover:scale-150 m-auto' />
        <FontAwesomeIcon icon={faBootstrap} color="#8F0DFF" size="4x" className='hover:scale-150 m-auto' />
        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" size="4x" className='hover:scale-150 m-auto' />
        <FontAwesomeIcon icon={faGithub} color="#050505" size="4x" className='hover:scale-150 m-auto' />
        <FontAwesomeIcon icon={faFigma} color="#fff" size="4x" className='hover:scale-150 m-auto' />
        <FontAwesomeIcon icon={faStackOverflow} color="#cc5500" size="4x" className='hover:scale-150 m-auto' />
      </div>
    </div>
  )
}

export default Skills
