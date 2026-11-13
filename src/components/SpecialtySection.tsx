import React from "react";
import { motion } from "framer-motion";
import "../styles/SpecialtySection.css";
import { Link } from "react-router-dom";

const SpecialtySection: React.FC = () => {
  return (
    <section className="specialty-section">
      <div className="specialty-overlay"></div>

      <div className="specialty-container">
        {/* Left Content */}
        <motion.div
          className="specialty-content"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="specialty-badge">
            Education • Travel • Global Opportunities
          </span>

          <h2>
            We Are Specialized In{" "}
            <span>Travel & Education Abroad</span>
          </h2>

          <p>
            We help students and travelers unlock international
            opportunities through trusted school partnerships,
            expert guidance, and global support services across
            multiple countries.
          </p>
          <Link to="/services" className="link-text">
          <motion.button
            className="specialty-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Explore Opportunities
          </motion.button>
          </Link>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="specialty-visual"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            className="specialty-image"
            src="/blog1.jpg"
            alt="Students exploring an international destination together"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtySection;