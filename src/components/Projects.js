import React from 'react'
import AnimateText from './AnimateText'
import Card from './Card'

function Projects() {
  const Username = process.env.USERNAME
  const API_URL = `https://api.github.com/users/${Username}/repos`
  const [projectList, setProjectList] = React.useState([])
  const [fetchError, setFetchError] = React.useState(null)
  const [isLoading, setIsLoading] = React.useState(true)
  React.useEffect(() => {
    const fetchRepos = async () => {
        try{
          const response = await fetch(API_URL)
          if (!response.ok) throw Error('Did not received expected data')
          const repoList = await response.json()
          setProjectList(repoList)
          console.log(projectList)
          setFetchError(null)
        }catch(err){
          console.log(err.message)
          setFetchError(err.message)
        }finally{
          setIsLoading(false)
        }
    }
    setTimeout(()=>{
      (async () => await fetchRepos())()
    }, 2000)
  }, [])
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
