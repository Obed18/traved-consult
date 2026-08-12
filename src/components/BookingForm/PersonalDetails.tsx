import React from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Building2,
} from "lucide-react";
import { BookingData } from "./BookingForm";

interface PersonalDetailsProps {
  data: BookingData;
  updateField: (field: keyof BookingData, value: string) => void;
}

const educationLevels = [
  "High School",
  "Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Other",
];

const PersonalDetails: React.FC<PersonalDetailsProps> = ({
  data,
  updateField,
}) => {
  return (
    <div className="personal-step">
      <div className="step-heading">
        <span className="step-pill">Step 2 of 5</span>

        <h2>Tell us about yourself</h2>

        <p>
          We'll use this information to personalize your consultation and
          prepare suitable recommendations before your appointment.
        </p>
      </div>

      <div className="form-grid">

        {/* Full Name */}
        <div className="input-group">
          <label>Full Name</label>

          <div className="input-wrapper">
            <User size={18} className="input-icon" />

            <input
              type="text"
              placeholder="John Doe"
              value={data.fullName}
              onChange={(e) =>
                updateField("fullName", e.target.value)
              }
            />
          </div>
        </div>

        {/* Email */}
        <div className="input-group">
          <label>Email Address</label>

          <div className="input-wrapper">
            <Mail size={18} className="input-icon" />

            <input
              type="email"
              placeholder="john@example.com"
              value={data.email}
              onChange={(e) =>
                updateField("email", e.target.value)
              }
            />
          </div>
        </div>

        {/* Phone */}
        <div className="input-group">
          <label>Phone Number</label>

          <div className="input-wrapper">
            <Phone size={18} className="input-icon" />

            <input
              type="tel"
              placeholder="+233 XX XXX XXXX"
              value={data.phone}
              onChange={(e) =>
                updateField("phone", e.target.value)
              }
            />
          </div>
        </div>

        {/* Country */}
        <div className="input-group">
          <label>Current Country</label>

          <div className="input-wrapper">
            <MapPin size={18} className="input-icon" />

            <input
              type="text"
              placeholder="Ghana"
              value={data.country}
              onChange={(e) =>
                updateField("country", e.target.value)
              }
            />
          </div>
        </div>

        {/* Education */}
        <div className="input-group">
          <label>Highest Education Level</label>

          <div className="input-wrapper">
            <GraduationCap
              size={18}
              className="input-icon"
            />

            <select
              value={data.educationLevel}
              onChange={(e) =>
                updateField(
                  "educationLevel",
                  e.target.value
                )
              }
            >
              <option value="">
                Select Education Level
              </option>

              {educationLevels.map((level) => (
                <option
                  key={level}
                  value={level}
                >
                  {level}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Organisation */}
        <div className="input-group">
          <label>
            School / Workplace <span>(Optional)</span>
          </label>

          <div className="input-wrapper">
            <Building2
              size={18}
              className="input-icon"
            />

            <input
              type="text"
              placeholder="University of Ghana"
              value={data.notes}
              onChange={(e) =>
                updateField("notes", e.target.value)
              }
            />
          </div>
        </div>

      </div>

      <div className="info-card">
        <div className="info-card-icon">
          <GraduationCap size={24} />
        </div>

        <div>
          <h4>Why do we ask?</h4>

          <p>
            Your assigned advisor reviews your profile before the consultation
            to recommend suitable universities, scholarship opportunities, and
            the best application pathway based on your background.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;