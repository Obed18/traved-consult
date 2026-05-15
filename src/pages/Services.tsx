import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/home.css";

import Navbar from "../components/Navbar";
import ServicesSection from "../components/ServicesSection";
import ServiceTemplate from "../components/ServiceTemplate";
import Footer from "../components/Footer";
import BotIcon from "../components/BotIcon";
import ChatSupport from "../components/ChatSupport";
import { SERVICES } from "../data/services";

const Services: React.FC = () => {
  const [showChat, setShowChat] = useState<boolean>(false);
  const { id } = useParams<{ id?: string }>();

  const toggleChat = (): void => {
    setShowChat((prev) => !prev);
  };

  // Find service by ID
  const selectedService = id ? SERVICES.find((s) => s.id === id) : null;

  return (
    <div className="home">
      {/* Background blur wrapper */}
      <div className={`main-content ${showChat ? "blurred" : ""}`}>
        <Navbar />
        {selectedService ? (
          <ServiceTemplate service={selectedService} />
        ) : (
          <ServicesSection />
        )}
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

export default Services;
