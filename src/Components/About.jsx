import { ABOUT } from "../constants"
import { motion } from "framer-motion"

const About = () => {
  return (
    <div className="container mx-auto px-4 py-20 text-white" id="about">
        <motion.h2
        initial={{opacity:0, y:-20}}
        whileInView={{opacity:1, y:0}}
        transition={{duration:0.5}}
        viewport={{once:true}}
        className="mb-12 text-center text-4xl font-semibold">
            About
        </motion.h2>
        <motion.h3
        initial={{opacity:0,x:-100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        className="mb-8 text-4xl uppercase lg:text-6xl">
            {ABOUT.text1}
        </motion.h3>
        <motion.p 
        initial={{opacity:0, x:100}}
        whileInView={{opacity:1,x:0}}
        transition={{duration:1}}
        viewport={{once:true}}
        className="max-w-4xl text-lg leading-relaxed">
            {ABOUT.text2}
        </motion.p>
    </div>
  )
}

export default About