import React from 'react'
import BgVid from '../Components/BgVid'
import Title from '../Components/Title'
import DescPage from '../Components/DescPage'
import ProjectsList from '../Components/ProjectsList'
import Showcase from '../Components/Showcase'
import Feedback from '../Components/Feedback'
import News from '../Components/News'
import Mailing from '../Components/Mailing'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <>
      <div className='flex flex-col min-h-screen w-full'>
        <BgVid />
        <Title />
        <DescPage />
        <ProjectsList />
        <Showcase />
        <Feedback />
        <News />
        <Mailing />
        <Footer />
      </div>
    </>
  )
}

export default Home
