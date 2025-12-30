import React from 'react'
import { motion } from 'framer-motion'

const Marquee = () => {
  return (

    <div className='fixed top-0 w-full bg-black/20 py-1 z-50'>
        <motion.span className='inline-block font-medium text-white whitespace-nowrap'
        
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
        >
            Engineer-first. Product-minded. Production-ready.
        </motion.span>
    </div>
  )
}

export default Marquee