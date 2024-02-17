import React from 'react'
import { useState } from 'react'
import NavbarLogo from '../assets/logo.svg'
import { FiMenu } from "react-icons/fi";
import '../../src/index.css'
import { FiX } from "react-icons/fi";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);


  return (
    <nav className='fixed left-0 top-0 grid w-screen h-20 place-items-center bg-white z-50 shadow-sm'>
        <div className='relative container mx-auto px-5'>
          {/* flex container */}
          <div className="flex items-center justify-between relative h-full">
            {/* Nav logo */}
            <div className="pt-2">
              <img src={NavbarLogo} alt="nav logo" />
            </div>

            {/* nav menu */}
            <div className='hidden md:flex space-x-6'>
              <a href="#" className='hover:text-DarkGrayishBlue transition-all duration-500 ease-in-out' >Pricing</a>
              <a href="#" className='hover:text-DarkGrayishBlue transition-all duration-500 ease-in-out' >Product</a>
              <a href="#about" className='hover:text-DarkGrayishBlue transition-all duration-500 ease-in-out' >About Us</a>
              <a href="#" className='hover:text-DarkGrayishBlue transition-all duration-500 ease-in-out' >Careers</a>
              <a href="#" className='hover:text-DarkGrayishBlue transition-all duration-500 ease-in-out' >Community</a>
            </div>

            {/* button */}
            <a href="#" className="hidden md:block p-3 px-6 pt-2 text-white bg-BrightRed rounded-full baseline hover:bg-BrightRedLight transition-all duration-500 ease-in-out">Get Started</a>

            <div className='md:hidden'>
              {/* mobile menu */}
              <div className={`menu absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md transition-all duration-500 ease-in-out ${openNav ? 'flex' : 'hidden'}`}>
                <a href="#" className='hover:text-DarkGrayishBlue transition-all duration-500 ease-in-out' >Pricing</a>
                <a href="#" className='hover:text-DarkGrayishBlue transition-all duration-500 ease-in-out' >Product</a>
                <a href="#about" className='hover:text-DarkGrayishBlue transition-all duration-500 ease-in-out' >About Us</a>
                <a href="#" className='hover:text-DarkGrayishBlue transition-all duration-500 ease-in-out' >Careers</a>
                <a href="#" className='hover:text-DarkGrayishBlue transition-all duration-500 ease-in-out' >Community</a>
              </div>
            </div>

            {/* hamburger icon */}
            <button onClick={() =>setOpenNav(!openNav)} className='md:hidden block text-3xl cursor-pointer transition-all duration-500 ease-in-out'>
              {
                openNav ? <FiX/> : <FiMenu/>
              }

            </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar