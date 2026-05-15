import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Globe2,
  Building2,
  Users2,
} from "lucide-react";
import "../styles/SpecialtySection.css";

const stats = [
  {
    id: 1,
    icon: GraduationCap,
    value: "11",
    label: "Schools Represented",
  },
  {
    id: 2,
    icon: Globe2,
    value: "9",
    label: "Countries",
  },
  {
    id: 3,
    icon: Building2,
    value: "Offices",
    label: "Worldwide Presence",
  },
  {
    id: 4,
    icon: Users2,
    value: "10",
    label: "Team Members",
  },
];

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

          <motion.button
            className="specialty-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            Explore Opportunities
          </motion.button>
        </motion.div>

        {/* Right Stats */}
        <motion.div
          className="specialty-stats"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.id}
                className="specialty-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="specialty-icon">
                  <Icon size={28} />
                </div>

                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialtySection;