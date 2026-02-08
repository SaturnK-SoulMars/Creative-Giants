import { useEffect, useRef } from 'react'
import { Route, Routes } from 'react-router-dom'
import Lenis from "lenis"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

import Home from './Pages/Home'
import Projects from './Pages/Projects'
import News from './Pages/News'
import Contact from './Pages/Contact'
import Process from './Pages/Process'
import ProjectList from './Pages/ProjectList'

import PageTransition from './Components/PageTransition'
import PageLayout from './Components/PageLayout'
import ScrollToTop from './Components/ScrollToTop'
import ProjectDetail from './Sections/ProjectSection/ProjectDetail'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      duration: 1.2,
    })

    lenisRef.current = lenis

    const raf = (time) => {
      lenis.raf(time * 1000)
    }

    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
    }
  }, [])


  return (
    <>
      <ScrollToTop lenisRef={lenisRef} delay={1000} />

      <PageTransition>
        {(displayLocation) => (
          <Routes location={displayLocation}>
            <Route element={<PageLayout />}>
              <Route path="/" element={<Home />} />

              <Route path="projects">
                <Route index element={<Projects />} />
                <Route path="list" element={<ProjectList />} />

                {/* ✅ Dynamic route */}
                <Route path=":id" element={<ProjectDetail />} />
              </Route>

              <Route path="news" element={<News />} />
              <Route path="process" element={<Process />} />
              <Route path="contact" element={<Contact />} />
            </Route>
          </Routes>
        )}
      </PageTransition>
    </>
  )
}

export default App
