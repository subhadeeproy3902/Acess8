import React from 'react'
import './Preloader.css'

const Preloader = () => {
  return (
    <div className='flex min-h-screen justify-center items-center bg-gradient-to-tl from-black to-blue-950'>
      <div className="loader"></div>
    </div>
  )
}

export default Preloader