import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./AeroNotes.css";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";
import { toast } from "react-hot-toast";

const AeroNotes = () => {
  const { currentUser } = useAuth();
  const nodeEnv = process.env.REACT_APP_NODE_ENV;
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [bgColor, setBgColor] = useState("bg-yellow-200");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urlInDev = "http://localhost:5000/api/notes/createNote";
    const urlInProd = "https://mynly.vercel.app/api/notes/createNote";
    const url = nodeEnv === "production" ? urlInProd : urlInDev;
    let date = new Date();
    let currentDate = date.toLocaleDateString();
    try{
      const response = await axios.post(
        url,
        {
          userUid: currentUser.uid,
          title: title,
          description: description,
          backGroundColor: bgColor,
          date: currentDate,
        },
        { withCredentials: true, crossDomain: true }
      );
      console.log(response);
      toast.success("Note Saved Successfully!");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save note!");
    }
  };

  return (
    <>
      <div className="p-6 pt-24 min-h-screen lg:ml-64 bg-gradient-to-b from-amber-200 via-amber-50 to-white">
        <div className="w-full flex flex-col">
          <h1 className="text-4xl text-left font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {" "}
            AeroNotes{" "}
          </h1>
          <p className="my-3 text-lg font-normal text-gray-500 lg:text-xl text-left">
            Elevate your thoughts, effortlessly capture and save them. Your
            ideas, always at your fingertips!
          </p>
          <hr className="h-px my-5 mt-1 bg-gray-700 border-0"></hr>

          <div className="flex flex-col sm:flex-row justify-between gap-2 sm:gap-8 mb-8">
            <div className="w-full flex flex-col justify-center">
              <form
                id="noteForm"
                className={`rounded-xl ${bgColor} noteform`}
                onSubmit={handleSubmit}
              >
                <div>
                  <input
                    id="title"
                    className="bg-slate-800 outline-none text-gray-50 text-2xl font-bold tracking-wide rounded-t-xl block w-full p-3 pl-5 placeholder:text-gray-500"
                    type="text"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Your Title Here"
                    required
                    autoComplete="off"
                  />
                </div>
                <div className="mb-5 p-2.5">
                  <textarea
                    id="description"
                    className="bg-transparent outline-none text-black text-xl font-normal tracking-wide border-none rounded-b-xl w-full p-3 placeholder:text-gray-500 h-60 resize-none custom-scrollbar"
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your thoughts here..."
                  />
                </div>
              </form>
            </div>
            <div className="p-2 w-full sm:w-[40%] flex flex-col-reverse justify-center gap-8 items-center">
              <div className="flex flex-wrap gap-6 justify-center items-center">
                <button
                  onClick={(e) => setBgColor("bg-yellow-200")}
                  className={`w-8 h-8 rounded-full bg-yellow-300 duration-75 ${
                    bgColor === "bg-yellow-200"
                      ? "ring-4 ring-yellow-400 scale-105"
                      : "hover:shadow focus:ring-4 focus:ring-yellow-400"
                  }`}
                ></button>
                <button
                  onClick={(e) => setBgColor("bg-green-200")}
                  className={`w-8 h-8 rounded-full bg-green-300 duration-75 ${
                    bgColor === "bg-green-200"
                      ? "ring-4 ring-green-400 scale-105"
                      : "hover:shadow focus:ring-4 focus:ring-green-400"
                  }}`}
                ></button>
                <button
                  onClick={(e) => setBgColor("bg-blue-200")}
                  className={`w-8 h-8 rounded-full bg-blue-300 duration-75 ${
                    bgColor === "bg-blue-200"
                      ? "ring-4 ring-blue-400 scale-105"
                      : "hover:shadow focus:ring-4 focus:ring-blue-400"
                  }`}
                ></button>
                <button
                  onClick={(e) => setBgColor("bg-orange-200")}
                  className={`w-8 h-8 rounded-full bg-orange-300 duration-75 ${
                    bgColor === "bg-orange-200"
                      ? "ring-4 ring-orange-400 scale-105"
                      : "hover:shadow focus:ring-4 focus:ring-orange-400"
                  }`}
                ></button>
                <button
                  onClick={(e) => setBgColor("bg-purple-200")}
                  className="w-8 h-8 rounded-full bg-purple-300 duration-75 hover:shadow focus:ring-4 focus:ring-purple-400"
                ></button>
                <button
                  onClick={(e) => setBgColor("bg-red-200")}
                  className={`w-8 h-8 rounded-full bg-red-300 duration-75 ${
                    bgColor === "bg-red-200"
                      ? "ring-4 ring-red-400 scale-105"
                      : "hover:shadow focus:ring-4 focus:ring-red-400"
                  }`}
                ></button>
                <button
                  onClick={(e) => setBgColor("bg-pink-200")}
                  className={`w-8 h-8 rounded-full bg-pink-300 duration-75 ${
                    bgColor === "bg-pink-200"
                      ? "ring-4 ring-pink-400 scale-105"
                      : "hover:shadow focus:ring-4 focus:ring-pink-400"
                  }`}
                ></button>
                <button
                  onClick={(e) => setBgColor("bg-gray-200")}
                  className={`w-8 h-8 rounded-full bg-gray-300 duration-75 ${
                    bgColor === "bg-gray-200"
                      ? "ring-4 ring-gray-400 scale-105"
                      : "hover:shadow focus:ring-4 focus:ring-gray-400"
                  }`}
                ></button>
                <button
                  onClick={(e) => setBgColor("bg-lime-200")}
                  className={`w-8 h-8 rounded-full bg-lime-300 duration-75 ${
                    bgColor === "bg-lime-200"
                      ? "ring-4 ring-lime-400 scale-105"
                      : "hover:shadow focus:ring-4 focus:ring-lime-400"
                  }`}
                ></button>
                <button
                  onClick={(e) => setBgColor("bg-cyan-200")}
                  className={`w-8 h-8 rounded-full bg-cyan-300 duration-75 ${
                    bgColor === "bg-cyan-200"
                      ? "ring-4 ring-cyan-400 scale-105"
                      : "hover:shadow focus:ring-4 focus:ring-cyan-400"
                  }`}
                ></button>
              </div>
              <button
                form="noteForm"
                type="submit"
                className="inline-flex items-center justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 focus:ring-amber-300 w-full sm:w-52"
              >
                Save Note
              </button>
            </div>
          </div>
          <hr className="h-[0.99px] my-6 mt-0 bg-gray-700 border-0"></hr>
        </div>
        <div className="flex flex-col sm:flex-row">
          <Link
            to="/dashboard/past-notes"
            className="inline-flex items-center w-40 justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white bg-amber-500 rounded-lg hover:bg-amber-600 focus:ring-4 focus:ring-amber-300"
          >
            View Your Notes
          </Link>

          <div className="flex mt-4 sm:mt-0 sm:ml-6 items-center">
            <p className="text-center text-gray-500 text-lg font-bold">
              Or try :
            </p>
            <Link
              to="/dashboard/qr-generator"
              className="inline-flex ml-5 items-center justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white bg-pink-500 rounded-lg hover:bg-pink-600 focus:ring-4 focus:ring-pink-300"
            >
              QR7
            </Link>
            <Link
              to="/dashboard/url-shortener"
              className="inline-flex ml-5 items-center justify-center px-5 py-3 duration-75 text-base font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
            >
              Mynly
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AeroNotes;
