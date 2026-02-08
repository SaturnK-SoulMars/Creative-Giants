import React, { useRef } from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import ProcessHeroSection from '../Sections/ProcessSection/ProcessHeroSection'
import ProcessWhoSection from '../Sections/ProcessSection/ProcessWhoSection'
import Services from '../Sections/ProcessSection/Services'
import Mailing from '../Components/Mailing'
import Playbook from '../Sections/ProcessSection/Playbook'

const Process = () => {

  return (
    <>
      <Navbar />
      <ProcessHeroSection />
      <ProcessWhoSection />
      <Playbook />
      <Services/>
      <Mailing />
      <Footer />
    </>
  )
}

export default Process
