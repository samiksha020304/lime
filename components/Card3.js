import React from 'react'
import { motion } from 'framer-motion'
const Card3 = () => {
  return (
  
       <div className='bg-white w-full h-[60%]  '>

<motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="w-full h-full ml-[30%] mt-[-20%] object-cover">
    <img src='coffee.gif' alt='background-img' className='h-[100%] w-[50%] ' />
    <img src='cookie.gif' alt='background-img' className='h-[100%] w-[50%] ' />
    <img src='rice.gif' alt='background-img' className='h-[100%] w-[50%] ' />
</motion.div>


    </div>
  )
}

export default Card3