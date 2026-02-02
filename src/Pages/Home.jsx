import React from 'react'
import BgVid from '../Components/BgVid'
import Title from '../Components/Title'
import DescPage from '../Components/DescPage'
import ProjectsList from '../Components/ProjectsList'

const Home = () => {
  return (
    <div className='flex flex-col min-h-screen w-full bg-gray-500'>
      <BgVid />
      <Title />
      <DescPage />
      <ProjectsList />
    </div>
  )
}

export default Home
