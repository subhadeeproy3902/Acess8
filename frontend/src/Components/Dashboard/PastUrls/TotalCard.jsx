import React from 'react';

const formatTotal = (total) => {
  if (total >= 1000000000) {
    return (total / 1000000000).toFixed(1) + 'B';
  } else if (total >= 1000000) {
    return (total / 1000000).toFixed(1) + 'M';
  } else if (total >= 1000) {
    return (total / 1000).toFixed(1) + 'K';
  } else {
    return total.toString();
  }
};

const TotalCard = ({ total }) => {
  const formattedTotal = formatTotal(total);
  return (
    <div className="max-w-xs w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8 dark:text-white">Total Links Shortened</h2>
      <div className="relative flex items-center justify-center">
        <div className="relative w-20 h-20">
          <div className="absolute w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
            <svg fill="rgb(37 99 235)" height={30} width={30} className='absolute top-[-15px] bg-gray-800 z-[1]' version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 611.999 611.999" xmlSpace="preserve">
              <g>
                <path d="M216.02,611.195c5.978,3.178,12.284-3.704,8.624-9.4c-19.866-30.919-38.678-82.947-8.706-149.952
		c49.982-111.737,80.396-169.609,80.396-169.609s16.177,67.536,60.029,127.585c42.205,57.793,65.306,130.478,28.064,191.029
		c-3.495,5.683,2.668,12.388,8.607,9.349c46.1-23.582,97.806-70.885,103.64-165.017c2.151-28.764-1.075-69.034-17.206-119.851
		c-20.741-64.406-46.239-94.459-60.992-107.365c-4.413-3.861-11.276-0.439-10.914,5.413c4.299,69.494-21.845,87.129-36.726,47.386
		c-5.943-15.874-9.409-43.33-9.409-76.766c0-55.665-16.15-112.967-51.755-159.531c-9.259-12.109-20.093-23.424-32.523-33.073
		c-4.5-3.494-11.023,0.018-10.611,5.7c2.734,37.736,0.257,145.885-94.624,275.089c-86.029,119.851-52.693,211.896-40.864,236.826
		C153.666,566.767,185.212,594.814,216.02,611.195z"/>
              </g>
            </svg>
            <span className="text-white text-xl font-bold">{formattedTotal}</span>
          </div>
          <div className="absolute w-full h-full rounded-full border-4 border-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default TotalCard;
