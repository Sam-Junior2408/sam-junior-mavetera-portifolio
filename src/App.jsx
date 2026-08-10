import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import Marquee from './components/layout/Marquee'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import Footer from './components/layout/Footer'
import BackToTop from './components/ui/BackToTop'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-bg text-ink-soft">
        <Marquee />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </ThemeProvider>
  )
}

export default App
