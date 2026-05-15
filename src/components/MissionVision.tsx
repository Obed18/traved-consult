import React from "react";
import { motion, Variants } from "framer-motion";
import { Target, Eye } from "lucide-react";
import "../styles/MissionVision.css";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: custom,
      ease: "easeInOut" as const,
    },
  }),
};

const MissionVision: React.FC = () => {
  return (
    <section className="missionVision-section">
      <div className="missionVision-bg-circle one"></div>
      <div className="missionVision-bg-circle two"></div>

      <div className="missionVision-container">
        <motion.div
          className="missionVision-header"
          variants={fadeUp}
          custom={0}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span className="missionVision-tag">Who We Are</span>

          <h2>
            Mission <span>&</span> Vision
          </h2>

          <p>
            Empowering African students and professionals with global
            opportunities through trusted guidance, education, and mobility
            solutions.
          </p>
        </motion.div>

        <div className="missionVision-grid">
          {/* Mission Card */}
          <motion.div
            className="missionVision-card"
            custom={0.1}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="missionVision-icon mission">
              <Target size={30} />
            </div>

            <h3>Our Mission</h3>

            <p>
              To empower African students and professionals to access global
              education, travel, and career opportunities through expert
              guidance, trusted partnerships, and world-class advisory services.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="missionVision-card"
            custom={0.2}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="missionVision-icon vision">
              <Eye size={30} />
            </div>

            <h3>Our Vision</h3>

            <p>
              To become Africa’s most trusted international education and
              mobility consultancy, connecting talent across the continent to
              opportunities around the world.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;