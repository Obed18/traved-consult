import React, { useState } from "react";
import "../styles/home.css";

import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import ServicesSection from "../components/ServicesSection";
import WhyStudyAbroadSection from "../components/WhyStudyAbroadSection";
import PartnerUniversities from "../components/PartnerUniversities";
import HeroVideo from "../components/HeroVideo";
import Footer from "../components/Footer";
import BotIcon from "../components/BotIcon";
import ChatSupport from "../components/ChatSupport";
import ConsultationSection from "../components/ConsultationSection";
import TGEFSection from "../components/TGEFSection";



const Home: React.FC = () => {
  const [showChat, setShowChat] = useState<boolean>(false);

  const toggleChat = (): void => {
    setShowChat((prev) => !prev);
  };

  return (
    <div className="home">
      {/* Background blur wrapper */}
      <div className={`main-content ${showChat ? "blurred" : ""}`}>
        <Navbar />
        <HeroVideo />
        <HeroSlider />
        <ServicesSection />
        <WhyStudyAbroadSection />
        <TGEFSection />
        <PartnerUniversities />
        <ConsultationSection />
        <Footer />
      </div>

      {/* Chat Support and Bot Icon */}
      {showChat && (
        <div className="chat-support-wrapper">
          <ChatSupport onClose={toggleChat} />
        </div>
      )}

      <BotIcon showChat={showChat} toggleChat={toggleChat} />
    </div>
  );
};

export default Home;
