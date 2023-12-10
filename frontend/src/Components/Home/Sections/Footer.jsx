import React from 'react'

const Footer = () => {
  return (
    <>
      <section id="footer" className='flex w-full justify-center items-center px-4 pb-4 absolute w-fu;;'>
        <footer className="w-full rounded-lg shadow m-4">
          <div className="w-full flex items-center justify-center md:justify-between text-center">
            <span className="text-md font-semibold text-white sm:text-center">© 2023 <a href="https://acess8.vercel.app" className="hover:underline">Acess8</a>. All Rights Reserved.
            </span>

          </div>
        </footer>
      </section>
    </>
  )
}

export default Footer