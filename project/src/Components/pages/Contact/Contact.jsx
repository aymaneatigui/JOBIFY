import React from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import {motion} from "framer-motion"

export default function Contact() {
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,delay:1.2}}>
      <Navbar/>
      <section class="bg-white ">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-[#007456]">Contact Us</h2>
      <p class="mb-8 lg:mb-16 font-light text-center text-black  sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <div className="contact__container bd-grid flex justify-center" >

      <div className="contact__button">
        <a href="mailto:" className="button" style={{ backgroundColor: '#069C54', color: '#FFFFFF', padding: '.75rem 1.5rem' }}>Contact us now</a>
      </div>
    </div>
  </div>
</section>
      <Footer/>
    </motion.div>
  )
}
