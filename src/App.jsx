import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Marquee from './components/layout/Marquee'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Footer from './components/layout/Footer'
import Contact from './components/sections/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className='bg-[#0B0F19] text-gray-200 min-h-screen'>
        {/* <h1 className='bg-red-400 font-bold flex justify-center'>Sam Junior`s Portifolio</h1> */}
        <Marquee/>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
  )
}

export default App
