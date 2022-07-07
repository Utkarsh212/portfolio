import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faSass,
  faGithub,
  faFigma,
  faAngular,
  faNodeJs,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

function Skills() {
  return (
    <div>
      <span>&lt;h1&gt;</span>
      <h1>Skills</h1>
      <span>&lt;h1&gt;</span>
      <p>
        Skills
        I am a front-end web developer well versed in technologies like HTML5, CSS3, JavaScript, React, Bootstrap, Tailwind Css, Git etc.
        <br />
        I'm not a designer but I have a good sense of aesthetics, and experience in responsive, web design. I put special effort into optimizing my code and providing the best user experience. I would love to give you any kind of support also after the project's completion.
        <br />
        Visit my <a href="/">LinkedIn</a> and <a href="/">Github</a> profile for more details.
      </p>
      <div>
        <FontAwesomeIcon icon={faBootstrap} color="#8F0DFF" size="3x"/>
        <FontAwesomeIcon icon={faHtml5} color="#F06529" size="3x" />
        <FontAwesomeIcon icon={faCss3} color="#28A4D9" size="3x" />
        <FontAwesomeIcon icon={faReact} color="#5ED4F4" size="3x" />
        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" size="3x" />
        <FontAwesomeIcon icon={faSass} color="#CD6799" size="3x" />
        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" size="3x" />
        <FontAwesomeIcon icon={faGithub} color="#050505" size="3x" />
        <FontAwesomeIcon icon={faNodeJs} color="#68A063" size="3x" />
        <FontAwesomeIcon icon={faAngular} color="#8A3324" size="3x" />
        <FontAwesomeIcon icon={faFigma} color="#fff" size="3x" />
        <FontAwesomeIcon icon={faStackOverflow} color="#cc5500" size="3x" />
      </div>
    </div>
  )
}

export default Skills
