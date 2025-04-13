import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import About from './Components/About'
import Projects from './Components/Projects'
import Skills from './Components/Skills'
import AchievementShowcase from './Components/AchievementShowcase'
import Testimonials from './Components/Testimonials'
import ContactForm from './Components/ContactForm'
import Footer from './Components/Footer'

const App = () => {
  return (
    <main className='bg-black text-gray-200 antialiased'>
      <Navbar/>
      <HeroSection/>
      <About/>
      <Projects/>
      <Skills/>
      <AchievementShowcase/>
      <Testimonials/>
      <ContactForm/>
      <Footer/>
    </main>
  )
}

export default App