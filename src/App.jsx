import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Marquee from './components/layout/Marquee'
import Navbar from './components/layout/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
  
      <div className='bg-[#0B0F19] text-gray-200 min-h-screen'>
        {/* <h1 className='bg-red-400 font-bold flex justify-center'>Sam Junior`s Portifolio</h1> */}
        <Marquee/>
        <Navbar/>
      </div>
  )
}

export default App
