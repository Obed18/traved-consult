import React, { useState } from "react";
import "../styles/home.css";

import Navbar from "../components/Navbar";
import StudyAbroadBooking from "../components/StudyAbroadBooking";
import Footer from "../components/Footer";
import BotIcon from "../components/BotIcon";

interface PackageInfo {
  title: string;
  price: string;
}

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="main-content">
        <Navbar />
        <StudyAbroadBooking />
        <Footer />
      </div>
      <a href="https://wa.me/+233549213246" target="_blank" rel="noopener noreferrer">
      <BotIcon />
      </a>
    </div>
  );
};

export default Home;
