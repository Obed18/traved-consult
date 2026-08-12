import React from "react";
import { motion, Variants } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  UserRoundCog,
} from "lucide-react";
import { ServiceData } from "../types/service";
import "../styles/ServiceTemplate.css";

interface Props {
  service: ServiceData;
}

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const Bullet: React.FC<{ text: string }> = ({ text }) => (
  <motion.li variants={fadeUp} className="st-bullet">
    <span className="st-bullet-icon">
      <CheckCircle size={15} />
    </span>

    <span>{text}</span>
  </motion.li>
);

const ServiceTemplate: React.FC<Props> = ({ service }) => {
  return (
    <main className="st-page">
      {/* =========================================
          HERO / HEADER
      ========================================= */}
      <section className="st-hero">
        <div className="st-hero-glow st-hero-glow-one" />
        <div className="st-hero-glow st-hero-glow-two" />

        <div className="st-container">
          <motion.div
            className="st-hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className="st-eyebrow" variants={fadeUp}>
              <span className="st-eyebrow-line" />
              OUR SERVICE
            </motion.div>

            <motion.h1 className="st-title" variants={fadeUp}>
              {service.title}
            </motion.h1>

            <motion.p className="st-subtitle" variants={fadeUp}>
              {service.tagline}
            </motion.p>

            <motion.div
              className="st-hero-meta"
              variants={fadeUp}
            >
              <div className="st-meta-item">
                <ClipboardCheck size={17} />
                <span>Professional Guidance</span>
              </div>

              <div className="st-meta-divider" />

              <div className="st-meta-item">
                <UserRoundCog size={17} />
                <span>Personalized Support</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <div className="st-hero-bottom-shape" />
      </section>

      {/* =========================================
          MAIN CONTENT
      ========================================= */}
      <section className="st-content">
        <div className="st-container">
          {/* =====================================
              WHAT WE OFFER
          ===================================== */}
          <motion.section
            className="st-offer-section"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div
              className="st-section-label"
              variants={fadeUp}
            >
              <span>01</span>
              WHAT WE OFFER
            </motion.div>

            <motion.div
              className="st-offer-grid"
              variants={fadeUp}
            >
              <div className="st-section-title-wrap">
                <h2>
                  Support designed
                  <br />
                  around <em>you.</em>
                </h2>
              </div>

              <div className="st-offer-copy">
                <p>{service.heroDescription}</p>
              </div>
            </motion.div>

            <motion.div className="st-offer-list" variants={stagger}>
              {service.offerSections.map((section) => (
                <motion.article
                  key={section.title}
                  className="st-offer-card"
                  variants={fadeUp}
                >
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>

                  {section.bullets && (
                    <ul className="st-bullet-list">
                      {section.bullets.map((bullet) => (
                        <Bullet key={bullet} text={bullet} />
                      ))}
                    </ul>
                  )}
                </motion.article>
              ))}
            </motion.div>
          </motion.section>

          {/* =====================================
              PROCESS
          ===================================== */}
          {service.process && (
            <motion.section
              className="st-process-section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              <motion.div
                className="st-section-label"
                variants={fadeUp}
              >
                <span>02</span>
                OUR PROCESS
              </motion.div>

              <motion.div
                className="st-process-header"
                variants={fadeUp}
              >
                <div>
                  <h2>{service.process.title}</h2>
                </div>

                <p>
                  {service.process.description ||
                    "A structured approach that gives you the guidance, clarity and support you need at every stage."}
                </p>
              </motion.div>

              <div className="st-process-grid">
                {service.process.steps.map((item, index) => (
                  <motion.article
                    key={`${item.title}-${index}`}
                    className="st-process-card"
                    variants={fadeUp}
                    whileHover={{
                      y: -7,
                      transition: {
                        duration: 0.25,
                      },
                    }}
                  >
                    <div className="st-process-card-top">
                      <span className="st-process-number">
                        {item.number || String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="st-process-icon">
                        <ClipboardCheck size={18} />
                      </span>
                    </div>

                    <h3>{item.title}</h3>

                    <div className="st-card-divider" />

                    <p>{item.description}</p>
                  </motion.article>
                ))}
              </div>
            </motion.section>
          )}

          {/* =====================================
              WHY CHOOSE US
          ===================================== */}
          {service.whyChoose && (
            <motion.section
              className="st-why-section"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={stagger}
            >
              <motion.div
                className="st-section-label"
                variants={fadeUp}
              >
                <span>03</span>
                WHY CHOOSE US
              </motion.div>

              <motion.div
                className="st-why-header"
                variants={fadeUp}
              >
                <h2>{service.whyChoose.title}</h2>

                <p>
                  We combine professional expertise with personalized
                  support to help you move forward with confidence.
                </p>
              </motion.div>

              <motion.div
                className="st-why-grid"
                variants={stagger}
              >
                {service.whyChoose.items.map((item, index) => (
                  <motion.div
                    key={`${item.title}-${index}`}
                    className="st-why-item"
                    variants={fadeUp}
                  >
                    <div className="st-why-check">
                      <CheckCircle size={17} />
                    </div>

                    <div className="st-why-copy">
                      <span>{item.title}</span>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>
          )}

          {/* =====================================
              GET STARTED
          ===================================== */}
          <motion.section
            className="st-get-started"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeUp}
          >
            <div className="st-cta-decoration" />

            <div className="st-cta-content">
              <span className="st-cta-label">
                READY TO BEGIN?
              </span>

              <h2>{service.cta.title}</h2>

              <p>{service.cta.description}</p>

              <button className="st-cta-button">
                {service.cta.buttonText}
                <ArrowRight size={18} />
              </button>
            </div>
          </motion.section>
        </div>
      </section>
    </main>
  );
};

export default ServiceTemplate;
