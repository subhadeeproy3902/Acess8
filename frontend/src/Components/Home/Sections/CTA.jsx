import React from 'react'

const CTA = () => {
  return (
    <>
      <section id="CTA" className="bg-gradient-to-br flex justify-center items-center min-h-screen from-black to-slate-800 antialiased">
        <div className='flex justify-center items-center'>
          <div className="flex flex-col justify-center items-center">
            <img
              src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
              alt="Logo"
              className="mb-8 h-40"
            />
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-200 mb-4">
              This page is under development
            </h1>
            <p className="text-center text-gray-300 text-lg md:text-xl lg:text-2xl mb-8">
              I am working hard to add a CTA section :&#41; . Stay tuned!
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA