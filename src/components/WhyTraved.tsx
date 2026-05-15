import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/WhyTraved.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const WhyTravedSection = () => {
  return (
    <section className="why-traved">
      <motion.div
        className="why-traved-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Content */}
        <motion.div className="why-left" variants={itemVariants}>
          <span className="why-label">Ready to Study Abroad?</span>

          <p className="why-text">
            Don&#39;t let the application process overwhelm you.
            <span className="bold"> Focus on your dream to study abroad. TravEd Consult will handle your university
              admission, visa guidance, and travel arrangements.</span> 
          </p>
        </motion.div>
          <Link to="/book" className="signin-link2">
            APPLY NOW
          </Link>

        {/* Right List */}
        <motion.ul className="why-list" variants={containerVariants}>
          {["Personalized guidance", "Proven success track", "Access to top institutions", "Expert visa and migration support"].map((item, index) => (
            <motion.li key={index} variants={itemVariants}>
              <Check size={18} strokeWidth={2.5} />
              <span>{item}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
};

export default WhyTravedSection;
