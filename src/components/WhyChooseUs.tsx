
import React from "react";
import {
  UserCheck,
  FileCheck2,
  Globe2,
  Plane,
  ShieldCheck,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import "../styles/WhyChooseUs.css";

const features = [
  {
    icon: UserCheck,
    title: "Personalized Counseling",
    desc: "Tailored study abroad guidance based on your goals and profile.",
    color: "blue",
  },
  {
    icon: FileCheck2,
    title: "Visa Assistance",
    desc: "Expert support to increase your chances of visa approval.",
    color: "red",
  },
  {
    icon: Globe2,
    title: "University Admissions",
    desc: "Strong knowledge of global university application processes.",
    color: "teal",
  },
  {
    icon: Plane,
    title: "Travel Advisory",
    desc: "Reliable guidance for smooth international travel planning.",
    color: "red",
  },
  {
    icon: ShieldCheck,
    title: "Transparent Process",
    desc: "Ethical, honest, and clear guidance every step of the way.",
    color: "blue",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 55,
    scale: 0.94,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* SECTION HEADER */}
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: -25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="why-eyebrow">
            <span className="eyebrow-line" />
            WHY CHOOSE US
            <span className="eyebrow-line" />
          </span>

          <h2>
            Why <span>TravEd Consult</span> is a Trusted Study Abroad Agency
          </h2>

          <p>
            Choosing the right study abroad consultant in Ghana can make a
            major difference in your success. At TravEd Consult, we carefully
            plan every stage of the international education and travel
            process to ensure students and professionals achieve their
            global ambitions.
          </p>
        </motion.div>

        {/* CONNECTOR LINES */}
        <div className="why-connectors" aria-hidden="true">
          {features.map((item, index) => (
            <div
              className={`why-connector connector-${item.color}`}
              key={index}
            >
              <span />
            </div>
          ))}
        </div>

        {/* INFOGRAPHIC CARDS */}
        <motion.div
          className="why-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.article
                className={`why-card ${item.color}`}
                key={item.title}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 },
                }}
              >
                {/* COLORED CIRCULAR BACKGROUND */}
                <div className="why-card-ring" />

                {/* WHITE PILL CARD */}
                <div className="why-card-inner">

                  <motion.div
                    className="why-icon"
                    whileHover={{
                      scale: 1.15,
                      rotate: 6,
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon size={36} strokeWidth={1.7} />
                  </motion.div>

                  <h3>{item.title}</h3>

                  <p>{item.desc}</p>

                  <div className="why-card-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
