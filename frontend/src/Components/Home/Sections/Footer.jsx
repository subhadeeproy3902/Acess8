import React from 'react'

const Footer = () => {
  return (
    <>
      <section id="footer" className='flex w-full justify-center items-center px-4 pb-4 absolute w-fu;;'>
        <footer className="w-full rounded-lg shadow m-4">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-md font-semibold text-white sm:text-center">© 2023 <a href="https://acess8.vercel.app" className="hover:underline">Acess8</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-400 sm:mt-0">
              <li>
                <p className="me-4 md:me-6">About</p>
              </li>
              <li>
                <p className="me-4 md:me-6">Privacy Policy</p>
              </li>
              <li>
                <p className="me-4 md:me-6">Licensing</p>
              </li>
              <li>
                <p className="me-4 md:me-6">Contact</p>
              </li>
            </ul>
          </div>
        </footer>
      </section>
    </>
  )
}

export default Footer