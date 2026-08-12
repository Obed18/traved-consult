import React from "react";
import {
  CheckCircle2,
  Mail,
  CalendarCheck,
  ArrowRight,
  Home,
} from "lucide-react";

interface SuccessProps {
  fullName: string;
}

const Success: React.FC<SuccessProps> = ({
  fullName,
}) => {
  return (
    <section className="success-section">

      <div className="success-background success-one" />
      <div className="success-background success-two" />

      <div className="success-card">

        {/* Animated Icon */}

        <div className="success-icon-wrapper">

          <div className="success-ring">
            <CheckCircle2 size={52} />
          </div>

        </div>


        <span className="success-badge">
          Booking Confirmed
        </span>


        <h1>
          You're all set, {fullName || "there"}! 🎉
        </h1>


        <p className="success-description">

          Your consultation request has been successfully
          submitted. One of our education advisors will review
          your information and contact you shortly.

        </p>


        <div className="success-details">


          <div className="success-detail-item">

            <div className="detail-icon">
              <CalendarCheck size={22} />
            </div>

            <div>
              <h4>
                Consultation Review
              </h4>

              <p>
                Our advisor will prepare recommendations based
                on your study goals.
              </p>
            </div>

          </div>



          <div className="success-detail-item">

            <div className="detail-icon">
              <Mail size={22} />
            </div>

            <div>

              <h4>
                Check Your Email
              </h4>

              <p>
                A confirmation message with your booking details
                will be sent to your inbox.
              </p>

            </div>

          </div>


        </div>


        <div className="success-actions">

          <button
            className="primary-action"
            type="button"
          >
            View Booking Details

            <ArrowRight size={18} />

          </button>


          <button
            className="secondary-action"
            type="button"
          >
            <Home size={18} />

            Back to Home

          </button>

        </div>


        <div className="success-footer">

          <span>
            ✈️
          </span>

          <p>
            Your journey towards global education starts here.
          </p>

        </div>


      </div>

    </section>
  );
};

export default Success;