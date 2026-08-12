import React from "react";
import {
  GraduationCap,
  Globe2,
  BadgeDollarSign,
  FileCheck2,
  Plane,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

interface ConsultationCardsProps {
  value: string;
  onChange: (value: string) => void;
}

interface ConsultationOption {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

const options: ConsultationOption[] = [
  {
    id: "study-abroad",
    title: "Study Abroad",
    subtitle: "University Admissions",
    description:
      "Receive expert guidance on choosing universities, programs, admissions and application strategy.",
    icon: <GraduationCap size={34} />,
    tags: ["Admissions", "Universities", "Programs"],
  },
  {
    id: "visa",
    title: "Visa Assistance",
    subtitle: "Application & Interview",
    description:
      "Get professional support with documentation, interview preparation and visa application guidance.",
    icon: <Plane size={34} />,
    tags: ["Interview", "Documents", "Embassy"],
  },
  {
    id: "scholarship",
    title: "Scholarships",
    subtitle: "Funding Opportunities",
    description:
      "Discover scholarship opportunities and receive guidance on improving your chances of success.",
    icon: <BadgeDollarSign size={34} />,
    tags: ["Funding", "Merit", "Financial Aid"],
  },
  {
    id: "tests",
    title: "Exam Preparation",
    subtitle: "IELTS • TOEFL • GRE",
    description:
      "Prepare for standardized tests with personalized coaching and recommended study plans.",
    icon: <FileCheck2 size={34} />,
    tags: ["IELTS", "TOEFL", "GRE"],
  },
  {
    id: "migration",
    title: "Migration Advice",
    subtitle: "Long-Term Planning",
    description:
      "Discuss your education pathway alongside long-term relocation and settlement opportunities.",
    icon: <Globe2 size={34} />,
    tags: ["Planning", "Career", "Relocation"],
  },
];

const ConsultationCards: React.FC<ConsultationCardsProps> = ({
  value,
  onChange,
}) => {
  return (
    <div className="consultation-step">
      <div className="step-heading">
        <span className="step-pill">
          Step 1 of 5
        </span>

        <h2>
          What would you like help with?
        </h2>

        <p>
          Choose the consultation that best matches your goals.
          You can discuss additional topics during your meeting.
        </p>
      </div>

      <div className="consultation-grid">
        {options.map((option) => {
          const selected = value === option.id;

          return (
            <button
              key={option.id}
              type="button"
              onClick={() => onChange(option.id)}
              className={`consultation-card ${
                selected ? "selected" : ""
              }`}
            >
              <div className="card-top">

                <div className="card-icon">
                  {option.icon}
                </div>

                {selected && (
                  <div className="selected-badge">
                    <CheckCircle2 size={22} />
                  </div>
                )}

              </div>

              <div className="card-body">

                <small>{option.subtitle}</small>

                <h3>{option.title}</h3>

                <p>{option.description}</p>

              </div>

              <div className="card-tags">
                {option.tags.map((tag) => (
                  <span key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="card-footer">

                <span>
                  Select Consultation
                </span>

                <ChevronRight
                  size={18}
                  className="arrow"
                />

              </div>

              <div className="card-glow" />
            </button>
          );
        })}
      </div>

      <div className="selection-note">

        <div className="note-icon">
          <CheckCircle2 size={18} />
        </div>

        <p>
          Not sure which consultation fits your needs?
          Select the closest option. Your advisor will tailor
          the session to your specific goals.
        </p>

      </div>
    </div>
  );
};

export default ConsultationCards;