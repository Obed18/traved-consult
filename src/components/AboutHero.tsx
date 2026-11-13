
import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import "../styles/AboutHero.css";

interface AboutSectionProps {
  imageSrc?: string;
  onGetStarted?: () => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({
  imageSrc = "/images/students.jpg",
  onGetStarted,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.16,
      },
    },
  };

  return (
    <section className="traved-about-section">
      <div className="traved-about-container">

        {/* TOP INTRODUCTION */}
        <motion.div
          className="traved-about-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* LEFT CONTENT */}
          <div className="traved-about-heading">
            <motion.span
              className="traved-about-eyebrow"
              variants={fadeUp}
            >
              ABOUT US
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Your Global Partner For
              <br className="traved-desktop-break" />
              Education, Travel, And
              <br className="traved-desktop-break" />
              Migration Success
            </motion.h2>

            <motion.a
              href="/contact"
              className="traved-about-button"
              variants={fadeUp}
              onClick={(e) => {
                if (onGetStarted) {
                  e.preventDefault();
                  onGetStarted();
                }
              }}
            >
              Get Started
              <ArrowUpRight size={17} strokeWidth={2} />
            </motion.a>
          </div>

          {/* RIGHT DESCRIPTION */}
          <motion.div
            className="traved-about-description"
            variants={fadeUp}
          >
            <p>
              TravEd Consult is a leading study abroad consultancy and
              travel advisory firm in Ghana, dedicated to helping students
              and professionals access global education and international
              opportunities. Based in Accra, Ghana, we provide expert
              guidance for individuals who want to study abroad, travel
              internationally, relocate, or pursue global career
              opportunities.
            </p>
          </motion.div>
        </motion.div>

        {/* BOTTOM CONTENT GRID */}
        <motion.div
          className="traved-about-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
        >

          {/* OUR STORY IMAGE CARD */}
          <motion.div
            className="traved-story-card"
            variants={fadeUp}
            whileHover={
              shouldReduceMotion
                ? undefined
                : { y: -5, transition: { duration: 0.3 } }
            }
          >
            <img
              src={imageSrc}
              alt="TravEd Consult helping students explore global education opportunities"
              className="traved-story-image"
              loading="lazy"
            />

            <div className="traved-story-overlay" />

            <div className="traved-story-content">
              <span className="traved-story-label">Our Story</span>

              <p>
                As experienced international education consultants and
                travel advisors, we specialize in university admissions
                abroad, student visa applications, scholarship
                opportunities, and international travel planning.
                We make global opportunities more accessible through
                reliable guidance and personalized support.
              </p>
            </div>
          </motion.div>

          {/* MISSION AND VISION */}
          <div className="traved-about-cards">

            {/* MISSION CARD */}
            <motion.div
              className="traved-info-card traved-mission-card"
              variants={fadeUp}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -5, transition: { duration: 0.3 } }
              }
            >
              <div className="traved-info-content">
                <h3>Our Mission</h3>

                <p>
                  To empower African students and professionals to access
                  global education, travel, and career opportunities through
                  expert guidance, trusted partnerships, and world-class
                  advisory services.
                </p>
              </div>
            </motion.div>

            {/* VISION CARD */}
            <motion.div
              className="traved-info-card traved-vision-card"
              variants={fadeUp}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -5, transition: { duration: 0.3 } }
              }
            >
              <div className="traved-info-content">
                <h3>Our Vision</h3>

                <p>
                  To become Africa's most trusted international education
                  and mobility consultancy, connecting talent across the
                  continent to opportunities around the world.
                </p>
              </div>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AboutSection;
