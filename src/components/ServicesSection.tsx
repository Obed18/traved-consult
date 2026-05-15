import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  FileText,
  Globe,
  Home,
  Plane,
  Info,
  CarTaxiFront,
  RefreshCcw,
  Users,
} from "lucide-react";
import "../styles/ServicesSection.css";

interface Service {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    title: "Career Counselling",
    description: "We will guide you on what course will best suit you passion",
    image:
      "https://shinecgroup.com/wp-content/uploads/2023/08/education-consulting-shine-consulting-2-1.png",
    icon: <Briefcase size={22} />,
  },
  {
    title: "University Selection Counseling",
    description:
      "We will guide you on what university will best fit your needs",
    image:
      "https://pixelbashdesigns.com/wp-content/uploads/2017/10/creative-agency-slider-3-compressed-2-2.jpg",
    icon: <GraduationCap size={22} />,
  },
  {
    title: "University Application",
    description:
      "We will assist in your University application and submission including follow-ups.",
    image:
      "https://vergecampus.com/wp-content/uploads/2020/09/using-college-common-application-to-apply-for-college-702x420.jpg",
    icon: <FileText size={22} />,
  },
  {
    title: "Visa Processing",
    description:
      "We will give you expert visa assistance including completion and submissions.",
    image:
      "https://www.westendconsultants.co.uk/wp-content/uploads/2024/11/UK-Visa-Processing-Times-%E2%80%93-A-Complete-Overview.jpg",
    icon: <Globe size={22} />,
  },
  {
    title: "Accommodation Booking",
    description: "We will assist you to secure accommodation",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.aDZjOJXlUbIk4nS4PkfO1wHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    icon: <Home size={22} />,
  },
  {
    title: "Flight Booking",
    description: "We will assist you to make flight arrangements",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.jFn6AKYQWD_8xj95nk3HbgHaE7?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    icon: <Plane size={22} />,
  },
  {
    title: "Pre Departure Briefing",
    description: "We will assist you with all your pre-departure needs.",
    image:
      "https://thumbs.dreamstime.com/b/making-conversation-way-to-departures-two-businesspeople-talking-together-walking-airport-making-276173561.jpg",
    icon: <Info size={22} />,
  },
  {
    title: "Airport Pickup",
    description:
      "We will liaise with the university representatives to pick you from the airport and help you to settle at the accommodation and university.",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.S3LA-TuJo4N0oHuXfXXamQHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    icon: <CarTaxiFront size={22} />,
  },
  {
    title: "Follow-ups",
    description:
      "We will continue to assist you in case of any advice needed to help you to adapt to the environment.",
    image:
      "https://img.freepik.com/premium-photo/black-man-laptop-phone-call-communication-office-web-design-online-conversation-smile-reading-tech-email-african-businessman-happy-planning-strategy-talking-smartphone-call_590464-136017.jpg",
    icon: <RefreshCcw size={22} />,
  },
  {
    title: "Life Skills Trainings & Workshops",
    description:
      "We organize trainings and workshops that empower personal development.",
    image:
      "https://asfar.org.uk/wp-content/uploads/2021/04/Life-Skills-4-TYPES-Final-2048x1453.png",
    icon: <Users size={22} />,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <motion.h2
        className="services-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            viewport={{ once: true }}
            whileHover={{ y: -6 }}
          >
            <div className="service-image">
              <img src={service.image} alt={service.title} />
            </div>

            <div className="service-content">
              <h3>
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
