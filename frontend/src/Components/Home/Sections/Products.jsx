import React from 'react'

const Products = () => {
  return (
    <>
      <section id="how-it-works" className="pt-20 px-4 bg-gradient-to-bl from-slate-800 to-black">
        <div className="text-center max-w-3xl mx-auto mb-12 text-white">
          <h3 className="text-3xl font-extrabold tracking-tight  sm:text-5xl ">
            Acess8's Products
          </h3>
          <p className="mt-6 font-light lg:text-xl sm:text-lg text-gray-400">
            We provide a range of products to help you get the most out of your website.
            You can now shorten a link, generate QRs in seconds. Not only that but you can
            also view your generations too is a simple and easy to use dashboard.
          </p>
        </div>

        <div className="py-8 px-4 mx-auto space-y-12 max-w-screen-xl lg:space-y-20 sm:py-16 lg:px-6">
          <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="sm:text-lg text-gray-400">
              <span className="text-primary-500 font-bold text-md">
                Product 1
              </span>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                Mynly
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Transform lengthy web addresses into concise links and dive into insightful analytics to understand your online reach.
              </p>
              <ul className="pt-8 my-7 space-y-5 border-t border-gray-700">
                <li className="flex space-x-3">
                ✅<span className="text-base pl-4 font-medium leading-tight text-white">Shorten lengthy URLs in the blink of an eye.</span>
                </li>
                <li className="flex space-x-3">
                ✅<span className="text-base pl-4 font-medium leading-tight text-white">Personalize your links with custom aliases.
                  </span>
                </li>
                <li className="flex space-x-3">
                ✅<span className="text-base pl-4 font-medium leading-tight text-white">Track the performance of your shortened URLs with detailed analytics.
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-3 justify-center items-center hidden lg:flex">
              <div className="hidden mb-4 bg-slate-950 rounded-full w-80 blur-3xl lg:mb-0 h-64 lg:flex max-w-lg" />
              <img className='absolute w-64 h-64 rounded-2xl hidden lg:flex' src="/assets/mynly.webp" alt="easy setup" />
            </div>
          </div>

          <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="relative p-3 justify-center items-center hidden lg:flex">
              <div className="hidden mb-4 bg-slate-700 rounded-full w-80 blur-3xl lg:mb-0 h-64 lg:flex max-w-lg" />
              <img className='absolute w-64 h-64 rounded-2xl hidden lg:flex' src="/assets/qr7.webp" alt="easy setup" />
            </div>

            <div className="sm:text-lg text-gray-400">
              <span className="text-primary-500 font-bold text-md">
                Product 2
              </span>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                QR7
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                From URLs to contact details and Wi-Fi credentials, our tool empowers you to share information seamlessly with a touch of style
              </p>
              <ul className="pt-8 my-7 space-y-5 border-t border-gray-700">
                <li className="flex space-x-3">
                ✅<span className="text-base pl-4 font-medium leading-tight text-white">Generate QR codes effortlessly for any content.
                  </span>
                </li>
                <li className="flex space-x-3">
                ✅<span className="text-base pl-4 font-medium leading-tight text-white">Customize QR codes to match your style and branding.
                  </span>
                </li>
                <li className="flex space-x-3">
                ✅<span className="text-base pl-4 font-medium leading-tight text-white">Use QR7 for URLs, contact information, Wi-Fi details, and more.
                  </span>
                </li>

              </ul>
            </div>
          </div>

          <div className="gap-8 items-center lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="sm:text-lg text-gray-400">
              <span className="text-primary-500 font-bold text-md">
                Product 3
              </span>
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                AeroNotes
              </h2>
              <p className="mb-8 font-light lg:text-xl">
                Create, store, and sync your notes across devices, ensuring your ideas are always at your fingertips.
              </p>
              <ul className="pt-8 my-7 space-y-5 border-t border-gray-700">
                <li className="flex space-x-3">
                ✅<span className="text-base pl-4 font-medium leading-tight text-white">Create and organize notes for easy retrieval.
                  </span>
                </li>
                <li className="flex space-x-3">
                ✅<span className="text-base pl-4 font-medium leading-tight text-white">Access your notes from anywhere, anytime.
                  </span>
                </li>
                <li className="flex space-x-3">
                ✅<span className="text-base pl-4 font-medium leading-tight text-white">Keep your notes safe with encryption and secure login
                  </span>
                </li>
              </ul>
            </div>
            <div className="p-3 justify-center items-center hidden lg:flex">
              <div className="hidden mb-4 bg-blue-950 rounded-full w-80 blur-3xl lg:mb-0 h-64 lg:flex max-w-lg" />
              <img className='absolute w-64 h-64 rounded-2xl hidden lg:flex' src="/assets/aero.webp" alt="easy setup" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Products