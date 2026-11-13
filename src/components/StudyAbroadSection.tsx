
import React from "react";
import { motion, Variants } from "framer-motion";
import {
  GraduationCap,
  Plane,
  ArrowUpRight,
  Check,
  CheckCircle2,
  MapPin,
  FileCheck,
  Luggage,
  Sparkles,
  Users,
} from "lucide-react";
import "../styles/StudyAbroadSection.css";
import { Link } from "react-router-dom";


const countries = [
  { name: "United States", flag: "/countries/us.jpg" },
  { name: "Canada", flag: "/countries/canada.jpg" },
  { name: "United Kingdom", flag: "/countries/uk.jpg" },
  { name: "Australia", flag: "/countries/australia.jpg" },
  { name: "United Arab Emirates", flag: "/countries/uae.jpg" },
  { name: "European Countries", flag: "/countries/europe.jpg" },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const StudyAbroadSection: React.FC = () => {
  return (
    <section className="study-section">
      <div className="study-container">

        {/* SECTION HEADING */}
        <motion.div
          className="study-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <h2>
            Your Journey to
            <br className="study-mobile-break" />
            <span> Studying Abroad</span> Starts Here
          </h2>

          <p>
            Personalized guidance, expert support, and everything you need
            to make your international education dreams a reality.
          </p>
        </motion.div>

        {/* THREE FEATURE CARDS */}
        <motion.div
          className="study-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >

          {/* CARD ONE - ADMISSIONS */}
          <motion.div
            className="study-card study-card-admissions"
            variants={cardVariants}
            whileHover={{ y: -7 }}
          >
            <div className="study-card-icon blue-icon">
              <GraduationCap size={23} strokeWidth={2.2} />
            </div>

            <h3>Admissions Support</h3>

            <p className="study-card-description">
              Your gateway to quality education at leading institutions
              around the world.
            </p>

            <div className="admissions-panel">
              <h4>Our Study Destinations</h4>

              <div className="destination-list">
                {countries.map(({ name, flag }, index) => (
                  <motion.div
                    className="destination-item"
                    key={name}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                  >
                    <img
                      className="study-destination-flag"
                      src={flag}
                      alt={`${name} flag`}
                      loading="lazy"
                    />
                    <span>{name}</span>
                    <Check size={14} className="destination-check" />
                  </motion.div>
                ))}
              </div>
            <Link to="/book" className="link-text">
              <div className="admissions-footer">
                <span>Book us now</span>
                <ArrowUpRight size={16} />
              </div>
              </Link>
            </div>
          </motion.div>

          {/* CARD TWO - VISA ASSISTANCE */}
          <motion.div
            className="study-card study-card-visa"
            variants={cardVariants}
            whileHover={{ y: -7 }}
          >
            <div className="visa-card-content">
              <div className="study-card-icon white-icon">
                <Users size={23} strokeWidth={2.2} />
              </div>

              <h3>Visa Assistance</h3>

              <p className="study-card-description">
                Expert guidance through your visa application process,
                helping you move closer to your dream destination.
              </p>

              <div className="visa-features">
                <span>
                  <CheckCircle2 size={15} />
                  Application guidance
                </span>
                <span>
                  <CheckCircle2 size={15} />
                  Document preparation
                </span>
              </div>
            </div>

            <div className="visa-image-wrapper">
              {/* Replace this image with your own study abroad photo */}
              <img
                src="/images/students-abroad.jpg"
                alt="International students enjoying their study abroad journey"
                className="visa-student-image"
              />

              <div className="visa-image-overlay" />

              <div className="visa-image-caption">
                <div className="visa-caption-icon">
                  <GraduationCap size={19} />
                </div>
                <div>
                  <strong>Your Future Awaits</strong>
                  <span>Dream bigger. Go further.</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CARD THREE - TRAVEL PREPARATION */}
          <motion.div
            className="study-card study-card-travel"
            variants={cardVariants}
            whileHover={{ y: -7 }}
          >
            <div className="study-card-icon purple-icon">
              <Plane size={23} fill="currentColor" />
            </div>

            <h3>Travel Preparation</h3>

            <p className="study-card-description">
              We help you prepare for a smooth and confident transition
              to your new country.
            </p>

            <div className="travel-panel">
              <div className="travel-success-icon">
                <Check size={25} strokeWidth={2.5} />
              </div>

              <h4>Ready for Your Journey!</h4>

              <p>
                Your study abroad preparation starts here.
              </p>

              <div className="travel-divider" />

              <div className="travel-summary">
                <span>Preparation Checklist</span>
                <span>Completed</span>
              </div>

              <div className="travel-checklist">
                <div>
                  <FileCheck size={15} />
                  <span>Admission guidance</span>
                  <CheckCircle2 size={15} />
                </div>

                <div>
                  <MapPin size={15} />
                  <span>Destination planning</span>
                  <CheckCircle2 size={15} />
                </div>

                <div>
                  <Luggage size={15} />
                  <span>Travel preparation</span>
                  <CheckCircle2 size={15} />
                </div>
              </div>
            <Link to="/contact" className="link-text">
              <div className="travel-footer">
                <span>Start your journey</span>
                <ArrowUpRight size={16} />
              </div>
              </Link>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default StudyAbroadSection;
