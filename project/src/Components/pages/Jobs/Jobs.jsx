import React, {useState, useEffect } from 'react'
import Footer from '../../Footer'
import Navbar from '../../Navbar'
import {BsFolder} from "react-icons/bs"
// import motion
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'



export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(()=>{
    const fetchposts= async ()=>{
      const posts = await fetch('/posts/')
      const postsJson = await posts.json();
      
      if(posts.ok){
       setJobs(postsJson)
      }

    }
     fetchposts()
  },[])
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,delay:1.2}}>
      <Navbar></Navbar>
      <h1 className="text-3xl p-4 text-gray-800 gap-6">
      JOBS
 
      </h1>
      <div className="lg:pr-[5rem] p-5 lg:pl-[16rem] lg:py-20 flex flex-col gap-5 justify-center">
        
          {jobs && jobs.map((elm)=>(
            <div key={elm._id} className="grid grid-cols-3 gap-6 text-start w-4/5 p-6 bg-white border hover:shadow-lg ease-in duration-150 border-gray-200 rounded-lg shadow start">
              <div href="#" className="col-span-2 pr-20">
                <h5 class="mb-2  font-bold tracking-tight text-[#007456] uppercase ">{elm.companie}</h5>
                <p class="font-normal text-2xl text-gray-900 ">{elm.content}</p>
                <h5 class="mt-2 font-bold tracking-tight text-gray-600 ">{elm.title}</h5>
            </div>
            <div className='flex flex-col gap-2 items-end'>
              <button className="bg-[#007456] p-3
               text-white px-5  hover:text-gray-600 ease-in duration-100 hover:bg-transparent hover:border hover:border-[#007456]">
                <NavLink to={`/community/${elm.companie}`}>Apply</NavLink>
              </button>
              <p className="hover:bg-[#007456] p-3 rounded-xl
               hover:text-white px-5 text-gray-600 ease-in duration-100 bg-transparent border hover:border-[#007456] flex gap-2">
               <BsFolder size={23}></BsFolder>{elm.category}
              </p>
            </div>
            <div className="flex col-span-2 flex-row gap-4 p-5">
                
              </div>
            </div>
          ))}

      </div>
      <Footer></Footer>
    </motion.div>
  )
}
