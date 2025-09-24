import React from 'react'
import AmbientBackground from './components/AmbientBackground'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'

const App: React.FC = () => {
  return (
    <>
      <AmbientBackground />
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App