import React from 'react'
import githubIcon from '../../assets/github.png'
import bitBucketIcon from '../../assets/bitbucket.png'
import navigateIcon from '../../assets/navigate.png'
import blogsphere from '../../assets/blogsphere.png'
import portfolio from '../../assets/portfolio.png'
import crud from '../../assets/crud.png'


import { ExternalLink } from 'lucide-react'



const Projects = () => {
    const projectImages = {
        'blogsphere.png':blogsphere,
        'portfolio.png':portfolio,
        'crud.png': crud
    };
    const projectData =[
        {
            id:1,
            name:'BlogSphere',
            description:'Full-stack blogging platform with JWT auth, image uploads, comments, and RESTful APIs.',
            image:'blogsphere.png',
            technologies: ['Spring Boot', 'React', 'Tailwind', 'REST API', 'MYSQL'],
            links:{
                live:'https://blog-sphere-ui.vercel.app/',
                github: '#',
                bitbucket: 'https://bitbucket.org/sam-junior-mavetera/blog-sphere-ui/src/main/'
            }
        },

        {
            id:2,
            name:'Employee CRUD Management System',
            description:'A full-stack CRUD application for managing employee records with a Spring Boot backend and a React frontend.',
            image:'crud.png',
            technologies: ['Spring Boot', 'React', 'Tailwind CSS', 'MYSQL', 'REST API'],
            links:{
                live:'https://employee-crud-management-system-ui.vercel.app/',
                github: 'github link',
                bitbucket: 'https://bitbucket.org/sam-junior-mavetera/employee-crud-management-system-ui/src/main/'
            }
        },

        {
            id:3,
            name:'Personal Portfolio Website',
            description:'A responsive personal portfolio website built with React to showcase my projects, skills, and professional profile.',
            image:'portfolio.png',
            technologies: ['React', 'Tailwind CSS', 'JavaScript'],
            links:{
                live:'https://sam-junior-mavetera-portifolio.vercel.app/',
                github: 'github link',
                bitbucket: 'https://bitbucket.org/sam-junior-mavetera/sam-junior-mavetera-portifolio/src/main/'
            }
        },

        {
            id:4,
            name:'Shipping and Logistics Management System (In progress)',
            description:    'A full-stack web application designed to manage end-to-end logistics operations including shipment requests, order tracking, route planning, fleet management, billing, and role-based access control. The system supports multiple user roles such as Admin, Operations Staff, and Customers, with secure authentication and authorization.',
            image:'',
            technologies: ['Spring Boot', 'React', 'Tailwind CSS', 'JavaScript', 'Spring Security (JWT)', 'PostgreSQL', 'REST APIs'],
            links:{
                live:'https://shipping-and-logistics-management-s.vercel.app/',
                github: '',
                bitbucket: 'https://bitbucket.org/sam-junior-mavetera/shipping-and-logistics-management-system-ui/src/main/'
            }
        }
    ]

  return (
    <div id='projects' className='py-24 px-6 max-w-6xl mx-auto'>
        <h2 className='text-3xl font-bold text-white'>Featured Projects</h2>
        <div className='mt-10 grid md:grid-cols-2 gap-10 items-start'>

            {projectData.map((project) => (
                <div key={project.id} className="rounded-xl bg-gradient-to-br from-cyan-500 to-purple-600 p-4 hover:scale-105 transition transform duration-300">
                    <img src={projectImages[project.image]} alt={project.name} className="rounded-lg mb-4" />
                    <h3 className="text-2xl font-semibold text-white">{project.name}</h3>
                    <p className="mt-2 text-gray-200">{project.description}</p>
                    
                    <div className="mt-4 flex gap-3 flex-wrap">
                        {project.technologies.map((tech, index) => (
                        <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">{tech}</span>

                        ))}
                       
                    </div>
                    
                    <div className="mt-4 flex gap-3">
                        <a href={project.links.live} target='_blank' className="px-4 py-2 rounded-lg border text-black hover:border-cyan-400 bg-slate-200 font-medium">
                        <img src={navigateIcon} alt="" className='h-7 w-7 inline mr-1'/>
                        {/* <ExternalLink size={20}/> */}
                            
                            Live Demo
                        </a>
                        {/* <a href={project.links.github} target='_blank' className="px-4 py-2 rounded-lg border border-white/20 text-white hover:border-cyan-400 cursor-not-allowed">
                        <img src={githubIcon} alt="" className='h-7 w-7 inline mr-1'/>
                        GitHub
                        </a> */}
                        <a href={project.links.bitbucket} target='_blank' className="px-4 py-2 rounded-lg border border-white/20 text-white hover:border-cyan-400">
                        <img src={bitBucketIcon} alt="" className='h-7 w-7 inline mr-1'/>
                        
                        BitBucket</a>

                    </div>
                </div>
            ))}
            
        </div>
    </div>
  )
}

export default Projects