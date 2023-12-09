import React from "react";
import { Link } from "react-router-dom";

const Help = () => {
  return (
    <>
      <div className="p-6 pt-24 min-h-screen flex justify-center lg:ml-64 bg-gradient-to-b from-green-300 via-green-200 to-white">
        <div className="flex flex-col justify-center items-center">
          <img
            src="https://www.svgrepo.com/show/426192/cogs-settings.svg"
            alt="Logo"
            className="mb-8 h-40"
          />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-700 mb-10">
            This page is under development
          </h1>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/subhadeep3902/"
              target="_blank"
              rel="noreferrer"
              className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded"
            >
              Contact Me
            </a>
            <Link
              to="/dashboard"
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

export default Help;
