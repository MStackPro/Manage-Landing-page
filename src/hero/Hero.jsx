import React from 'react'
import HeroImage from '../assets/illustration-intro.svg'

const hero = () => {
  return (
    <section id='hero'>
      <div className="container flex flex-col-reverse md:flex-row items-center px-6 mx-auto mt-40 space-y-0 md:space-y-0 h-[calc(100 -10rem)]">
        {/* left side */}
        <div className='flex flex-col mb-32 space-y-12 md:w-1/2'>

          <h1 className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left">Bring everyone together to build better products.</h1>
          <p className='max-w-sm text-DarkGrayishBlue text-center md:text-start'>
            Manage makes it simple for software teams to plan day-to-day tasks while keeping the larger team goals in view.
          </p>

          {/* button */}
          <div className='flex justify-center md:justify-start'>
          <a href="#" className="p-3 px-6 pt-2 text-white bg-BrightRed rounded-full baseline hover:bg-BrightRedLight transition-all duration-500 ease-in-out">Get Started</a>

          </div>
        </div>

        {/* right side */}
        <div className='md:w-1/2'>
          <img src={HeroImage} alt="hero image" />
        </div>
      </div>
    </section>
  )
}

export default hero