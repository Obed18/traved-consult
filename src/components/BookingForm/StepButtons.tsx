import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Check,
} from "lucide-react";

interface StepButtonsProps {
  step: number;
  totalSteps: number;
  onPrevious: () => void;
  onNext: () => void;
  onSubmit: () => void;
}

const StepButtons: React.FC<StepButtonsProps> = ({
  step,
  totalSteps,
  onPrevious,
  onNext,
  onSubmit,
}) => {

  const isLastStep = step === totalSteps - 1;

  const buttonText = isLastStep
    ? "Confirm Booking"
    : step === totalSteps - 2
    ? "Review Booking"
    : "Continue";

  return (
    <div className="step-buttons">

      {/* Previous Button */}

      {step > 0 && (
        <button
          type="button"
          className="previous-button"
          onClick={onPrevious}
        >

          <ArrowLeft size={18} />

          <span>
            Back
          </span>

        </button>
      )}


      {/* Continue / Submit Button */}

      <button
        type="button"
        className={`next-button ${
          isLastStep ? "confirm" : ""
        }`}
        onClick={
          isLastStep
            ? onSubmit
            : onNext
        }
      >

        <span>
          {buttonText}
        </span>


        {isLastStep ? (
          <Check size={19} />
        ) : (
          <ArrowRight size={19} />
        )}

      </button>

    </div>
  );
};

export default StepButtons;