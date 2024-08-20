import Footer from '../../Footer'
import Navbar from '../../Navbar'
import HeadlineCards from './Components/HeadlineCards'
import Hero from './Components/Hero'
import {motion} from "framer-motion"
import Intro from './Components/Intro'

export default function Home() {
 
  return (
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0,delay:1.2}}

    >
        <Navbar></Navbar>

        <Hero></Hero>
        <Intro></Intro>
        <HeadlineCards></HeadlineCards>
        <Footer></Footer>
    </motion.div>
  )
}
