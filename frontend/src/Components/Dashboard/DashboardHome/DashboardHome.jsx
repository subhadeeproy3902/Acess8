import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'
import LoginGraph from './LoginGraph'


const DashboardHome = () => {
  const { currentUser } = useAuth()
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let greeting;

  if (currentHour < 12) {
    greeting = 'Good morning';
  } else if (currentHour < 18) {
    greeting = 'Good afternoon';
  } else {
    greeting = 'Good evening';
  }

  const dynamicGreeting = `${greeting}, ${currentUser.displayName}. 👋`;


  return (
    <>
      <div className='bg-blue-600 overflow-hidden p-4 md:p-6 rounded-sm mb-8 relative'>
        <div className='hidden lg:block mr-16 -mt-4 top-0 right-0 absolute pointer-events-none'>
          <svg width="319" height="198" xmlnsXlink="http://www.w3.org/1999/xlink">
            <defs>
              <path id="welcome-a" d="M64 0l64 128-64-20-64 20z"></path>
              <path id="welcome-e" d="M40 0l40 80-40-12.5L0 80z"></path>
              <path id="welcome-g" d="M40 0l40 80-40-12.5L0 80z"></path>
              <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="welcome-b">
                <stop stopColor="#A5B4FC" offset="0%"></stop>
                <stop stopColor="#818CF8" offset="100%"></stop>
              </linearGradient>
              <linearGradient x1="50%" y1="24.537%" x2="50%" y2="100%" id="welcome-c">
                <stop stopColor="#4338CA" offset="0%"></stop>
                <stop stopColor="#6366F1" stopOpacity="0" offset="100%"></stop>
              </linearGradient>
            </defs>
            <g fill="none" fillRule="evenodd">
              <g transform="rotate(64 36.592 105.604)">
                <mask id="welcome-d" fill="#fff">
                  <use xlinkHref="#welcome-a"></use>
                </mask>
                <use fill="url(#welcome-b)" xlinkHref="#welcome-a"></use>
                <path fill="url(#welcome-c)" mask="url(#welcome-d)" d="M64-24h80v152H64z"></path>
              </g>
              <g transform="rotate(-51 91.324 -105.372)">
                <mask id="welcome-f" fill="#fff">
                  <use xlinkHref="#welcome-e"></use>
                </mask>
                <use fill="url(#welcome-b)" xlinkHref="#welcome-e"></use>
                <path fill="url(#welcome-c)" mask="url(#welcome-f)" d="M40.333-15.147h50v95h-50z"></path>
              </g>
              <g transform="rotate(44 61.546 392.623)">
                <mask id="welcome-h" fill="#fff">
                  <use xlinkHref="#welcome-g"></use>
                </mask>
                <use fill="url(#welcome-b)" xlinkHref="#welcome-g"></use>
                <path fill="url(#welcome-c)" mask="url(#welcome-h)" d="M40.333-15.147h50v95h-50z"></path>
              </g>
            </g>
          </svg>
        </div>
        <div className='relative'>
          <h1 className='text-white font-bold text-2xl md:text-3xl leading-snug mb-2'>
            {dynamicGreeting}
          </h1>
          <p className='text-slate-100'>Welcome to your dashboard. Scroll to see what's happening with your projects today:</p>
        </div>
      </div>
      <LoginGraph/>
      <div className="bg-gray-100 flex justify-center">
        <div className="flex justify-center items-center gap-16">
          <Link to="/dashboard/url-shortener" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Url Shortener</Link>
          <Link to="/dashboard/qr-generator" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Qr Generator</Link>
        </div>
      </div>
    </>
  )
}

export default DashboardHome