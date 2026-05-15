// WhyStudyAbroadSection.tsx
import { motion } from "framer-motion";
import {
  BookOpen,
  TrendingUp,
  User,
  GraduationCap,
  HeartHandshake,
  Globe,
  Sparkles,
} from "lucide-react";
import "../styles/WhyStudyAbroadSection.css";

const reasons = [
  { icon: BookOpen, text: "Quality Education" },
  { icon: TrendingUp, text: "Wide Career Opportunities" },
  { icon: User, text: "Personal Development" },
  { icon: GraduationCap, text: "Graduate School Admissions" },
  { icon: HeartHandshake, text: "Make Lifelong Friends" },
  { icon: Globe, text: "Creates Global Mindset & Worldwide Exposure" },
  { icon: Sparkles, text: "Life Experience" },
];

export default function WhyStudyAbroadSection() {
  return (
    <section className="why-section">
      <div className="overlay" />

      <motion.div
        className="content-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="title"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why Study Abroad
        </motion.h2>

        <motion.p
          className="subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Studying abroad gives you the opportunity to experience the world as
          your classroom.
        </motion.p>

        <ul className="reasons">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.li
                key={index}
                className="reason-item"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <span className="icon-wrap">
                  <Icon size={22} strokeWidth={1.8} />
                </span>
                <span>{item.text}</span>
              </motion.li>
            );
          })}
        </ul>
      </motion.div>
    </section>
  );
}
