import React from 'react'
import AnimateText from './AnimateText'
import Card from './Card'
import data from '../Data/data.json'

function Projects() {
  /* const Username = process.env.USERNAME
  const API_URL = `https://api.github.com/users/Utkarsh212/repos` */
  const [projectList, setProjectList] = React.useState([])
  React.useEffect(() => {
    setTimeout(() => {
      setProjectList(data)
    }, 1500)
  }, [])
  console.log(projectList)
  /* React.useEffect(() => {
    const fetchRepos = async () => {
        try{
          const response = await fetch(API_URL)
          if (!response.ok) throw Error('Did not received expected data')
          const repoList = await response.json()
          setProjectList(repoList)
        }catch(err){
          console.log(err.message)
        }
    }
    setTimeout(()=>{
      (async () => await fetchRepos())()
    }, 2000)
  }, []) */

  return (
    <div className='w-full flex flex-col justify-center items-start space-y-5'>
      <div className='text-white'>
        <span className='text-[#FFC501] text-xl font-["La_Belle_Aurore"]'>&lt;h1&gt;</span>
        <br />
        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-["League_Spartan"] font-semibold tracking-wider'>
          <AnimateText text="Projects" />
        </h1>
        <span className='text-[#FFC501] text-xl font-["La_Belle_Aurore"]'>&lt;/h1&gt;</span>
      </div>
      <div className='min-w-fit max-w-[90%] h-[70vh] lg:min-w-[45%] lg:h-fit lg:p-5 overscroll-y-scroll overflow-y-auto space-y-8 lg:overflow-y-hidden lg:overscroll-y-none lg:grid lg:grid-flow-col lg:space-y-0 lg:space-x-5 lg:overflow-x-auto lg:overscroll-x-contain scrollbar-hide'>
        {projectList.map((project)=>{
          return <Card 
            key={project.id} 
            title={project.title} 
            techstack={project.techstack} 
            imgUrl={project.imgUrl} 
            githubUrl={project.githubUrl}
            deploymentUrl={project.deploymentUrl}
          />
        })}
      </div>
    </div>
  )
}

export default Projects
