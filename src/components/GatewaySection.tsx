import React from "react";
import { Globe, GraduationCap, Plane, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import "../styles/GatewaySection.css";

const GatewaySection: React.FC = () => {
  return (
    <section className="gateway-section">
      <div className="gateway-container">
        {/* Left Content */}
        <motion.div
          className="gateway-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Your Gateway to Global Education & Travel</h2>

          <p>
            Whether you are a student searching for study abroad opportunities,
            a professional exploring international relocation options, or someone
            looking for trusted travel agency services in Ghana, TravEd Consult
            is here to guide you.
          </p>

          <p>
            We simplify the journey to international education, global mobility,
            and overseas opportunities.
          </p>

          <p className="gateway-highlight">
            TravEd Consult – Making global opportunities accessible, one journey
            at a time.
          </p>

          <button className="gateway-btn">
            Get Started <ArrowRight size={18} />
          </button>
        </motion.div>

        {/* Right Cards */}
        <motion.div
          className="gateway-cards"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="gateway-card">
            <GraduationCap size={28} />
            <h4>Study Abroad</h4>
            <p>Access top universities and global academic opportunities.</p>
          </div>

          <div className="gateway-card">
            <Plane size={28} />
            <h4>Travel Services</h4>
            <p>Reliable travel planning and visa assistance.</p>
          </div>

          <div className="gateway-card">
            <Globe size={28} />
            <h4>Global Mobility</h4>
            <p>Relocation and international career guidance made easy.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GatewaySection;