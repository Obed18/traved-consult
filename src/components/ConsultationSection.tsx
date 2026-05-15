import React from "react";
import { motion } from "framer-motion";
import "../styles/ConsultationSection.css";
import { Link } from "react-router-dom";


const HeroSection: React.FC = () => {
  return (
    <section className="hero2-container">
      <motion.h1
        className="hero2-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Ready to Get Started?
      </motion.h1>

      <motion.p
        className="hero2-subtext"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Book a consultation and let TravEd guide your path to global success.
      </motion.p>

      <motion.div
        className="hero2-buttons"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link to="/book" className="link-text"><motion.button whileHover={{ scale: 1.05 }} className="primary-btn">
          Book Consultation
        </motion.button></Link>

        <Link to="/contact" className="link-text"> <motion.button whileHover={{ scale: 1.05 }} className="secondary-btn">
          Contact Us
        </motion.button> </Link>
      </motion.div>
    </section>
  );
};

export default HeroSection;