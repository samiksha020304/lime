
import { Inter } from 'next/font/google'
import NavBar from '@/components/NavBar'
import FeaturedCard from '@/components/FeaturedCard'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (<div>
      
          <div className=' max-w-7xl  mx-auto'>
              <NavBar />
          </div>
          <div className='bg-white'>
              <div className='grid lg:grid-cols-2 bg-pink-50 mt-[10%] pt-[-2%] h-[50%] '>
                  <a href='#'><img src='r1.png' className='h-[80%] w-[80%] ml-[5%] rounded-lg' /></a>
                  <a href='#'><img src='r2.png' className='h-[80%] w-[80%] rounded-lg  ml-[5%] ' /></a>
              </div>
          </div>
          <div className='bg-white'>
              <div className='grid lg:grid-cols-2 bg-pink-50 mt-[2%] pt-[-5%] h-[50%] '>
                  <a href='#'><img src='r3.png' className='h-[80%] w-[80%] ml-[5%] rounded-lg' /></a>
                  <a href='#'><img src='r4.png' className='h-[80%] w-[80%] rounded-lg  ml-[5%] ' /></a>
              </div>
          </div>
          <div className='bg-white'>
              <div className='grid lg:grid-cols-1 bg-pink-50 mt-[2%] pt-[-5%] h-[50%] '>
                  <a href='#'><img src='r5.png' className='h-[80%] w-[50%] ml-[30%] mx-auto rounded-lg' /></a>
              </div>
          </div>
      </div>
  )
}