import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/home.css";

import Navbar from "../components/Navbar";
import Destinations from "../components/Destinations";
import ServiceTemplate from "../components/ServiceTemplate";
import Footer from "../components/Footer";
import ConsultationSection from "../components/ConsultationSection";
import BotIcon from "../components/BotIcon";
import { SERVICES } from "../data/services";

const Services: React.FC = () => {
  const { id } = useParams<{ id?: string }>();

  // Find service by ID
  const selectedService = id ? SERVICES.find((s) => s.id === id) : null;

  return (
    <div className="home">
      <div className= "main-content">
        <Navbar />
        {selectedService ? (
          <ServiceTemplate service={selectedService} />
        ) : (
          <Destinations />
        )}
        <ConsultationSection />
        <Footer />
      </div>

      <a href="https://wa.me/+233549213246" target="_blank" rel="noopener noreferrer">
      <BotIcon />
      </a>
    </div>
  );
};

export default Services;
