import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";
import QrCard from "./QrCard";
import Loading3 from "../../Loading/Loading3";

const UsedLinks = () => {
  const { currentUser } = useAuth();
  let x = currentUser.uid;
  const [urls, setUrls] = useState([]);

  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://mynly.vercel.app"
        : "http://localhost:5000";
    const apiUrl = baseUrl + "/api/qr/users/" + x + `?page=${page}`;

    const fetchUrls = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl);
        console.log(response.data)
        setUrls((prevQrs) => [...prevQrs, ...response.data.urls]);
        setHasMore(response.data.urls.length > 0);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };

    fetchUrls();
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
            Your Generated QRs{" "}
          </h1>
          <p className="my-3 text-lg font-normal text-gray-500 lg:text-xl text-left">
            Rediscover your digital journey: Your QR Code History Page, where
            each scan unveils a unique story. Seamlessly navigate through your
            QR code experiences!
          </p>
          <hr className="h-px my-8 mt-1 bg-gray-700 border-0"></hr>
        </div>
        <div className="flex flex-col pt-5 gap-10">
          {urls.length > 0 ? (
            <>
              {urls.map((url) => (
                <QrCard key={url._id} url={url} />
              ))}
            </>
          ) : (
            <p>No QRs found for the current user.</p>
          )}
        </div>
        {loading ? (
          <div className="w-full mt-10 flex justify-center items-center">
            <Loading3 />
          </div>
        ) : (
          <div className="w-full mt-10 flex justify-center items-center">
            {hasMore ? (
              <button onClick={handleLoadMore}>Load More</button>
            ) : (
              <p className="text-gray-500">You have reached the end.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default UsedLinks;
