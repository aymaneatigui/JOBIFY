import React from 'react'
import { NavLink } from 'react-router-dom'
import img from "../../../../images/img-hero.png"

export default function Hero() {
  return (
    <section className='max-w-[1640px] mx-auto p-4 bg-white'>
      <div className="flex max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:flex-row">
      <div className="mr-auto grid grid-row-3 gap-5 place-self-start lg:col-span-7">
      <div className='inline-grid items-start '>
      <h1 className='max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-[1.2] md:text-5xl xl:text-6xl text-start pt-5 pb-5'>
        Welcome to <span className='text-[#007456]'> JOBIFY</span>
         
         </h1>
         <p class="max-w-2xl mb-6 font-light pb-5 text-start text-gray-500 lg:mb-8 md:text-lg lg:text-2xl dark:text-gray-400">
            The best Jobs and Internships broker in the market at your service, Use our service as step forward to succes and breight future.
            </p>
         <div className="grid grid-cols-2 ">
         <a href="/" class="inline-flex items-center justify-start px-5 py-3 w-[10rem]  text-base font-medium text-center  text-white rounded-lg hover:border hover:bg-white hover:text-black bg-[#007456]">
              <NavLink to={"/signup"} >
              Get started

              </NavLink>
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
         </div>
      </div>
      </div>
      <div>
        <img src={img} alt="" className='relative flex hello-animation w-full lg:mr-[-31rem] z-0' />
      </div>
      </div>
    </section>
  )
}
