import React, { useState } from "react";
import "../styles/home.css";

import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import Destinations from "../components/Destinations";
import WhyStudyAbroadSection from "../components/WhyStudyAbroadSection";
// import PartnerUniversities from "../components/PartnerUniversities";
import HeroVideo from "../components/HeroVideo";
import Footer from "../components/Footer";
import BotIcon from "../components/BotIcon";
// import ConsultationSection from "../components/ConsultationSection";
// import TGEFSection from "../components/TGEFSection";
import ReadyToStudySection from "../components/ReadyToStudySection";


const Home: React.FC = () => {
  return (
    <div className="home">
      <div className= "main-content">
        <Navbar />
        <HeroVideo />
        <HeroSlider />
        <Destinations />
        <WhyStudyAbroadSection />
        {/* <TGEFSection />
        <PartnerUniversities /> */}
        <ReadyToStudySection />
        {/* <ConsultationSection /> */}
        <Footer />
      </div>
      <a href="https://wa.me/+233549213246" target="_blank" rel="noopener noreferrer">
      <BotIcon/>
      </a>
    </div>
  );
};

export default Home;
