import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // const navItems = 
  return (
    <div className="fixed top-8 inset-x-0 z-50 flex justify-center">
      <div className='backdrop-blur-lg bg-white/10 border border-white/10 rounded-full px-8 py-3 flex items-center justify-center gap-6'>
        <div>
            <span className='mr-5 text-cyan-300'>Sam Junior</span>
            {
              [
                ['About' , '#about'],
                ['Skills' , '#skills'],
                ['Projects' , '#projects'],
                ['Testimonials' , '#testimonials'],
                ['Contact' , '#contact']
              ].map(([title, url]) => (
                <a key={title} href={url} className='hover:text-cyan-400 transition ml-4 font-bold'>{title}</a>
              ))
            }
        </div>

      </div>
    </div>
    
  )
}

export default Navbar

 {/* {[
        ['About' , '#about'],
        ['Skills' , '#skills'],
        ['Projects' , '#projects'],
        ['Testimonials' , '#testimonials'],
        ['Contact' , '#contact']
    ].map(([title, href]) => (
              <Link key={title} to={href}>{title}</Link>
            ))} */}