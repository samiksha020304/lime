
import NavBar from '@/components/NavBar'
import React from 'react'
import { Inter } from 'next/font/google'
import Card from '@/components/Card'
import Card1 from '@/components/Card1'
import Card2 from '@/components/Card2'
import Card3 from '@/components/Card3'

const inter = Inter({ subsets: ['latin'] })
export default function recipe() {
  return (<div>
    <div className='text-center'>
        <NavBar />
      <div className='mt-[10%] pl-40'> 
         <Card/>
      </div>
    </div>
    <div className='mt-[-40%]'>
        <Card1/>
    </div>
    <div className='ml-[30%] mt-[-43%]'>
        <Card2/>
    </div>
    <div className='ml-[60%] mt-[-32%]'>
        <Card3/>
    </div>
    </div>
  )
}
