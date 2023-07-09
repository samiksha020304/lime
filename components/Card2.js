import React from 'react'
import { motion } from 'framer-motion'
const Card2 = () => {
  return (
  
       <div className='bg-white w-full h-[60%]  '>

<motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="w-full h-full ml-[30%] mt-[-20%] object-cover">
    <img src='juice.gif' alt='background-img' className='h-[10%] w-[30%] ' />
    <img src='pancake.gif' alt='background-img' className='h-fit w-[30%] ' />
    <img src='sushi.gif' alt='background-img' className='h-[100%] w-[30%] ' />
</motion.div>


    </div>
  )
}

export default Card2