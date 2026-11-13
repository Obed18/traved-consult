
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
import type { CSSProperties } from "react";
import "../styles/WhyStudyAbroadSection.css";

const benefits = [
  {
    id: "01",
    title: "Quality Education",
    description:
      "Access internationally recognized universities with innovative teaching methods and globally respected qualifications.",
    icon: GraduationCap,
    accent: "#e52e4b",
    featured: false,
  },
  {
    id: "02",
    title: "Career Opportunities",
    description:
      "Expand your professional network and unlock employment opportunities across international markets.",
    icon: BriefcaseBusiness,
    accent: "#343b91",
    featured: false,
  },
  {
    id: "03",
    title: "Personal Development",
    description:
      "Build confidence, independence, resilience, and valuable life skills through new experiences.",
    icon: UsersRound,
    accent: "#42145e",
    featured: true,
  },
  {
    id: "04",
    title: "Graduate Admissions",
    description:
      "Strengthen your academic profile for postgraduate and research opportunities worldwide.",
    icon: BookOpenCheck,
    accent: "#e52e4b",
    featured: false,
  },
  {
    id: "05",
    title: "Lifelong Friendships",
    description:
      "Create meaningful relationships with people from diverse cultures and backgrounds.",
    icon: Users,
    accent: "#343b91",
    featured: false,
  },
  {
    id: "06",
    title: "Global Mindset",
    description:
      "Develop cultural awareness and broaden your perspective through worldwide exposure.",
    icon: Globe2,
    accent: "#42145e",
    featured: true,
  },
  {
    id: "07",
    title: "Life Experience",
    description:
      "Travel, explore, and embrace unforgettable experiences that shape your future beyond the classroom.",
    icon: Plane,
    accent: "#e52e4b",
    featured: true,
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 45,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function WhyStudyAbroad() {
  return (
    <section className="why-study">
      <div className="why-container">

        {/* Section Header */}
        <motion.div
          className="why-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-tag">
            WHY STUDY ABROAD
          </span>

          <h2>
            The world becomes <span>your classroom.</span>
          </h2>

          <p>
            Studying abroad opens doors to exceptional education,
            international careers, personal growth, and unforgettable
            life experiences that prepare you for a truly global future.
          </p>

          <div className="header-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
        </motion.div>

        {/* Benefits Cards */}
        <motion.div
          className="benefits-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <motion.article
                key={benefit.id}
                className={`benefit-card ${
                  benefit.featured ? "featured" : ""
                }`}
                variants={cardVariants}
                style={
                  {
                    "--card-accent": benefit.accent,
                  } as CSSProperties
                }
                whileHover={{
                  y: -10,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                }}
              >
                {/* White Card Surface */}
                <div className="benefit-card-inner">

                  <div className="card-top">
                    <div className="icon-box">
                      <Icon
                        size={43}
                        strokeWidth={1.7}
                      />
                    </div>

                    <div className="card-accent-bar" />
                  </div>

                  <div className="card-content">
                    <h3>{benefit.title}</h3>

                    <p>{benefit.description}</p>
                  </div>

                </div>

                {/* Colored Bottom Platform */}
                <div className="card-base" />

                {/* Number Badge */}
                <div className="card-number">
                  <span>{benefit.id}</span>
                </div>

              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
