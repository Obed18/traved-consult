import React, { useState } from "react";
import "../styles/home.css";

import Navbar from "../components/Navbar";
import PricingPackagesSection from "../components/PricingPackagesSection";
import BookingFormSection from "../components/BookingFormSection";
import Footer from "../components/Footer";
import BotIcon from "../components/BotIcon";
import ChatSupport from "../components/ChatSupport";

interface PackageInfo {
  title: string;
  price: string;
}

const Home: React.FC = () => {
  const [showChat, setShowChat] = useState<boolean>(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState<boolean>(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageInfo | undefined>();

  const toggleChat = (): void => {
    setShowChat((prev) => !prev);
  };

  const handleBookNow = (packageInfo: PackageInfo): void => {
    setSelectedPackage(packageInfo);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = (): void => {
    setIsBookingModalOpen(false);
  };

  return (
    <div className="home">
      {/* Background blur wrapper */}
      <div className={`main-content ${showChat ? "blurred" : ""}`}>
        <Navbar />
        <PricingPackagesSection onBook={handleBookNow} />
        <Footer />
      </div>

      {/* Booking Modal */}
      <BookingFormSection
        isOpen={isBookingModalOpen}
        onClose={closeBookingModal}
        selectedPackage={selectedPackage}
      />

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
