import React from "react";
import { motion } from "framer-motion";
import { Instagram, Linkedin } from "lucide-react";
import "../styles/TeamSection.css";

const team = [
  {
    name: "Gracious Kajah",
    role: "Partner and Resident Educational Consultant",
    img: "/gracious.avif",
  },
  {
    name: "Benjamin Ekow Asem-Mensah",
    role: "Partner & Resident Financial Aid Consultant",
    img: "/asem.avif",
  },
  {
    name: "Terrick Nii Obodai Torgbor",
    role: "Managing Partner & Operations Lead",
    img: "/terrick.avif",
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="team-section">
      <div className="team-top">  
      <h2 className="team-head">Our Team</h2>
      <p className="team-p">Our team is dedicated to helping students achieve their academic dreams by guiding them through every step of their international education journey.</p>
      </div>
      <div className="team-wrapper">
        {team.map((member, index) => (
          <motion.div
            className="team-card"
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 180 }}
          >
            <img src={member.img} alt={member.name} className="team-img" />

            <h3>{member.name}</h3>
            <p>{member.role}</p>

            {/* <div className="social-icons">
              <Instagram size={18} />
              <Linkedin size={18} />
            </div> */}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;