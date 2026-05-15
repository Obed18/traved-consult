import { motion } from "framer-motion";
import "../styles/AboutHero.css";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const AboutHero = () => {
  return (
    <section className="about-hero">
      <motion.div
        className="about-hero-container"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={fadeUp} className="about-hero-left">
          <p className="hero-brand">ABOUT US</p>
        </motion.div>

        <motion.div variants={fadeUp} className="about-hero-right">
          <motion.h1 variants={fadeUp} className="about-hero-title">
            Your Global Partner For
            <br />
            Education, Travel, And
            <br />
            Migration Success
          </motion.h1>

          <motion.p variants={fadeUp} className="about-hero-description">
            TravEd Consult is a leading study abroad consultancy and travel advisory firm in
            Ghana, dedicated to helping students and professionals access global education and
            international opportunities. Based in Accra, Ghana, we provide expert guidance for
            individuals who want to study abroad, travel internationally, relocate, or pursue
            global career opportunities.
            As experienced international education consultants and travel advisors, we
            specialize in providing reliable support for university admissions abroad, student
            visa applications, scholarship opportunities, and international travel planning.
            Our mission is to make the process of studying abroad and international travel
            simple, transparent, and successful for African students and professionals.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutHero;