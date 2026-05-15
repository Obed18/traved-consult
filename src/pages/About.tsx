import React, { useState } from "react";
import "../styles/home.css";

import Navbar from "../components/Navbar";
import WhyTraved from "../components/WhyTraved";
import Footer from "../components/Footer";
import BotIcon from "../components/BotIcon";
import ChatSupport from "../components/ChatSupport";
import TeamSection from "../components/TeamSection";
import AboutHero from "../components/AboutHero";
import ConsultationSection from "../components/ConsultationSection";
import SpecialtySection from "../components/SpecialtySection";
import MissionVision from "../components/MissionVision";
import ImpactSection from "../components/ImpactSection";
import StudyAbroadSection from "../components/StudyAbroadSection";
import GatewaySection from "../components/GatewaySection";
import WhyChooseUs from "../components/WhyChooseUs";
import InternationalEducation from "../components/InternationalEducation";
import StartJourneySection from "../components/StartJourneySection";


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
        <AboutHero />
        <WhyTraved />
        <SpecialtySection />
        <MissionVision />
        <ImpactSection />
        <StudyAbroadSection />
        <GatewaySection />
        <WhyChooseUs />
        <InternationalEducation />
        <StartJourneySection />
        <TeamSection />
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
