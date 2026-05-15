import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { ServiceData } from "../types/service";
import "../styles/ServiceTemplate.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const stagger = {
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const Bullet: React.FC<{ text: string }> = ({ text }) => (
  <motion.li variants={fadeUp} className="ua-bullet">
    <CheckCircle size={16} className="ua-bullet-icon" />
    <span>{text}</span>
  </motion.li>
);

interface Props {
  service: ServiceData;
}

const ServiceTemplate: React.FC<Props> = ({ service }) => {
  return (
    <section className="ua-section">
      <div className="ua-container">
        {/* Header */}
        <motion.div
          className="ua-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="ua-eyebrow">SERVICE</span>
          <h1 className="ua-title">{service.title}</h1>
          <p className="ua-subtitle">{service.subtitle}</p>
        </motion.div>

        {/* What We Offer */}
        <motion.div
          className="ua-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="ua-heading">What We Offer</h3>
          <p className="ua-text">{service.offerText}</p>
        </motion.div>

        {/* Process */}
        <motion.div
          className="ua-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h3 className="ua-heading">Our Process</h3>

          <div className="ua-process-grid">
            {service.process.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="ua-process-item"
              >
                <h4>{item.title}</h4>
                <ul>
                  {item.bullets.map((b, i) => (
                    <Bullet key={i} text={b} />
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose */}
        <motion.div
          className="ua-block"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <h3 className="ua-heading">Why Choose Our Service</h3>
          <ul className="ua-why">
            {service.whyChoose.map((item, i) => (
              <Bullet key={i} text={item} />
            ))}
          </ul>
        </motion.div>

        {/* Get Started */}
        <motion.div
          className="ua-block ua-get-started"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="ua-heading">Get Started</h3>
          <p className="ua-text">{service.getStartedText}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceTemplate;