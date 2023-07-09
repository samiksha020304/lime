import React from 'react'

const NavBar = () => {
  return (<div className=' relative z-10'>
    <header className=' max-w-7xl mx-auto flex justify-between p-4 bg-lime-200 '>
        <div className='mx-auto  p-2  '>
            <img src='/lime.png' alt='logo' className='object-cover  ml-[-50%] h-fit w-[40%] '/>
            <div className='inline-flex items-center  '>
            <h1 className='text-4xl font-kablammo  pt-5 mt-[-15%] mr-14'>Mommy's Recipes</h1>
            
            </div>
        </div>
    </header>
    
    <div className='bg-pink-5 text-black '>
        <div className=' ml-[3%] space-x-8 font-bold inline-flex md:inline-flex pt-[1%] mt-35 md:text-sm text-black text-sm md:space-x-10'> {/**link container */}
         <a href='/'><h1 className='cursor-pointer hover:text-red-400'> Home </h1></a>
         <a href='/'><h1 className='cursor-pointer hover:text-red-400'> Categories </h1></a>
         <a href ='/Recipe'><h1 className='cursor-pointer hover:text-red-400'> hungry? </h1></a>
         <a href='/BSR'><h1 className='cursor-pointer hover:text-red-400'> Bite size recipes </h1></a>
          <a href='/admin'><h1 className='cursor-pointer hover:text-red-400'> Discover </h1></a>
        </div>
    </div>
    </div>
  )
}

export default NavBar