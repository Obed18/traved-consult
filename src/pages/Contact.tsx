import React, { useState } from "react";
import "../styles/home.css";

import Navbar from "../components/Navbar";
import VismeContactForm from "../components/VismeContactForm";
import Footer from "../components/Footer";
import BotIcon from "../components/BotIcon";
import ChatSupport from "../components/ChatSupport";
import ConsultationSection from "../components/ConsultationSection";

const Home: React.FC = () => {
  const [showChat, setShowChat] = useState<boolean>(false);

  const toggleChat = (): void => {
    setShowChat((prev) => !prev);
  };

  return (
    <div className="contact-page">
      {/* Background blur wrapper */}
      <div className={`main-content ${showChat ? "blurred" : ""}`}>
        <Navbar />
        <VismeContactForm />
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
