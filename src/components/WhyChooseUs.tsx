import React from "react";
import {
  UserCheck,
  FileCheck2,
  Globe2,
  Plane,
  ShieldCheck,
} from "lucide-react";
import { motion } from "framer-motion";
import "../styles/WhyChooseUs.css";

const features = [
  {
    icon: <UserCheck size={28} />,
    title: "Personalized Counseling",
    desc: "Tailored study abroad guidance based on your goals and profile.",
  },
  {
    icon: <FileCheck2 size={28} />,
    title: "Visa Assistance",
    desc: "Expert support to increase your chances of visa approval.",
  },
  {
    icon: <Globe2 size={28} />,
    title: "University Admissions",
    desc: "Strong knowledge of global university application processes.",
  },
  {
    icon: <Plane size={28} />,
    title: "Travel Advisory",
    desc: "Reliable guidance for smooth international travel planning.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Transparent Process",
    desc: "Ethical, honest, and clear guidance every step of the way.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-section">
      <div className="container">
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why TravEd Consult is a Trusted Study Abroad Agency</h2>
          <p>
            Choosing the right study abroad consultant in Ghana can make a major
            difference in your success. At TravEd Consult, we carefully plan
            every stage of the international education and travel process to
            ensure students and professionals achieve their global ambitions.
          </p>
        </motion.div>

        <div className="why-grid">
          {features.map((item, index) => (
            <motion.div
              className="why-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;