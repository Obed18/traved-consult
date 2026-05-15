import React from "react";
import "../styles/ImpactSection.css";

import {
  GraduationCap,
  Globe2,
  Users,
  BadgeCheck,
  ArrowRight,
} from "lucide-react";

const impactStats = [
  {
    icon: GraduationCap,
    value: "5,000+",
    label: "Students Guided",
  },
  {
    icon: Globe2,
    value: "20+",
    label: "Global Destinations",
  },
  {
    icon: Users,
    value: "100+",
    label: "Partner Institutions",
  },
  {
    icon: BadgeCheck,
    value: "95%",
    label: "Success Rate",
  },
];

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

          <button className="impact-btn">
            Explore Success Stories <ArrowRight size={18} />
          </button>
        </div>

        {/* RIGHT */}
        <div className="impact-right">
          {impactStats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div className="impact-card" key={index}>
                <div className="impact-icon">
                  <Icon size={28} />
                </div>

                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;