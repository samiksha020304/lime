import React from 'react'
import { motion } from 'framer-motion'
const Card = () => {
  return (
  
       <div className='bg-white w-full h-[60%]  '>

<motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="w-full h-full object-cover">
    <img src='pasta.gif' alt='background-img' className='h-[100%] w-fit ' />
    <img src='tikki.gif' alt='background-img' className='h-[100%] w-fit ' />
    <img src='wrap.gif' alt='background-img' className='h-[100%] w-fit ' />
   
</motion.div>


    </div>
  )
}

export default Card