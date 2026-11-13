import React from "react";
import "../styles/ImpactSection.css";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ImpactSection: React.FC = () => {
  return (
    <section className="impact-section">
      <div className="impact-container">
        {/* LEFT */}
        <div className="impact-left">
          <span className="impact-badge">Transforming Futures Worldwide</span>

          <h2 className="impact-title">
            Our <span>Impact</span>
          </h2>

          <div className="impact-text">
            <p>
              Over the years, our advisory network and partner institutions have
              helped thousands of African students gain admission to universities
              and colleges across the United States, Canada, Australia, and Europe.
            </p>

            <p>
              Many of these students have successfully completed their programs and
              now hold internationally recognized degrees that have transformed
              their careers and lives.
            </p>

            <p>
              At <strong>TravEd Consult</strong>, we do more than provide application
              support — we become trusted advisors, mentors, and guides throughout
              the entire journey.
            </p>
          </div>

          <Link to="/services" className="link-text">
            <button className="impact-btn">
              Explore our services <ArrowRight size={18} />
            </button>
          </Link>
        </div>

        {/* RIGHT */}
        <div className="impact-right">
          <img
            className="impact-image"
            src="/images/students-abroad.jpg"
            alt="Students celebrating their international education journey"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;