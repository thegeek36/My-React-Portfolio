import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Technologies from './components/Technologies'
import Experience from './components/Experience'
import './index.css'
import Projects from './components/Projects'
import Contact from './components/Contact';
import Footer from './components/Footer'
import Education from './components/Education'
import { Analytics } from "@vercel/analytics/react"
function App() {

  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
    <div className='fixed top-0 -z-10 h-full w-full'>
    {/* <div class="h-screen w-screen bg-gradient-to-t from-green-400 via-transparent to-orange-400"></div> */}
    <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
    </div>  
      <div className='container mx-auto px-10'>
      <Navbar></Navbar>
        <Hero/>
        <About/>
        <Education/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact></Contact>
        <Analytics/>
        <Footer/>
      </div>
    </div>
  )
}

export default App
