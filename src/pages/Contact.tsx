import React, { useState } from "react";
import "../styles/home.css";

import Navbar from "../components/Navbar";
import TravEdContact from "../components/TravEdContact";
import Footer from "../components/Footer";
import BotIcon from "../components/BotIcon";
import ConsultationSection from "../components/ConsultationSection";

const Home: React.FC = () => {
  return (
    <div className="contact-page">
      <div className= "main-content">
        <Navbar />
        <TravEdContact />
        <ConsultationSection />
        <Footer />
      </div>

      <a href="https://wa.me/+233549213246" target="_blank" rel="noopener noreferrer">
      <BotIcon />
      </a>
    </div>
  );
};

export default Home;
