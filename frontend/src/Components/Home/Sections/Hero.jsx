import React from 'react'
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <>
      <header>
        <nav className="fixed pt-2 z-20 w-full bg-transparent backdrop-blur-2xl navbar shadow-2xl shadow-gray-600/5 border-b border-gray-100 dark:border-gray-800 peer-checked:navbar-active dark:shadow-none">
          <div className="xl:container m-auto px-6 md:px-12 lg:px-6">
            <div className="flex flex-wrap items-center justify-between gap-6 pb-2 md:gap-0">
              <div className="w-full items-center flex justify-between lg:w-auto">
                <Link
                  to="/"
                  className="flex items-center"
                >
                  <img
                    src="/assets/acess_logo.webp"
                    className="h-12 pb-2"
                    loading="lazy"
                    alt="Flowbite Logo"
                  />
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                    cess8
                  </span>
                </Link>
                <Link to="/signup" className="relative lg:hidden flex h-9 items-center justify-center px-3 before:absolute before:inset-0 before:rounded-full before:bg-sky-600 dark:before:bg-sky-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                  <span className="relative text-sm font-semibold text-white dark:text-gray-900">Get Started</span>
                </Link>
              </div>
              <div className="navmenu hidden w-full flex-wrap justify-end items-center mb-16 space-y-8 p-6 border border-gray-100 rounded-3xl shadow-2xl shadow-gray-300/20 bg-white dark:bg-gray-800 lg:space-y-0 lg:p-0 lg:m-0 lg:flex md:flex-nowrap lg:bg-transparent lg:w-7/12 lg:shadow-none dark:shadow-none dark:border-gray-700 lg:border-0">

                <div className="w-full space-y-2 border-primary/10 dark:border-gray-700 flex flex-col -ml-1 sm:flex-row lg:space-y-0 md:w-max lg:border-l">
                  <Link to="/login" className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full focus:before:bg-sky-600/10 dark:focus:before:bg-sky-400/10 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                    <span className="relative text-white text-sm font-semibold text-primary dark:text-primaryLight">Login</span>
                  </Link>
                  <Link to="/signup" className="relative flex h-9 ml-auto items-center justify-center sm:px-6 before:absolute before:inset-0 before:rounded-full before:bg-sky-600 dark:before:bg-sky-400 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95">
                    <span className="relative text-sm font-semibold text-white dark:text-gray-900">Sign Up</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="bg-gradient-to-bl from-slate-800 to-black overflow-hidden relative pt-28 md:pt-40 pb-20 lg:pt-44">
        <div className="relative xl:container m-auto px-6 md:px-12 lg:px-6">
          <h1 className="lg:pr-20 leading-[3rem] sm:mx-auto sm:w-10/12 md:w-2/3 font-black text-blue-900 text-4xl text-center sm:text-5xl md:text-6xl lg:w-auto lg:text-left xl:text-7xl dark:text-white">Your Gateway to Seamless Accessibility: <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300"> Acess8</span></h1>
          <div className="lg:flex">
            <div className="relative mt-8 md:mt-16 space-y-8 sm:w-10/12 md:w-2/3 lg:ml-0 sm:mx-auto text-center lg:text-left lg:mr-auto lg:w-7/12">
              <p className="sm:text-lg text-gray-700 dark:text-gray-300 lg:w-11/12">
                A platform designed to streamline your online experience. Whether you're shortening URLs, generating QR codes, or saving important notes, we've got you covered.
              </p>
              <span className="block font-semibold text-gray-500 dark:text-gray-400">The best companion for <span className="text-white">Seamless Access Anytime, Anywhere, Anyhow</span>.</span>
              <div className="grid grid-cols-3 space-x-4 md:space-x-6 md:flex md:justify-center lg:justify-start">
                <button className="p-4 border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-full duration-300 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-600/20 dark:hover:border-cyan-300/30" disabled>
                  <div className="flex justify-center space-x-4">
                    <img className="w-6 h-6" src="/assets/mynly.webp" alt="mynly" loading="lazy" width="128" height="128" />
                    <span className="hidden font-medium md:block dark:text-white">Mynly</span>
                  </div>
                </button>
                <button aria-label="add to chat" disabled className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-pink-400 hover:shadow-lg hover:shadow-pink-600/20 dark:hover:border-pink-300/30">
                  <div className="flex justify-center space-x-4">
                    <img className="w-6 h-6" src="/assets/qr7.webp" alt="chat logo" loading="lazy" width="128" height="128" />
                    <span className="hidden font-medium md:block dark:text-white" >QR7</span>
                  </div>
                </button>
                <button aria-label="add to zoom" disabled className="p-4 border border-gray-200 dark:bg-gray-800  dark:border-gray-700 rounded-full duration-300 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-600/20 dark:hover:border-yellow-300/30">
                  <div className="flex justify-center space-x-4">
                    <img className="w-6 h-6" src="/assets/aero.webp" alt="chat logo" loading="lazy" width="128" height="128" />
                    <span className="hidden font-medium md:block dark:text-white" >AeroNotes</span>
                  </div>
                </button>
              </div>

              <div className="dark:text-gray-300 flex gap-1">
                🔥🌟
                <span>Integrations : </span>
                <p className="font-semibold text-gray-700 dark:text-gray-200"> Mongo DB</p>,
                <p className="font-semibold text-gray-700 dark:text-gray-200"> Firebase</p>
              </div>
            </div>
            <div className="mt-12 md:mt-0 lg:absolute -right-9 lg:w-7/12 top-1/4">
              <div className="relative w-full">
                <div aria-hidden="true" className="absolute scale-75 md:scale-110 inset-0 m-auto w-full h-full md:w-96 md:h-96 rounded-full rotate-45 bg-gradient-to-r from-sky-500 to-cyan-300 blur-3xl"></div>
                <img src="/assets/hero.svg" className="relative w-full" alt="wath illustration" loading="lazy" width="320" height="280" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero