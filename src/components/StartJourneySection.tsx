import React from "react";
import "../styles/StartJourneySection.css";

const StartJourneySection: React.FC = () => {
  return (
    <section className="journey-section">
      <div className="journey-container">
        
        {/* LEFT CONTENT */}
        <div className="journey-left">
          <h2>Start Your Study Abroad Journey Today</h2>
          <p className="intro">
            Are you planning to study abroad from Ghana?
          </p>

          <p>
            TravEd Consult provides professional support to help you:
          </p>

          <ul className="check-list">
            <li>✔ Choose the right university</li>
            <li>✔ Secure admission abroad</li>
            <li>✔ Apply for scholarships</li>
            <li>✔ Prepare for your student visa</li>
            <li>✔ Successfully travel for your studies</li>
          </ul>

          <p className="cta-text">Speak with a Study Abroad Advisor Today</p>

          <div className="button-group">
            <button className="btn primary">Book Consultation</button>
            <button className="btn outline">Apply Now</button>
          </div>

          <div className="who-can-apply">
            <h3>Who Can Apply?</h3>
            <p>You may qualify to study abroad if you have:</p>
            <ul className="check-list">
              <li>✔ WAEC / High School Certificate</li>
              <li>✔ Diploma or HND</li>
              <li>✔ Bachelor’s Degree</li>
              <li>✔ Master’s Degree</li>
            </ul>
            <p>
              Whether you want to study undergraduate, postgraduate, or professional programs,
              our consultants will guide you.
            </p>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="journey-right">
          <h3>Get Free Study Abroad Advice</h3>
          <p>Fill the form below and one of our advisors will contact you.</p>

          <form className="journey-form">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone / WhatsApp Number" required />

            <select required>
              <option value="">Country of Interest</option>
              <option>USA</option>
              <option>Canada</option>
              <option>UK</option>
              <option>Australia</option>
              <option>Other</option>
            </select>

            <select required>
              <option value="">Program Level</option>
              <option>Bachelor’s</option>
              <option>Master’s</option>
              <option>PhD</option>
              <option>Professional</option>
            </select>

            <select required>
              <option value="">Preferred Intake</option>
              <option>Fall</option>
              <option>Spring</option>
              <option>Summer</option>
            </select>

            <button type="submit" className="btn primary full">
              Submit Application
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default StartJourneySection;