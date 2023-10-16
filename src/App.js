import React from "react";
import Navbar from "./components/Navbar";
import SignUp from "./components/pages/SignUp";
import Home from "./components/pages/Home";
import VideoPlayer from "./components/VideoPlayer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Services from "./components/pages/Services";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/services" element={<Services />} />
          <Route path="/watch-trailer" element={<VideoPlayer />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
