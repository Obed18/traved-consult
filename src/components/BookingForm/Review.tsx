import React from "react";
import {
  Briefcase,
  User,
  GraduationCap,
  CalendarDays,
  Mail,
  Phone,
  MapPin,
  Globe2,
  Wallet,
  BookOpen,
  Languages,
  StickyNote,
  Clock,
  CheckCircle2,
} from "lucide-react";
import { BookingData } from "./BookingForm";

interface ReviewProps {
  data: BookingData;
}

interface SummaryItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const SummaryItem: React.FC<SummaryItemProps> = ({
  icon,
  label,
  value,
}) => (
  <div className="summary-item">
    <div className="summary-icon">{icon}</div>

    <div className="summary-content">
      <span>{label}</span>
      <strong>{value || "Not provided"}</strong>
    </div>
  </div>
);

const Review: React.FC<ReviewProps> = ({ data }) => {
  return (
    <div className="review-step">
      <div className="step-heading">
        <span className="step-pill">Step 5 of 5</span>

        <h2>Review your consultation</h2>

        <p>
          Please review the information below before confirming your
          booking. You can still go back and make changes if needed.
        </p>
      </div>

      {/* Consultation */}

      <section className="summary-card">

        <div className="summary-card-header">
          <Briefcase size={20} />
          <h3>Consultation</h3>
        </div>

        <SummaryItem
          icon={<CheckCircle2 size={18} />}
          label="Consultation Type"
          value={data.consultationType}
        />

      </section>

      {/* Personal */}

      <section className="summary-card">

        <div className="summary-card-header">
          <User size={20} />
          <h3>Personal Information</h3>
        </div>

        <div className="summary-grid">

          <SummaryItem
            icon={<User size={18} />}
            label="Full Name"
            value={data.fullName}
          />

          <SummaryItem
            icon={<Mail size={18} />}
            label="Email"
            value={data.email}
          />

          <SummaryItem
            icon={<Phone size={18} />}
            label="Phone"
            value={data.phone}
          />

          <SummaryItem
            icon={<MapPin size={18} />}
            label="Current Country"
            value={data.country}
          />

          <SummaryItem
            icon={<GraduationCap size={18} />}
            label="Education"
            value={data.educationLevel}
          />

        </div>

      </section>

      {/* Study Goals */}

      <section className="summary-card">

        <div className="summary-card-header">
          <GraduationCap size={20} />
          <h3>Study Goals</h3>
        </div>

        <div className="summary-grid">

          <SummaryItem
            icon={<Globe2 size={18} />}
            label="Destination"
            value={data.preferredCountry}
          />

          <SummaryItem
            icon={<CalendarDays size={18} />}
            label="Preferred Intake"
            value={data.intake}
          />

          <SummaryItem
            icon={<BookOpen size={18} />}
            label="Program"
            value={data.program}
          />

          <SummaryItem
            icon={<Wallet size={18} />}
            label="Budget"
            value={data.budget}
          />

          <SummaryItem
            icon={<Languages size={18} />}
            label="English Test"
            value={data.englishTest}
          />

        </div>

      </section>

      {/* Appointment */}

      <section className="summary-card">

        <div className="summary-card-header">
          <CalendarDays size={20} />
          <h3>Appointment</h3>
        </div>

        <div className="summary-grid">

          <SummaryItem
            icon={<CalendarDays size={18} />}
            label="Date"
            value={data.appointmentDate}
          />

          <SummaryItem
            icon={<Clock size={18} />}
            label="Time"
            value={data.appointmentTime}
          />

        </div>

      </section>

      {/* Notes */}

      <section className="summary-card">

        <div className="summary-card-header">
          <StickyNote size={20} />
          <h3>Additional Notes</h3>
        </div>

        <div className="notes-preview">
          {data.notes ? (
            <p>{data.notes}</p>
          ) : (
            <p className="empty-note">
              No additional notes were provided.
            </p>
          )}
        </div>

      </section>

      {/* Footer */}

      <div className="confirmation-banner">

        <CheckCircle2 size={28} />

        <div>

          <h4>Ready to confirm?</h4>

          <p>
            Once you submit your booking, our team will review your
            request and send a confirmation email with the consultation
            details.
          </p>

        </div>

      </div>
    </div>
  );
};

export default Review;