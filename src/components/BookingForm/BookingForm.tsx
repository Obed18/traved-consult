import { useMemo, useState } from "react";
import "../../styles/booking.css";

import ProgressSidebar from "./ProgressSidebar";
import ConsultationCards from "./ConsultationCards";
import PersonalDetails from "./PersonalDetails";
import StudyGoals from "./StudyGoals";
import Schedule from "./Schedule";
import Review from "./Review";
import Success from "./Success";
import StepButtons from "./StepButtons";

export interface BookingData {
  consultationType: string;

  fullName: string;
  email: string;
  phone: string;

  country: string;
  educationLevel: string;

  preferredCountry: string;
  intake: string;
  program: string;
  budget: string;
  englishTest: string;

  appointmentDate: string;
  appointmentTime: string;

  notes: string;
}

const initialState: BookingData = {
  consultationType: "",

  fullName: "",
  email: "",
  phone: "",

  country: "",
  educationLevel: "",

  preferredCountry: "",
  intake: "",
  program: "",
  budget: "",
  englishTest: "",

  appointmentDate: "",
  appointmentTime: "",

  notes: "",
};

const steps = [
  "Consultation",
  "Personal",
  "Study Goals",
  "Schedule",
  "Review",
];

export default function BookingForm() {
  const [step, setStep] = useState(0);

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] =
    useState<BookingData>(initialState);

  const updateField = (
    field: keyof BookingData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
    }
  };

  const submitBooking = () => {
    console.log("Booking Data", formData);

    // TODO:
    // Send to backend here.

    setSubmitted(true);
  };

  const progress = useMemo(() => {
    return ((step + 1) / steps.length) * 100;
  }, [step]);

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <ConsultationCards
            value={formData.consultationType}
            onChange={(value) =>
              updateField("consultationType", value)
            }
          />
        );

      case 1:
        return (
          <PersonalDetails
            data={formData}
            updateField={updateField}
          />
        );

      case 2:
        return (
          <StudyGoals
            data={formData}
            updateField={updateField}
          />
        );

      case 3:
        return (
          <Schedule
            data={formData}
            updateField={updateField}
          />
        );

      case 4:
        return (
          <Review
            data={formData}
          />
        );

      default:
        return null;
    }
  };

  if (submitted) {
    return (
      <Success
        fullName={formData.fullName}
      />
    );
  }

  return (
    <section className="booking-section">

      <div className="booking-glow booking-glow-left" />
      <div className="booking-glow booking-glow-right" />

      <div className="booking-wrapper">

        <ProgressSidebar
          steps={steps}
          currentStep={step}
          progress={progress}
        />

        <div className="booking-content">

          <div className="booking-header">

            <span className="booking-badge">
              TravEd Consult
            </span>

            <h1>
              Let's plan your global education journey.
            </h1>

            <p>
              Schedule a one-on-one consultation with an
              education advisor. We'll discuss your study
              destination, scholarships, admissions, and visa
              pathway.
            </p>

          </div>

          <div
            key={step}
            className="booking-card fade-slide"
          >
            {renderStep()}
          </div>

          <StepButtons
            step={step}
            totalSteps={steps.length}
            onPrevious={previousStep}
            onNext={nextStep}
            onSubmit={submitBooking}
          />

        </div>

      </div>

    </section>
  );
}