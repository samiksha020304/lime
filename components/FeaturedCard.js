import React from 'react'
import { motion } from 'framer-motion'

const FeaturedCard = () => {
    return (
        <div className=' w-full h-[60%] mx-auto relative z-10'>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full h-full object-cover">
                <img src='5tOH.gif' alt='background-img' className='h-[100%]  w-fit mx-auto pt-4' />
            </motion.div>
            {/*<motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
            // className="w-full h-full object-cover"
            >
                {/*<h1 className='text-4xl m-10'>Feed</h1>
    </motion.div>*/} 


        </div>
    )
}

export default FeaturedCard