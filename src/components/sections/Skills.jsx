import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='py-24 px-6 bg-white/5'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold text-white'>Skills</h2>
            <div className='grid md:grid-cols-3 gap-6 mt-10'>
                <div className="p-6 rounded-xl bg-white/10 hover:scale-105 transition transform duration-300">
                    <h3 className="font-semibold text-cyan-400">Backend</h3>
                    <p className="mt-3 text-gray-400">Spring Boot, Spring Security, JPA, REST APIs</p>
                </div>
                <div className="p-6 rounded-xl bg-white/10 hover:scale-105 transition transform duration-300">
                    <h3 className="font-semibold text-cyan-400">Frontend</h3>
                    <p className="mt-3 text-gray-400">React, Vite, Tailwind CSS</p>
                </div>
                <div className="p-6 rounded-xl bg-white/10 hover:scale-105 transition transform duration-300">
                    <h3 className="font-semibold text-cyan-400">DevOps & Tools</h3>
                    <p className="mt-3 text-gray-400">Docker, Postman, Git, Render, Vercel, AWS</p>
                </div>

            </div>
            
        </div>

    </div>
  )
}

export default Skills