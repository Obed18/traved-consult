
import React from "react";
import { motion } from "framer-motion";
import "../styles/PartnersSection.css";

interface Partner {
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    name: "Partner One",
    logo: "/partners/leverage-edu.svg",
  },
  {
    name: "Partner Two",
    logo: "/partners/gus.jpg",
  },
  {
    name: "Partner Three",
    logo: "/partners/noble-education-group.png",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const logoVariants = {
  hidden: {
    opacity: 0,
    y: 18,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const PartnersSection: React.FC = () => {
  return (
    <section className="partners-section">
      <div className="partners-container">

        {/* Left Heading */}
        <motion.div
          className="partners-heading"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2>
            Our Trusted
            <br />
            Partners
          </h2>
        </motion.div>

        {/* Right Partner Logos */}
        <motion.div
          className="partners-logos"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {partners.map((partner, index) => (
            <motion.div
              className="partner-logo"
              key={partner.name}
              variants={logoVariants}
              whileHover={{
                y: -5,
                scale: 1.04,
                transition: { duration: 0.25 },
              }}
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                loading="lazy"
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default PartnersSection;
