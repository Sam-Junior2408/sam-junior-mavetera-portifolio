import React from 'react'
import githubIcon from '../../assets/github.png'
import bitBucketIcon from '../../assets/bitbucket.png'
import navigateIcon from '../../assets/navigate.png'
import phone from '../../assets/phone-call.png'
import mail from '../../assets/mail.png'
import sendmail from '../../assets/sendmail.png'
import whatsapp from '../../assets/whatsapp.png'
import linkedin from '../../assets/linkedin.png'


const Contact = () => {

  return (
    <div id='contact' className='py-24 px-6 bg-white/5'>
        <div className='max-w-6xl mx-auto'>
            <h2 className='text-3xl font-bold text-white text-center'>
                Let’s Connect
            </h2>
            <p className='mt-4 text-gray-400 text-center'>Open to opportunities, collaborations, and meaningful conversations.</p>
            <div className='mt-12 grid md:grid-cols-2 gap-12'>
                {/* contact details */}
                <div className='space-y-6'>
                    <div className='p-6 bg-white/10 rounded-xl'>
                        <h3 className="text-xl font-semibold text-cyan-400">Contact Details</h3>
                            <ul className="mt-4 space-y-3 text-gray-300">
                            <li>
                                 <img src={phone} alt="" className='h-7 w-7 inline mr-1'/>
                                                    
                                <a href="tel:+263788166214" target='_blank' className="hover:text-cyan-400">+263 788 166 214</a></li>
                            <li>
                                 <img src={whatsapp} alt="" className='h-7 w-7 inline mr-1'/>

                                <a href="https://wa.me/263788166214" target="_blank" className="hover:text-cyan-400">+263 788 166 214</a></li>
                            <li>
                                 <img src={mail} alt="" className='h-7 w-7 inline mr-1'/>

                                <a href="mailto:ghsam2408@gmail.com" target='_blank' className="hover:text-cyan-400">ghsam2408@gmail.com</a></li>
                        </ul>
                    </div>

                    <div className="p-6 bg-white/10 rounded-xl">
                        <h3 className="text-xl font-semibold text-cyan-400">Find Me Online</h3>
                        <div className="mt-4 flex gap-4 flex-wrap">
                            <a href="https://github.com/ghsam-2408" target='_blank' className="px-4 py-2 rounded-lg border border-white/20 hover:border-cyan-400">
                                 <img src={githubIcon} alt="" className='h-7 w-7 inline mr-1'/>
                                GitHub
                            </a>
                            <a href="https://bitbucket.org/sam-junior-mavetera/workspace/overview/" target='_blank' className="px-4 py-2 rounded-lg border border-white/20 hover:border-cyan-400">
                                 <img src={bitBucketIcon} alt="" className='h-7 w-7 inline mr-1'/>
                                Bitbucket
                            </a>
                            <a href="https://www.linkedin.com/in/sam-junior-mavetera/" target='_blank' className="px-4 py-2 rounded-lg border border-white/20 hover:border-cyan-400">
                                 <img src={linkedin} alt="" className='h-7 w-7 inline mr-1'/>
                                LinkedIn
                            </a>
                        </div>
                    </div>

                </div>

                {/* contact form  */}
                <div className="p-6 bg-white/10 rounded-xl">
                    <h3 className="text-xl font-semibold text-cyan-400">Send a Message</h3>
                    <form className="mt-6 space-y-4">
                        <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-cyan-400" />
                        <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-cyan-400" />
                        <textarea rows="4" placeholder="Your Message" className="w-full px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:outline-none focus:border-cyan-400"></textarea>
                        <button type="submit" className="w-full px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold">
                            <img src={sendmail} alt="" className='h-7 w-7 inline mr-1'/>
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>

    </div>
  )
}

export default Contact