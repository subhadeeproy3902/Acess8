import React from "react";
import { Link } from "react-router-dom";

const UpgradeToPro = () => {
  return (
    <>
      <div className="p-6 pt-24 min-h-screen flex justify-center lg:ml-64 bg-gradient-to-b from-red-300 via-red-200 to-white">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
            alt="Logo"
            className="mb-8 h-40"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 mb-4">
            This page is under development
          </h1>
          <p className="text-center text-gray-500 text-lg md:text-xl lg:text-2xl mb-8">
            I am working hard to implement pricing :&#41; . Stay tuned!
          </p>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/subhadeep3902/" target="_blank" rel="noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded"
            >
              Contact Me
            </a>
            <Link to="/dashboard"
              className="border-2 border-gray-800 text-black font-bold py-3 px-6 rounded"
            >
              Back &#8594;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpgradeToPro;
