import React from 'react'
import githubIcon from '../../assets/github.png'
import bitBucketIcon from '../../assets/bitbucket.png'
import navigateIcon from '../../assets/navigate.png'



const Projects = () => {
  return (
    <div id='projects' className='py-24 px-6 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-white'>Featured Projects</h2>
        <div className='mt-10 grid md:grid-cols-2 gap-10 items-start'>
            <div className="rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-4 hover:scale-105 transition transform duration-300">
                <img src="blog_project.png" alt="BlogSphere" className="rounded-lg mb-4" />
                <h3 className="text-2xl font-semibold text-white">BlogSphere</h3>
                <p className="mt-2 text-gray-200">Full-stack blogging platform with JWT auth, image uploads, comments, and RESTful APIs.</p>
                <div className="mt-4 flex gap-3 flex-wrap">
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Spring Boot</span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">React</span>
                    <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">Tailwind</span>
                </div>
                <div className="mt-4 flex gap-3">
                    <a href="#" className="px-4 py-2 rounded-lg bg-white text-black font-medium">
                    <img src={navigateIcon} alt="" className='h-7 w-7 inline mr-1'/>
                        
                        Live Demo</a>
                    <a href="#" className="px-4 py-2 rounded-lg border border-white/20 text-white hover:border-cyan-400">
                    <img src={githubIcon} alt="" className='h-7 w-7 inline mr-1'/>
                    GitHub
                    </a>
                    <a href="#" className="px-4 py-2 rounded-lg border border-white/20 text-white hover:border-cyan-400">
                    <img src={bitBucketIcon} alt="" className='h-7 w-7 inline mr-1'/>
                    
                    BitBucket</a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects