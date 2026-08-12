import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe2, GraduationCap, Plane } from "lucide-react";
import "../styles/ReadyToStudySection.css";

interface ReadyToStudySectionProps {
  onApply?: () => void;
}

const ReadyToStudySection: React.FC<ReadyToStudySectionProps> = ({
  onApply,
}) => {
  return (
    <section className="ready-study">
      <div className="ready-study__glow ready-study__glow--one" />
      <div className="ready-study__glow ready-study__glow--two" />

      <div className="ready-study__container">
        {/* Decorative side content */}
        <div className="ready-study__visual">
          <motion.div
            className="ready-study__orbit ready-study__orbit--one"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="ready-study__orbit ready-study__orbit--two"
            animate={{ rotate: -360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            className="ready-study__globe"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Globe2 size={54} strokeWidth={1.4} />
          </motion.div>

          <motion.div
            className="ready-study__floating-card ready-study__floating-card--top"
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <GraduationCap size={18} />
            <span>Dream University</span>
          </motion.div>

          <motion.div
            className="ready-study__floating-card ready-study__floating-card--bottom"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Plane size={18} />
            <span>Your journey starts here</span>
          </motion.div>
        </div>

        {/* Main content */}
        <motion.div
          className="ready-study__content"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="ready-study__eyebrow">
            <span className="ready-study__eyebrow-line" />
            Your next chapter starts here
          </span>

          <h2>
            Ready to
            <span> Study Abroad?</span>
          </h2>

          <p>
            Don't let the application process overwhelm you. Focus on your
            dream of studying abroad while we handle the details. From
            university admission and visa guidance to travel arrangements,
            TravEd Consult is with you every step of the way.
          </p>

          <div className="ready-study__actions">
            <motion.button
              type="button"
              className="ready-study__button"
              onClick={onApply}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Apply Now</span>
              <span className="ready-study__button-icon">
                <ArrowUpRight size={19} />
              </span>
            </motion.button>

            <span className="ready-study__note">
              Start your journey with confidence.
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom decorative line */}
      <div className="ready-study__bottom">
        <span>ADMISSIONS</span>
        <span>VISA GUIDANCE</span>
        <span>TRAVEL SUPPORT</span>
        <span>GLOBAL OPPORTUNITIES</span>
      </div>
    </section>
  );
};

export default ReadyToStudySection;