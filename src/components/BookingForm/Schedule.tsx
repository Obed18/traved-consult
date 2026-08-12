import React from "react";
import {
  CalendarDays,
  Clock3,
  Sun,
  Sunset,
  Moon,
  CheckCircle2,
} from "lucide-react";
import { BookingData } from "./BookingForm";

interface ScheduleProps {
  data: BookingData;
  updateField: (field: keyof BookingData, value: string) => void;
}

const morning = ["09:00 AM", "10:00 AM", "11:00 AM"];
const afternoon = ["12:00 PM", "02:00 PM", "03:00 PM"];
const evening = ["04:00 PM", "05:00 PM", "06:00 PM"];

const TimeGroup = ({
  title,
  icon,
  slots,
  selected,
  onSelect,
}: {
  title: string;
  icon: React.ReactNode;
  slots: string[];
  selected: string;
  onSelect: (time: string) => void;
}) => (
  <div className="time-group">
    <div className="time-group-header">
      {icon}
      <span>{title}</span>
    </div>

    <div className="time-grid">
      {slots.map((time) => (
        <button
          key={time}
          type="button"
          className={`time-slot ${selected === time ? "selected" : ""}`}
          onClick={() => onSelect(time)}
        >
          <Clock3 size={16} />
          {time}
        </button>
      ))}
    </div>
  </div>
);

const Schedule: React.FC<ScheduleProps> = ({
  data,
  updateField,
}) => {
  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="schedule-step">
      <div className="step-heading">
        <span className="step-pill">Step 4 of 5</span>

        <h2>Choose your appointment</h2>

        <p>
          Select a convenient date and time. All consultations are scheduled in
          your local time zone.
        </p>
      </div>

      <div className="schedule-layout">

        {/* Left: Date */}

        <div className="calendar-card">
          <div className="card-header">
            <CalendarDays size={20} />
            <div>
              <h3>Select Date</h3>
              <p>Choose your preferred consultation day</p>
            </div>
          </div>

          <div className="date-input-wrapper">
            <input
              type="date"
              min={today}
              value={data.appointmentDate}
              onChange={(e) =>
                updateField("appointmentDate", e.target.value)
              }
            />
          </div>

          <div className="availability-note">
            <CheckCircle2 size={18} />
            <span>
              Most advisors are available Monday to Saturday, 9:00 AM – 6:00 PM.
            </span>
          </div>
        </div>

        {/* Right: Time */}

        <div className="time-card">
          <div className="card-header">
            <Clock3 size={20} />
            <div>
              <h3>Select Time</h3>
              <p>Choose a 30-minute consultation slot</p>
            </div>
          </div>

          <TimeGroup
            title="Morning"
            icon={<Sun size={18} />}
            slots={morning}
            selected={data.appointmentTime}
            onSelect={(time) =>
              updateField("appointmentTime", time)
            }
          />

          <TimeGroup
            title="Afternoon"
            icon={<Sunset size={18} />}
            slots={afternoon}
            selected={data.appointmentTime}
            onSelect={(time) =>
              updateField("appointmentTime", time)
            }
          />

          <TimeGroup
            title="Evening"
            icon={<Moon size={18} />}
            slots={evening}
            selected={data.appointmentTime}
            onSelect={(time) =>
              updateField("appointmentTime", time)
            }
          />
        </div>
      </div>

      {/* Live Preview */}

      <div className="appointment-preview">
        <div className="preview-badge">Live Preview</div>

        <div className="preview-content">
          <div className="preview-item">
            <CalendarDays size={18} />
            <div>
              <span>Date</span>
              <strong>
                {data.appointmentDate || "Select a date"}
              </strong>
            </div>
          </div>

          <div className="preview-item">
            <Clock3 size={18} />
            <div>
              <span>Time</span>
              <strong>
                {data.appointmentTime || "Select a time"}
              </strong>
            </div>
          </div>
        </div>

        <p className="preview-note">
          Your advisor and meeting details will be shared via email after
          confirmation.
        </p>
      </div>
    </div>
  );
};

export default Schedule;