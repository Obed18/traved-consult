import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import FAQsSection from "../components/FAQsSection";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="home">
        <Navbar />
        <FAQsSection />
        <Footer />
    </div>
  );
};

export default Home;