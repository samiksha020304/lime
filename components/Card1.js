import React from 'react'
import { motion } from 'framer-motion'
const Card1 = () => {
  return (
  
       <div className='bg-white w-full h-[60%]  '>

<motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="w-full h-full ml-[30%] mt-[-20%] object-cover">
   <a href='/Cheescake'><img src='cheesecake.gif' alt='background-img' className='h-[100%] w-fit ' /></a>
    <img src='noods.gif' alt='background-img' className='h-[100%] w-fit ' />
    

</motion.div>


    </div>
  )
}

export default Card1