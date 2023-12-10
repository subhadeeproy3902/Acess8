import React, { useState, useEffect } from "react";
import Signup from "./Components/Signup/Signup";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import ForgotPassword from "./Components/ForgotPassword/ForgotPassword";
import Preloader from "./Components/Loading/Preloader/Preloader";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className="delay-[2500]" id="fadeout">
          <Preloader />
        </div>
      ) : (
        <div
          className="bg-gray-100 min-h-screen flex justify-center"
          id="fadein"
        >
          <div className="w-full">
            <AuthProvider>
              <Router>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/dashboard/*" element={<Dashboard />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/forgot-password" element={<ForgotPassword />} />
                </Routes>
              </Router>
            </AuthProvider>
          </div>
        </div>
      )}
    </>
  );
};

export default App;
