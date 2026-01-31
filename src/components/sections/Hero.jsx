import React from 'react'
import {Link} from 'react-router-dom'
import profile from '../../assets/profile.jpeg'
import { Download } from 'lucide-react'

const Hero = () => {
  return (
    <div className='min-h-screen flex items-center justify-center px-6'>
        <div className='grid md:grid-cols-2 gap-12 items-center max-w-6xl w-full'>
            <div>
                <h1 className='text-5xl font-extrabold text-white leading-tight'>Sam Junior Mavetera</h1>
                <p className='mt-4 text-xl text-cyan-400'>Full Stack Software Engineer</p>
                <p className='mt-6 text-gray-400 max-w-xl'>I build secure, scalable, production-ready web applications using Spring Boot and React.</p>
                <div className='mt-8 flex flex-wrap gap-4'>
                    <a href='#projects' className='px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-600 transition'>View Projects</a>

                    <a href='#contact' className='px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-black transition'>Contact Me</a>

                    <a target='_blank' href='https://drive.google.com/file/d/1F2A7g7-IKRI9yDr3BMp9ogj7zuk_Nwh-/view?usp=drive_link' className='px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-600 transition flex items-center gap-2'>
                        <Download size={20}/>
                        Resume
                    </a>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='w-70 h-70 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 p-1'>
                    <div className='w-full h-full rounded-2xl bg-[#0B0F19] flex items-center justify-center'>
                        <img src={profile} alt="" className='w-full h-full object-cover rounded-2xl'/>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Hero