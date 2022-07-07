import React from 'react'
import LogoU from '../assets/images/LogoU-03.png'
import { NavLink, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faEnvelope,
  faCog,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faDiscord,
} from "@fortawesome/free-brands-svg-icons";
function Sidebar() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");
  let currentPath = splitLocation[1];
  return (
    <div className='flex flex-col justify-between items-center lg:h-full p-2 space-y-4'>
      <div className='flex flex-col justify-center items-center'>
        <NavLink to="/"><img src={LogoU} alt='Utkarsh' className='w-14' />
          <h4 className='text-white text-base'>Utkarsh</h4></NavLink>
      </div>
      <div className='flex lg:flex-col justify-center items-center space-x-6 lg:space-x-0 lg:space-y-6 text-xs lg:text-sm text-slate-200'>
        <NavLink exact="true" className={`${currentPath === "" ? "text-[#BC0E4C] animate-bounce" : ""}`} to="/">
          <FontAwesomeIcon icon={faHome} size="2x" />
        </NavLink>
        <NavLink exact="true" className={`${currentPath === "about" ? "text-[#BC0E4C] animate-bounce" : ""}`} to="/about">
          <FontAwesomeIcon icon={faUser} size="2x" />
        </NavLink>
        <NavLink exact="true" className={`${currentPath === "skills" ? "text-[#BC0E4C] animate-spin" : ""}`} to="/skills">
          <FontAwesomeIcon icon={faCog} size="2x" />
        </NavLink>
        <NavLink exact="true" className={`${currentPath === "work" ? "text-[#BC0E4C] animate-bounce" : ""}`} to="/work">
          <FontAwesomeIcon icon={faBriefcase} size="2x" />
        </NavLink>
        <NavLink exact="true" className={`${currentPath === "contact" ? "text-[#BC0E4C] animate-bounce" : ""}`} to="/contact">
          <FontAwesomeIcon icon={faEnvelope} size="2x" />
        </NavLink>
      </div>
      <div className='flex lg:flex-col justify-center items-center space-x-3 lg:space-x-0 lg:space-y-2 text-xs lg:text-sm text-slate-200'>
        <a href="/"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
        <a href="/"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
        <a href="/"><FontAwesomeIcon icon={faTwitter} size="2x" /></a>
        <a href="/"><FontAwesomeIcon icon={faDiscord} size="2x" /></a>
      </div>
    </div>
  )
}

export default Sidebar
