import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";
import NoteCard from "./NoteCard";
import Loading3 from "../../Loading/Loading3";

const PastNotes = () => {
  const { currentUser } = useAuth();
  let x = currentUser.uid;
  const [notes, setNotes] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      const nodeEnv = process.env.REACT_APP_NODE_ENV;
      const baseUrl =
        nodeEnv === "production"
          ? "https://mynly.vercel.app"
          : "http://localhost:5000";
      const apiUrl = baseUrl + "/api/notes/users/" + x + `?page=${page}`;
      try {
        const response = await axios.get(apiUrl);
        setNotes((prevNotes) => [...prevNotes, ...response.data.notes]);
        setHasMore(response.data.notes.length > 0);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching Notes:", error);
      }
    };
    fetchNotes();
  }, [x, page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <div className="p-6 pt-24 min-h-screen lg:ml-64">
        <div className="w-full flex flex-col">
          <h1 className="text-4xl text-left font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
            {" "}
            Your Saved Notes{" "}
          </h1>
          <p className="my-3 text-lg font-normal text-gray-500 lg:text-xl text-left">
            Explore your thoughts here — where every saved entry crafts a unique
            chapter, capturing the essence of your digital journey.
          </p>
          <hr className="h-px my-8 mt-1 bg-gray-700 border-0"></hr>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center pt-5 gap-4 sm:gap-4 lg:gap-10">
          {notes.length > 0 ? (
            <>
              {notes.map((note, index) => (
                <NoteCard key={note._id} note={note} />
              ))}
            </>
          ) : (
            <p>No Notes found for the current user.</p>
          )}
        </div>
        {loading ? (
          <div className="w-full mt-10 flex justify-center items-center">
            <Loading3 />
          </div>
        ) : notes.length > 0 ? (
          <div className="w-full mt-10 flex justify-center items-center">
            {hasMore ? (
              <button
                className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            ) : (
              <p className="text-gray-500">You have reached the end.</p>
            )}
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </>
  );
};

export default PastNotes;
