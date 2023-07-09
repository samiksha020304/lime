
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import FeaturedCard from '@/components/FeaturedCard'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <img src='bgbg.png' className='absolute h-screen w-screen opacity-50' />
    <div className=' max-w-7xl  mx-auto'>
      <NavBar/> 
     <FeaturedCard/>
     
    </div>
    </div>
  )
}
