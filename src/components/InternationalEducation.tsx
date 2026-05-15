import React from "react";
import { motion } from "framer-motion";
import { Globe2, GraduationCap, Users, MapPin } from "lucide-react";
import "../styles/InternationalEducation.css";

const points = [
  {
    icon: <Globe2 size={22} />,
    title: "Global Partnerships",
    text: "We collaborate with universities and institutions across the world to open doors for students.",
  },
  {
    icon: <GraduationCap size={22} />,
    title: "Quality Education",
    text: "We help students secure admission into reputable universities offering globally recognized degrees.",
  },
  {
    icon: <Users size={22} />,
    title: "Student Success",
    text: "Many of our students have successfully studied and graduated from top institutions abroad.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Top Destinations",
    text: "We place students in the USA, Canada, Australia, and across Europe.",
  },
];

const InternationalEducation: React.FC = () => {
  return (
    <section className="intl-section">
      <div className="intl-container">
        {/* LEFT CONTENT */}
        <motion.div
          className="intl-left"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2>
            International Education Opportunities for African Students
          </h2>

          <p>
            TravEd Consult believes that international education should be
            accessible to every ambitious student in Ghana and across Africa.
            Through our partnerships with universities and institutions
            worldwide, we help students secure quality higher education
            opportunities abroad.
          </p>

          <p>
            Many students we have supported have successfully gained admission
            and graduated from universities in the USA, Canada, Australia, and
            Europe, earning globally recognized degrees that enhance their
            careers.
          </p>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div className="intl-right">
          {points.map((item, index) => (
            <motion.div
              className="intl-card"
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="icon">{item.icon}</div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalEducation;