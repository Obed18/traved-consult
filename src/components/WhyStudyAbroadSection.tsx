import { motion, Variants } from "framer-motion";
import {
  GraduationCap,
  BriefcaseBusiness,
  UsersRound,
  BookOpenCheck,
  Users,
  Globe2,
  Plane,
} from "lucide-react";
import "../styles/WhyStudyAbroadSection.css";

const benefits = [
  {
    id: "01",
    title: "Quality Education",
    description:
      "Access internationally recognized universities with innovative teaching methods and globally respected qualifications.",
    icon: GraduationCap,
    featured: false,
  },
  {
    id: "02",
    title: "Career Opportunities",
    description:
      "Expand your professional network and unlock employment opportunities across international markets.",
    icon: BriefcaseBusiness,
    featured: false,
  },
  {
    id: "03",
    title: "Personal Development",
    description:
      "Build confidence, independence, resilience, and valuable life skills through new experiences.",
    icon: UsersRound,
    featured: true,
  },
  {
    id: "04",
    title: "Graduate Admissions",
    description:
      "Strengthen your academic profile for postgraduate and research opportunities worldwide.",
    icon: BookOpenCheck,
    featured: false,
  },
  {
    id: "05",
    title: "Lifelong Friendships",
    description:
      "Create meaningful relationships with people from diverse cultures and backgrounds.",
    icon: Users,
    featured: false,
  },
  {
    id: "06",
    title: "Global Mindset",
    description:
      "Develop cultural awareness and broaden your perspective through worldwide exposure.",
    icon: Globe2,
    featured: true,
  },
  {
    id: "07",
    title: "Life Experience",
    description:
      "Travel, explore, and embrace unforgettable experiences that shape your future beyond the classroom.",
    icon: Plane,
    featured: true,
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyStudyAbroad() {
  return (
    <section className="why-study">
      <div className="why-container">
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="section-tag">WHY STUDY ABROAD</span>

          <h2>
            The world becomes <span>your classroom.</span>
          </h2>

          <p>
            Studying abroad opens doors to exceptional education, international
            careers, personal growth, and unforgettable life experiences that
            prepare you for a truly global future.
          </p>
        </motion.div>

        <motion.div
          className="benefits-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <motion.div
                key={benefit.id}
                variants={item}
                whileHover={{ y: -8 }}
                className={`benefit-card ${
                  benefit.featured ? "featured" : ""
                }`}
              >
                <div className="card-top">
                  <span className="card-number">{benefit.id}</span>

                  <div className="icon-box">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                </div>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>

                <div className="card-glow" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
