import React from 'react'

const CTA = () => {
  return (
    <section id='cta' className='bg-BrightRed'>
      {/* container */}
      <div className="container flex flex-col items-center justify-between px-6 py-24 mx-auto space-y-12 md:flex-row md:space-y-0">
        {/* heading */}
        <h2 className="text-5xl font-bold leading-tight text-center text-white md:text-4xl md:max-w-xl md:text-left">
          Simplify how your team works today
        </h2>
        {/* button */}
        <div>
        <a href="#" className="p-3 px-6 pt-2 text-BrightRed shadow-2xl bg-white rounded-full baseline hover:bg-gray-300 transition-all duration-500 ease-in-out">Get Started</a>
        </div>
      </div>
    </section>
  )
}

export default CTA