import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../../../Context/AuthContext";
import QrCard from "./QrCard";
import TotalQRCard from "./TotalQRCard";
import ViewQRCard from "./ViewQRCard";

const UsedLinks = () => {
  const { currentUser } = useAuth();
  let x = currentUser.uid;
  const [urls, setUrls] = useState([]);
  const [total, setTotal] = useState(0);
  const [clicks, setClicks] = useState(0);

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
        const totalClicks = response.data.reduce(
          (acc, url) => acc + url.scanCount,
          0
        );
        setUrls(response.data);
        setClicks(totalClicks);
        setTotal(response.data.length);
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };

    fetchUrls();
  }, [x]);

  return (
    <>
      <div className="w-full flex flex-col">
        <h1 className="text-4xl text-left font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl">
          {" "}
          Your Generated QRs{" "}
        </h1>
        <p className="my-3 text-lg font-normal text-gray-500 lg:text-xl text-left">
          Rediscover your digital journey: Your QR Code History Page, where each
          scan unveils a unique story. Seamlessly navigate through your QR code
          experiences!
        </p>
        <hr className="h-px my-8 mt-1 bg-gray-700 border-0"></hr>
        <div className="flex sm:justify-between justify-center gap-4 items-center flex-wrap">
          <TotalQRCard total={total} />
          <ViewQRCard views={clicks} />
        </div>
      </div>
      <h1>All Qs</h1>
      <div className="flex flex-col-reverse gap-10">
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
    </>
  );
};

export default UsedLinks;
