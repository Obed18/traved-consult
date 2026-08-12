import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Blogs from "../components/Blogs";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import ConsultationSection from "../components/ConsultationSection";
import BotIcon from "../components/BotIcon";


const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="main-content">
        <Navbar />
        <Blogs />
        <BlogSection />
        <ConsultationSection />
        <Footer />
    </div>
      <a href="https://wa.me/+233549213246" target="_blank" rel="noopener noreferrer">
      <BotIcon/>
      </a>
      </div>
    
  );
};

export default Home;