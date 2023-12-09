import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { Route, Routes, Link } from "react-router-dom";
import DashboardHome from "./DashboardHome/DashboardHome";
import { useAuth } from "../../Context/AuthContext";
import Loading from "../Loading/Loading";
import UrlShortener from "./UrlShortener/UrlShortener";
import QrGenerator from "./QrGenerator/QrGenerator";
import PastUrls from "./PastUrls/PastUrls";
import PastQrs from "./PastQrs/PastQrs";
import axios from "axios";
import AeroNotes from "./AeroNotes/AeroNotes";
import PastNotes from "./PastNotes/PastNotes";
import UpdateNote from "./AeroNotes/UpdateNote";
import UpgradeToPro from "./Upgrade/UpgradeToPro";
import Help from "./Help/Help";
import Documentation from "./Documentation/Documentation";


const Dashboard = () => {
  const { currentUser } = useAuth();
  let x = currentUser.uid;
  const [showLoading, setShowLoading] = useState(true);
  const [loginDays, setLoginDays] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const nodeEnv = process.env.REACT_APP_NODE_ENV;
    const baseUrl =
      nodeEnv === "production"
        ? "https://mynly.vercel.app"
        : "http://localhost:5000";
    const updateLoginCount = async () => {
      try {
        const response = await axios.post(
          baseUrl + "/api/login/userLogin",
          {
            userID: x,
          },
          {
            withCredentials: true,
          }
        );
        setLoginDays(response.data.loginCount);
      } catch (error) {
        console.error(error);
      }
    };
    if (currentUser) {
      updateLoginCount();
    }
  }, [currentUser, x]);

  if (showLoading) {
    return <Loading />;
  }

  if (!currentUser) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="m-auto flex flex-col">
          You must be logged in to view this page
          <div className="flex justify-evenly mt-4">
            <Link
              to="/signup"
              className="w-20 bg-blue-500 hover:bg-blue-600 duration-75 text-white p-2 rounded text-center"
            >
              Sign Up
            </Link>
            <Link
              to="/login"
              className="bg-blue-500 hover:bg-blue-600 w-20 duration-75 text-white p-2 rounded text-center"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Sidebar />
        <Routes>
          <Route path="/" element={<DashboardHome loginDays={loginDays} />} />
          <Route path="/qr-generator" element={<QrGenerator />} />
          <Route path="/url-shortener" element={<UrlShortener />} />
          <Route path="/past-urls" element={<PastUrls />} />
          <Route path="/past-qrs" element={<PastQrs />} />
          <Route path="/notes-saver" element={<AeroNotes />} />
          <Route path="/past-notes" element={<PastNotes />} />
          <Route path="/notes-saver/:id" element={<UpdateNote />} />
          <Route path="/upgrade-to-pro" element={<UpgradeToPro />} />
          <Route path="/support" element={<Help />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
    </>
  );
};

export default Dashboard;
