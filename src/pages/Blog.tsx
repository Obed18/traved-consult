import React from "react";
import "../styles/home.css";
import Navbar from "../components/Navbar";
import Blogs from "../components/Blogs";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";
import ConsultationSection from "../components/ConsultationSection";

const Home: React.FC = () => {
  return (
    <div className="home">
        <Navbar />
        <Blogs />
        <BlogSection />
        <ConsultationSection />
        <Footer />
    </div>
  );
};

export default Home;