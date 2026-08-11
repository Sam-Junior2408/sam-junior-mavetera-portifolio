import blogsphere from '../assets/blogsphere.png'
import portfolio from '../assets/portfolio.png'
import crud from '../assets/crud.png'

/**
 * `image: null`      -> the card renders a gradient monogram placeholder.
 * `links.live: null` -> the Live Demo button renders disabled ("not deployed yet").
 */
export const projects = [
  {
    id: 'hire-smart',
    name: 'HireSmart',
    tagline: 'AI-powered recruitment platform',
    status: 'In progress',
    featured: true,
    description:
      'A microservices recruitment platform covering the full hiring lifecycle - job posting, candidate matching, coding assessments, live interviews, and offer management. Eight Spring Boot services sit behind an API gateway, communicate over Kafka, and are consumed by a React web app and a React Native mobile app.',
    highlights: [
      '8 independently deployed Spring Boot services behind a Spring Cloud Gateway',
      'Kafka events decouple assessments, recruitment, and notifications',
      'MinIO (S3-compatible) object storage for CVs and candidate documents',
      'Role-based access for admins, recruiters, interviewers, and candidates',
    ],
    image: null,
    technologies: [
      'Spring Boot',
      'Microservices',
      'Spring Cloud Gateway',
      'Apache Kafka',
      'PostgreSQL',
      'MinIO',
      'Spring Security (JWT)',
      'React',
      'Tailwind CSS',
      'React Native',
      'Docker',
      'Nginx',
      'AWS EC2',
    ],
    links: {
      live: null,
      github: null,
      bitbucket: 'https://bitbucket.org/sam-junior-mavetera/hire-smart-webapp/src/main/',
    },
  },
  {
    id: 'shipping-logistics',
    name: 'Shipping & Logistics Management System',
    tagline: 'End-to-end logistics operations',
    status: 'In progress',
    featured: true,
    description:
      'A full-stack platform for end-to-end logistics operations: shipment requests, order tracking, route planning, fleet management, billing, and role-based access control for Admin, Operations Staff, and Customer roles.',
    highlights: [
      'Shipment lifecycle from request through delivery confirmation',
      'Route planning and fleet assignment with live order tracking',
      'JWT-secured, role-scoped dashboards per user type',
    ],
    image: null,
    technologies: [
      'Spring Boot',
      'React',
      'Tailwind CSS',
      'JavaScript',
      'Spring Security (JWT)',
      'PostgreSQL',
      'REST APIs',
    ],
    links: {
      live: 'https://shipping-and-logistics-management-s.vercel.app/',
      github: null,
      bitbucket:
        'https://bitbucket.org/sam-junior-mavetera/shipping-and-logistics-management-system-ui/src/main/',
    },
  },
  {
    id: 'blogsphere',
    name: 'BlogSphere',
    tagline: 'Full-stack blogging platform',
    status: 'Live',
    featured: false,
    description:
      'A blogging platform with JWT authentication, image uploads, nested comments, and a documented REST API backing a React front end.',
    highlights: [
      'JWT auth with protected authoring routes',
      'Image upload pipeline and comment threads',
    ],
    image: blogsphere,
    technologies: ['Spring Boot', 'React', 'Tailwind CSS', 'MySQL', 'REST API'],
    links: {
      live: 'https://blog-sphere-ui.vercel.app/',
      github: null,
      bitbucket: 'https://bitbucket.org/sam-junior-mavetera/blog-sphere-ui/src/main/',
    },
  },
  {
    id: 'employee-crud',
    name: 'Employee CRUD Management System',
    tagline: 'Employee records, end to end',
    status: 'Live',
    featured: false,
    description:
      'A full-stack CRUD application for managing employee records, pairing a Spring Boot REST backend with a React front end.',
    highlights: [
      'Complete create / read / update / delete flows with validation',
      'Layered Spring Boot backend over MySQL',
    ],
    image: crud,
    technologies: ['Spring Boot', 'React', 'Tailwind CSS', 'MySQL', 'REST API'],
    links: {
      live: 'https://employee-crud-management-system-ui.vercel.app/',
      github: null,
      bitbucket:
        'https://bitbucket.org/sam-junior-mavetera/employee-crud-management-system-ui/src/main/',
    },
  },
  {
    id: 'portfolio',
    name: 'Personal Portfolio Website',
    tagline: 'This site',
    status: 'Live',
    featured: false,
    description:
      'A responsive personal portfolio built with React and Tailwind, with a token-driven light/dark theme that persists across visits.',
    highlights: ['CSS-variable design tokens powering light and dark themes'],
    image: portfolio,
    technologies: ['React', 'Tailwind CSS', 'JavaScript', 'Vite'],
    links: {
      live: 'https://sam-junior-mavetera-portifolio.vercel.app/',
      github: null,
      bitbucket:
        'https://bitbucket.org/sam-junior-mavetera/sam-junior-mavetera-portifolio/src/main/',
    },
  },
]
