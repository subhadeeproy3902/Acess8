import React from 'react'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Products from './Sections/Products'
import CTA from './Sections/CTA'
import Footer from './Sections/Footer'

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Products />
      <CTA />
      <Footer />
    </>
  )
}

export default Home