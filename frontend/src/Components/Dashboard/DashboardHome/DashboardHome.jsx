import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../../Context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faQrcode, faCaretUp, faTasks, faServer, faNoteSticky } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'


const DashboardHome = ({loginDays}) => {
  const { currentUser } = useAuth();
  let x = currentUser.uid;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://mynly.vercel.app"
        : "http://localhost:5000";
    const apiUrl = baseUrl + "/api/users/" + x;

    const fetchUrls = async () => {
      try {
        const response = await axios.get(apiUrl);
        setTotal(response.data.length);
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };

    fetchUrls();
  }, [x]);


  const [qrtotal, setQrTotal] = useState(0);

  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://mynly.vercel.app"
        : "http://localhost:5000";
    const apiUrl = baseUrl + "/api/qr/users/" + x;

    const fetchUrls = async () => {
      try {
        const response = await axios.get(apiUrl);
        setQrTotal(response.data.length);
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };

    fetchUrls();
  }, [x]);


  const [notesTotal, setNotesTotal] = useState(0);
  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://mynly.vercel.app"
        : "http://localhost:5000";
    const apiUrl = baseUrl + "/api/notes/users/" + x;

    const fetchUrls = async () => {
      try {
        const response = await axios.get(apiUrl);
        setNotesTotal(response.data.length);
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };

    fetchUrls();
  }, [x]);

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
      <div className="p-6 pt-24 min-h-screen lg:ml-64">
        <div className='bg-blue-600 overflow-hidden p-4 md:p-6 rounded mb-8 relative'>
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
        <div className="bg-gray-100 flex justify-center">
          <div className="flex justify-center items-center gap-16">
            <Link to="/dashboard/url-shortener" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Url Shortener</Link>
            <Link to="/dashboard/qr-generator" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Qr Generator</Link>
            <Link to="/dashboard/notes-saver" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">AeroNotes</Link>
          </div>
        </div>

        <div className='pt-3 bg-transparent'>
          <div className='rounded-sm bg-transparent p-4 px-0 text-3xl'>
            <h3 className="font-bold pl-2 text-slate-950">Analytics ✨</h3>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 xl:w-1/3 p-6 px-0 sm:p-6">
            <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-green-600"><FontAwesomeIcon icon={faGlobe} size="2x" inverse /></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-600">Links Shortened</h5>
                  <h3 className="font-bold text-3xl pt-2">{total} <Link to="/dashboard/past-urls" className="text-green-500"><FontAwesomeIcon icon={faCaretUp} /></Link></h3>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-6 px-0 sm:p-6">
            <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-600 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-red-600"><FontAwesomeIcon icon={faQrcode} size="2x" inverse /></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-600">Qr Generated</h5>
                  <h3 className="font-bold text-3xl pt-2">{qrtotal} <Link to="/dashboard/past-qrs" className="text-red-500"><FontAwesomeIcon icon={faCaretUp} /></Link></h3>
                </div>
              </div>
            </div>
          </div>

          {/* ewfWwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww*/}

          <div className="w-full md:w-1/2 xl:w-1/3 p-6 px-0 sm:p-6">
            <div className="bg-gradient-to-b from-purple-200 to-purple-100 border-b-4 border-purple-600 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-purple-600"><FontAwesomeIcon icon={faNoteSticky} size="2x" inverse /></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-600">Notes Saved</h5>
                  <h3 className="font-bold text-3xl pt-2"> {notesTotal} <Link to="/dashboard/past-qrs" className="text-purple-500"><FontAwesomeIcon icon={faCaretUp} /></Link></h3>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-6 px-0 sm:p-6">
            <div className="bg-gradient-to-b from-orange-200 to-orange-100 border-b-4 border-orange-600 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-orange-600"><FontAwesomeIcon icon={faTasks} size="2x" inverse /></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-600">TODOs</h5>
                  <h3 className="font-bold text-3xl pt-2">1 <Link to="/dashboard/past-qrs" className="text-orange-500"><FontAwesomeIcon icon={faCaretUp} /></Link></h3>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 xl:w-1/3 p-6 px-0 sm:p-6">
            <div className="bg-gradient-to-b from-sky-200 to-sky-100 border-b-4 border-sky-600 rounded-lg shadow-xl p-5">
              <div className="flex flex-row items-center">
                <div className="flex-shrink pr-4">
                  <div className="rounded-full p-5 bg-sky-600"><FontAwesomeIcon icon={faServer} size="2x" inverse /></div>
                </div>
                <div className="flex-1 text-right md:text-center">
                  <h5 className="font-bold uppercase text-gray-600">Total Active days</h5>
                  <h3 className="font-bold text-3xl pt-2">{loginDays}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardHome