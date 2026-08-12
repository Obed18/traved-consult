import React from "react";

interface ProgressSidebarProps {
  steps: string[];
  currentStep: number;
  progress: number;
}

const ProgressSidebar: React.FC<ProgressSidebarProps> = ({
  steps,
  currentStep,
  progress,
}) => {
  return (
    <aside className="progress-sidebar">
      <div className="sidebar-header">
        <span className="sidebar-tag">Booking Journey</span>

        <h2>Complete your consultation</h2>

        <p>
          You're just a few steps away from speaking with one of our education
          advisors.
        </p>
      </div>

      <div className="timeline">
        {/* Animated Progress Line */}
        <div className="timeline-line">
          <div
            className="timeline-progress"
            style={{ height: `${progress}%` }}
          />
        </div>

        {steps.map((step, index) => {
          const completed = index < currentStep;
          const active = index === currentStep;

          return (
            <div
              key={step}
              className={`timeline-item ${
                completed ? "completed" : ""
              } ${active ? "active" : ""}`}
            >
              <div className="timeline-circle">
                {completed ? (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M20 6L9 17L4 12"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>

              <div className="timeline-content">
                <span className="timeline-step">
                  Step {index + 1}
                </span>

                <h4>{step}</h4>

                <small>
                  {completed
                    ? "Completed"
                    : active
                    ? "Current Step"
                    : "Upcoming"}
                </small>
              </div>
            </div>
          );
        })}
      </div>

      <div className="progress-footer">
        <div className="progress-text">
          <span>Overall Progress</span>
          <strong>{Math.round(progress)}%</strong>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>
    </aside>
  );
};

export default ProgressSidebar;