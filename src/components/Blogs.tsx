// components/AboutSection.tsx
import { FC } from "react";
import { motion, Variants } from "framer-motion";
import "../styles/AboutSection.css";

const textVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const AboutSection: FC = () => {
  return (
    <section className="blog-about-section">
      <motion.h2
        className="blog-about-title"
        initial="hidden"
        whileInView="visible"
        variants={textVariant}
        viewport={{ once: true }}
      >
        News & Insights
      </motion.h2>

      <motion.p
        className="blog-about-description"
        initial="hidden"
        whileInView="visible"
        variants={textVariant}
        viewport={{ once: true }}
      >
        Discover educational insights, and updates from our work.
      </motion.p>
    </section>
  );
};

export default AboutSection;