import React from "react";
import "../styles/TGEFSection.css";

const TGEFSection: React.FC = () => {
  return (
    <section className="tgef-section">
      <div className="tgef-container">
        {/* Header */}
        <div className="tgef-header">
          <h2>TravEd Global Education Fair (TGEF)</h2>
          <p className="subtitle">Your Gateway to International Education</p>
        </div>

        {/* Overview */}
        <div className="tgef-block">
          <h3>Project Overview</h3>
          <p>
            The TravEd Global Education Fair (TGEF) is an international student
            recruitment and education networking event connecting African
            students with leading universities, colleges, and education
            providers worldwide. It provides direct access to scholarships,
            admissions pathways, and visa guidance from experts and university
            representatives.
          </p>
        </div>

        {/* Audience */}
        <div className="tgef-grid">
          <div className="tgef-card">
            <h3>Target Audience</h3>
            <ul>
              <li>High school graduates seeking undergraduate programs</li>
              <li>University graduates seeking master’s programs abroad</li>
              <li>Professionals exploring international education</li>
              <li>Parents planning global education for children</li>
              <li>Education institutions and training centers</li>
            </ul>
          </div>

          <div className="tgef-card">
            <h3>Event Objectives</h3>
            <ul>
              <li>Connect students with international universities</li>
              <li>Provide direct access to admissions officers</li>
              <li>Scholarship and visa guidance support</li>
              <li>Promote global education opportunities</li>
              <li>Build Africa–global education partnerships</li>
              <li>Position TravEd as a leading consultancy</li>
            </ul>
          </div>
        </div>

        {/* Activities */}
        <div className="tgef-block">
          <h3>Key Event Activities</h3>
          <div className="tgef-tags">
            <span>University Exhibition Booths</span>
            <span>On-the-Spot Admissions</span>
            <span>Scholarship Sessions</span>
            <span>Visa Guidance</span>
            <span>Study Abroad Seminars</span>
            <span>1-on-1 Counseling</span>
          </div>
        </div>

        {/* Benefits */}
        <div className="tgef-grid">
          <div className="tgef-card highlight">
            <h3>Benefits for Students</h3>
            <ul>
              <li>Meet international university reps</li>
              <li>Explore scholarships</li>
              <li>Visa application guidance</li>
              <li>Study abroad requirements</li>
              <li>Free counseling & admissions support</li>
            </ul>
            <button className="btn">Register Now</button>
          </div>

          <div className="tgef-card highlight">
            <h3>Benefits for Universities</h3>
            <ul>
              <li>Recruit qualified African students</li>
              <li>Increase brand visibility</li>
              <li>Build education partnerships</li>
              <li>Direct student engagement</li>
              <li>Expand international enrollment</li>
            </ul>
            <button className="btn outline">Become an Exhibitor</button>
          </div>
        </div>

        {/* Sponsorship */}
        <div className="tgef-block">
          <h3>Sponsorship Opportunities</h3>
          <p>
            Organizations can partner through event sponsorship, education
            partnerships, brand exhibitions, and media partnerships. Sponsors
            gain exposure to hundreds of students seeking global education
            opportunities.
          </p>
        </div>

        {/* CTA */}
        <div className="tgef-cta">
          <h3>Take the First Step Toward Your Future</h3>
          <p>Join TGEF today and unlock global education opportunities.</p>
          <button className="btn">Register Now</button>
        </div>
      </div>
    </section>
  );
};

export default TGEFSection;