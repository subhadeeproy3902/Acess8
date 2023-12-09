import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <section id="about" className="bg-gradient-to-br from-black to-slate-800 antialiased">
        <div className="max-w-screen-xl px-5 py-8 mx-auto lg:px-6 sm:py-16 lg:py-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl text-white">
              Empowering Your Digital Lifestyle
            </h2>
            <p className="mt-4 text-base font-normal sm:text-xl text-gray-400">
              At Acess8, we're on a mission to simplify your digital journey. Our user-centric tools—MYNLY, QR7, and AERONOTES—craft convenience, efficiency, and security for your online experience.
            </p>
          </div>

          <div className="p-2 mt-8 rounded-lg sm:p-12 lg:mt-16">
            <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
              <div className="flex items-start gap-4 sm:gap-5 flex-row">
                <div className="bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                  <svg className="w-10 lg:w-12 h-10 lg:h-12 text-white" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 512 512" xmlSpace="preserve">
                    <g>
                      <polygon className='fill-white' points="386.415,193.208 287.481,193.208 359.434,0 161.566,0 125.585,280.151 206.528,280.151 170.557,512" />
                    </g>
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold sm:text-2xl text-white">
                    Lightning Shortening
                  </h3>
                  <p className="mt-2 text-base font-normal sm:text-lg text-gray-400">
                    Experience instant URL shortening with MYNLY. Transform lengthy web addresses into concise links, perfect for sharing and tracking.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-5 flex-row">
                <div className=" bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                  <svg
                    className="w-10 lg:w-12 h-10 lg:h-12 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#fff"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="8" height="8" />
                    <path d="M6 6h.01" />
                    <rect x="14" y="2" width="8" height="8" />
                    <path d="M18 6h.01" />
                    <rect x="2" y="14" width="8" height="8" />
                    <path d="M6 18h.01" />
                    <path d="M14 14h.01" />
                    <path d="M18 18h.01" />
                    <path d="M18 22h4v-4" />
                    <path d="M14 18v4" />
                    <path d="M22 14h-4" />
                  </svg></div>
                <div>
                  <h3 className="text-xl font-bold sm:text-2xl text-white">
                    Dynamic QR Codes
                  </h3>
                  <p className="mt-2 text-base font-normal sm:text-lg text-gray-400">
                    Generate dynamic QR codes for websites, contact information, or Wi-Fi credentials. QR7 adapts to your needs, creating codes that evolve with your content.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-5 flex-row">
                <div className="bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                  <svg className="w-10 lg:w-12 h-10 lg:h-12 text-white" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" fill="currentColor"><rect fill="none" height="24" width="24"></rect><path d="M18.85,10.39l1.06-1.06c0.78-0.78,0.78-2.05,0-2.83L18.5,5.09c-0.78-0.78-2.05-0.78-2.83,0l-1.06,1.06L18.85,10.39z M13.19,7.56L4,16.76V21h4.24l9.19-9.19L13.19,7.56z M19,17.5c0,2.19-2.54,3.5-5,3.5c-0.55,0-1-0.45-1-1s0.45-1,1-1 c1.54,0,3-0.73,3-1.5c0-0.47-0.48-0.87-1.23-1.2l1.48-1.48C18.32,15.45,19,16.29,19,17.5z M4.58,13.35C3.61,12.79,3,12.06,3,11 c0-1.8,1.89-2.63,3.56-3.36C7.59,7.18,9,6.56,9,6c0-0.41-0.78-1-2-1C5.74,5,5.2,5.61,5.17,5.64C4.82,6.05,4.19,6.1,3.77,5.76 C3.36,5.42,3.28,4.81,3.62,4.38C3.73,4.24,4.76,3,7,3c2.24,0,4,1.32,4,3c0,1.87-1.93,2.72-3.64,3.47C6.42,9.88,5,10.5,5,11 c0,0.31,0.43,0.6,1.07,0.86L4.58,13.35z"></path></svg></div>
                <div>
                  <h3 className="text-xl font-bold sm:text-2xl text-white">
                    Secure Cloud Storage
                  </h3>
                  <p className="mt-2 text-base font-normal sm:text-lg text-gray-400">
                    Safeguard your thoughts with AERONOTES' secure cloud storage. Access your notes anytime, anywhere, knowing they're protected by robust encryption.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 sm:gap-5 flex-row">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-full w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0">
                  <svg className="w-10 lg:w-12 h-10 lg:h-12 text-white" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                    <title>Analytics</title>
                    <g id="Analytics" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeDasharray="0,0" strokeLinecap="round">
                      <path d="M4,18.9999905 L7.75407946,11.491832 C7.8680565,11.2638231 8.06482016,11.0879651 8.30413884,11.0001847 C9.11356935,10.7032911 9.60000359,10.8000012 9.76344156,11.2903152 L11.1190224,15.3570574 C11.1996482,15.5988744 11.3695623,15.8007859 11.5940587,15.9215227 C12.3533352,16.3298705 12.8485386,16.3029137 13.079669,15.8406525 L18,5.99999082 M13,6.46409237 L17.2774408,5.31795559 C17.4347269,5.27579637 17.5999292,5.27269863 17.7586883,5.30891799 C18.3183612,5.43660193 18.6397719,5.65560146 18.7229204,5.96591657 L19.9282036,10.4640923" id="Vector" stroke="#fff" strokeWidth="2">
                      </path>
                    </g>
                  </svg></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 sm:text-2xl dark:text-white">
                    Analytics Empowerment
                  </h3>
                  <p className="mt-2 text-base font-normal text-gray-500 sm:text-lg dark:text-gray-400">
                    Track the performance of your shortened URLs and QR codes, allowing you to make data-driven decisions for optimized online engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center lg:mt-16">
            <Link to="/signup" className="px-5 py-3 text-sm font-medium text-center w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg cursor-pointer inline-flex justify-center items-center">
              Get started
              <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default About