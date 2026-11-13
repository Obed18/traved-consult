
import React, { FormEvent, useRef } from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  Globe2,
  FileCheck,
  Plane,
  CheckCircle2,
  Headset,
  ShieldCheck,
  Award,
  ArrowRight,
  Users,
  MessageCircle,
} from "lucide-react";

import "../styles/StartJourneySection.css";

interface StartJourneySectionProps {
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

const supportItems = [
  {
    icon: GraduationCap,
    title: "University Selection",
    description: "Find the right university for your academic goals.",
  },
  {
    icon: FileCheck,
    title: "Admission Support",
    description: "Get professional guidance through your admission process.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description: "Explore scholarship opportunities for your studies.",
  },
  {
    icon: Plane,
    title: "Student Visa Support",
    description: "Prepare confidently for your student visa application.",
  },
];

const qualifications = [
  "WAEC / High School Certificate",
  "Diploma or HND",
  "Bachelor's Degree",
  "Master's Degree",
];

const StartJourneySection: React.FC<StartJourneySectionProps> = ({
  onSubmit,
}) => {
  const formRef = useRef<HTMLFormElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (onSubmit) {
      onSubmit(event);
    } else {
      event.preventDefault();
    }
  };

  return (
    <section className="journey-section">
      <motion.div
        className="journey-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        {/* LEFT: ENQUIRY FORM */}

        <motion.div
          className="journey-left"
          variants={itemVariants}
        >
          <div className="journey-heading">
            <span className="journey-eyebrow">
              YOUR FUTURE STARTS HERE
            </span>

            <h2>Get Free Study Abroad Advice</h2>

            <p>
              Are you planning to study abroad from Ghana?
              TravEd Consult is here to help you make the right
              decisions and successfully begin your international
              education journey.
            </p>
          </div>

          <form
            className="journey-form"
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <div className="journey-field">
              <label htmlFor="journey-name">Full Name</label>
              <input
                id="journey-name"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <div className="journey-field">
              <label htmlFor="journey-email">Email Address</label>
              <input
                id="journey-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <div className="journey-field">
              <label htmlFor="journey-phone">
                Phone / WhatsApp Number
              </label>
              <input
                id="journey-phone"
                name="phone"
                type="tel"
                placeholder="Enter your contact number"
                autoComplete="tel"
                required
              />
            </div>

            <div className="journey-field">
              <label htmlFor="journey-country">
                Country of Interest
              </label>
              <select
                id="journey-country"
                name="country"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select your preferred country
                </option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">United Kingdom</option>
                <option value="Australia">Australia</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="journey-field">
              <label htmlFor="journey-program">
                Program Level
              </label>
              <select
                id="journey-program"
                name="programLevel"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select program level
                </option>
                <option value="Bachelor's">Bachelor's</option>
                <option value="Master's">Master's</option>
                <option value="PhD">PhD</option>
                <option value="Professional">Professional</option>
              </select>
            </div>

            <div className="journey-field">
              <label htmlFor="journey-intake">
                Preferred Intake
              </label>
              <select
                id="journey-intake"
                name="preferredIntake"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Select preferred intake
                </option>
                <option value="Fall">Fall</option>
                <option value="Spring">Spring</option>
                <option value="Summer">Summer</option>
              </select>
            </div>

            <div className="journey-submit">
              <motion.button
                type="submit"
                className="journey-submit-btn"
                whileHover={{ scale: 1.035 }}
                whileTap={{ scale: 0.97 }}
              >
                Submit Application
                <ArrowRight size={19} />
              </motion.button>
            </div>
          </form>

          <motion.div
            className="journey-form-note"
            variants={itemVariants}
          >
            <ShieldCheck size={17} />
            <span>
              Your information is handled with care and
              confidentiality.
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT: INFORMATION PANEL */}

        <motion.aside
          className="journey-right"
          variants={itemVariants}
        >
          <div className="journey-right-content">
            <div className="journey-icon-circle">
              <Headset size={27} />
            </div>

            <h3>
              Your Journey.
              <br />
              Our Guidance.
            </h3>

            <p className="journey-right-intro">
              Hi! We're always here to help you take the next
              step towards your international education goals.
            </p>

            <div className="journey-support-list">
              {supportItems.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    className="journey-support-card"
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.12,
                    }}
                  >
                    <div className="journey-support-icon">
                      <Icon size={23} />
                    </div>

                    <div className="journey-support-text">
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="journey-right-divider" />

            <div className="journey-eligibility">
              <div className="journey-eligibility-heading">
                <div className="journey-eligibility-icon">
                  <Users size={20} />
                </div>

                <h4>Who Can Apply?</h4>
              </div>

              <p>
                You may qualify to study abroad if you have:
              </p>

              <ul>
                {qualifications.map((qualification) => (
                  <li key={qualification}>
                    <CheckCircle2 size={16} />
                    <span>{qualification}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="journey-right-footer">
              <div className="journey-footer-text">
                <MessageCircle size={19} />
                <span>Ready to get started?</span>
              </div>

              <motion.button
                type="button"
                className="journey-consult-btn"
                onClick={scrollToForm}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Book Consultation
                <ArrowRight size={17} />
              </motion.button>
            </div>
          </div>

          <div className="journey-decoration journey-decoration-one" />
          <div className="journey-decoration journey-decoration-two" />
        </motion.aside>
      </motion.div>
    </section>
  );
};

export default StartJourneySection;
