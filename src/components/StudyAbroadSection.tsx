import React from "react";
import "../styles/StudyAbroadSection.css";
import { Globe, GraduationCap, Plane } from "lucide-react";

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "United Arab Emirates",
  "European Countries",
];

const StudyAbroadSection: React.FC = () => {
  return (
    <section className="study-section">
      <div className="study-container">
        {/* LEFT CONTENT */}
        <div className="study-text">
          <h2>Study Abroad Consultants in Ghana</h2>

          <p>
            TravEd Consult is recognized as a trusted study abroad agency in Ghana,
            assisting students who wish to pursue higher education in top
            destinations around the world.
          </p>

          <p>
            We help students gain admission into reputable universities and
            colleges in:
          </p>

          <ul className="country-list">
            {countries.map((country, index) => (
              <li key={index}>
                <Globe size={18} />
                {country}
              </li>
            ))}
          </ul>

          <p>
            Our team of international education consultants provides personalized
            guidance to ensure students choose the right universities, programs,
            and career pathways abroad.
          </p>

          <p>
            With extensive experience in student admissions, visa applications,
            and travel preparation, we simplify every step of the study abroad
            process.
          </p>
        </div>

        {/* RIGHT SIDE CARDS */}
        <div className="study-cards">
          <div className="card">
            <GraduationCap size={28} />
            <h4>Admissions Support</h4>
            <p>Guidance on selecting and applying to top universities.</p>
          </div>

          <div className="card">
            <Plane size={28} />
            <h4>Visa Assistance</h4>
            <p>End-to-end help with visa applications and approvals.</p>
          </div>

          <div className="card">
            <Globe size={28} />
            <h4>Travel Prep</h4>
            <p>We prepare you for a smooth transition abroad.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudyAbroadSection;