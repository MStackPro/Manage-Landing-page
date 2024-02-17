import React from 'react'

import Navbar from './navbar/Navbar';
import Hero from './hero/Hero';
import About from './about/About';
import Testimonial from './testimonial/Testimonial';
import Footer from './footer/Footer';
import CTA from './cta/CTA';

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <About/>
      <Testimonial/>
      <CTA/>
      <Footer/>
    </main>
  )
}

export default App