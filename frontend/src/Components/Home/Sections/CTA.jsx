import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <>
      <section id="CTA" className="bg-gradient-to-br flex flex-col justify-center items-center min-h-screen from-black to-slate-800">
        <div className="mb-12 px-2 md:px-6 mx-auto">
          <div className="mb-32">
            <div className="relative overflow-hidden bg-no-repeat bg-cover rounded-2xl" style={{ backgroundPosition: "50%", backgroundImage: "url('/assets/cta.webp')", height: "250px" }}></div>

            <div className="mx-auto px-6 md:px-12 xl:px-32">
              <div className="text-center text-gray-800">
                <div className="block rounded-lg shadow-lg shadow-gray-500 px-6 py-12 backdrop-blur-2xl pb-8 md:py-16 md:px-12" style={{ marginTop: "-170px", background: "hsla(0, 0%, 100%, 0.7)", }}>
                  <h1 className="text-3xl sm:text-6xl xl:text-7xl font-bold tracking-tight mb-8">We have over <span className="text-blue-800">50+</span> Users.</h1>
                  <Link to="/signup" className="px-5 py-3 text-sm font-medium text-center w-full sm:w-auto text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-primary-300  rounded-lg cursor-pointer inline-flex justify-center items-center">
                    Get started
                    <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16 px-4 md:px-6">
          <div className="items-center rounded-xl shadow sm:flex">
            <a href="https://subhadeep3902-github-io.vercel.app/" target='_blank' rel='noreferrer' className='flex justify-center items-center'>
              <img className="rounded-xl w-[300px] h-[300px]" src="/assets/me.webp" alt="me" />
            </a>
            <div className="p-8 max-w-lg">
              <h1 className="text-3xl mb-1 font-bold tracking-tight text-white">
                Subhadeep Roy
              </h1>
              <span className="text-gray-400">CEO & Founder of Acess8</span>
              <p className="mt-3 mb-4 font-light text-gray-400">In this world, winning is everything. As long as I win in the end.That's all that matters.</p>
              <ul className="flex space-x-4 sm:mt-0">
                <li>
                  <a href="https://www.linkedin.com/in/subhadeep3902/" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-white">
                    <svg fill="currentColor" className='w-4 h-4' version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                      viewBox="0 0 310 310" xmlSpace="preserve">
                      <g id="XMLID_801_">
                        <path id="XMLID_802_" d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73C77.16,101.969,74.922,99.73,72.16,99.73z" />
                        <path id="XMLID_803_" d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z" />
                        <path id="XMLID_804_" d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995C310,145.43,300.549,94.761,230.454,94.761z" />
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/mvp_Subha" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/subhadeeproy3902" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-white">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/mvp_subha" target='_blank' rel='noreferrer' className="text-gray-500 hover:text-white">
                    <svg className='w-5 h-5' viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M3 11C3 7.22876 3 5.34315 4.17157 4.17157C5.34315 3 7.22876 3 11 3H13C16.7712 3 18.6569 3 19.8284 4.17157C21 5.34315 21 7.22876 21 11V13C21 16.7712 21 18.6569 19.8284 19.8284C18.6569 21 16.7712 21 13 21H11C7.22876 21 5.34315 21 4.17157 19.8284C3 18.6569 3 16.7712 3 13V11ZM18 7.5C18 8.32843 17.3284 9 16.5 9C15.6716 9 15 8.32843 15 7.5C15 6.67157 15.6716 6 16.5 6C17.3284 6 18 6.67157 18 7.5ZM14 13C14 14.1046 13.1046 15 12 15C10.8954 15 10 14.1046 10 13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13ZM16 13C16 15.2091 14.2091 17 12 17C9.79086 17 8 15.2091 8 13C8 10.7909 9.79086 9 12 9C14.2091 9 16 10.7909 16 13Z" fill="currentColor" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CTA