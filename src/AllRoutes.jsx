import { Route, Routes } from "react-router";
import React, { useState } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import LoadingBar from "react-top-loading-bar";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/ResetPassword";
import { Toaster } from "react-hot-toast";
import PomodoroMain from "./components/Pomodoro/PomodoroMain";

const AllRoutes = () => {
  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Toaster />
      <Navbar setProgress={setProgress} />
      <LoadingBar
        color="#6096f8"
        height={4}
        shadow={true}
        progress={progress}
        loaderSpeed={500}
        containerStyle={{ zIndex: 1000 }}
        transitionTime={500}
        waitingTime={1000}
        onLoaderFinished={() => setProgress(0)}
      />
      <Routes>
        <Route path="/" element={<PomodoroMain setProgress={setProgress} />} />
        <Route path="/login" element={<Login setProgress={setProgress} />} />
        <Route path="/signup" element={<Signup setProgress={setProgress} />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword setProgress={setProgress} />}
        />
        <Route
          path="/reset-password/:token"
          element={<ResetPassword setProgress={setProgress} />}
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default AllRoutes;
