
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import React from 'react'



const inter = Inter({ subsets: ['latin'] })

export default function Cheescake() {
  return (<div>
      
          <div className=' max-w-7xl  mx-auto'>
              <NavBar />
          </div>
           <div>
            
           </div>
      </div>
  )
}