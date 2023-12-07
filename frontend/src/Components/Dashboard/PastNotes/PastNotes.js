import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";
import NoteCard from "./NoteCard";

const PastNotes = () => {
  const { currentUser } = useAuth();
  let x = currentUser.uid;
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://mynly.vercel.app"
        : "http://localhost:5000";
    const apiUrl = baseUrl + "/api/notes/users/" + x;
    const fetchNotes = async () => {
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data);
        setNotes(response.data);
      } catch (error) {
        console.error("Error fetching Notes:", error);
      }
    };
    fetchNotes();
  }, [x]);

  return (
    <>
      <div className="p-6 pt-24 min-h-screen lg:ml-64">
        <div className="w-full flex flex-col">
          <h1 className="text-4xl text-left font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {" "}
            Your Saved Notes{" "}
          </h1>
          <p className="my-3 text-lg font-normal text-gray-500 lg:text-xl text-left">
          Explore your thoughts here — where every saved entry crafts a unique chapter, capturing the essence of your digital journey.
          </p>
          <hr className="h-px my-8 mt-1 bg-gray-700 border-0"></hr>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center pt-5 gap-4 sm:gap-4 lg:gap-10">
          {notes.length > 0 ? (
            <>
              {notes.reverse().map((note) => (
                <NoteCard key={note._id} note={note} />
              ))}
            </>
          ) : (
            <p>No Notes found for the current user.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default PastNotes;
