import React from 'react'
import BgVid from '../Components/BgVid'
import Title from '../Components/Title'
import DescPage from '../Components/DescPage'
import ProjectsList from '../Components/ProjectsList'
import Showcase from '../Components/Showcase'
import Feedback from '../Components/Feedback'
import News from '../Components/News'

const Home = () => {
  return (
    <>
      <div className='flex flex-col min-h-screen w-full'>
        <BgVid />
        <Title />
        <DescPage />
        <ProjectsList />
        <Showcase/>
        <Feedback />
        <News />
      </div>
    </>
  )
}

export default Home
