import React from "react";
import {
  Globe2,
  CalendarDays,
  BookOpen,
  Wallet,
  Languages,
  Sparkles,
} from "lucide-react";
import { BookingData } from "./BookingForm";

interface StudyGoalsProps {
  data: BookingData;
  updateField: (field: keyof BookingData, value: string) => void;
}

const countries = [
  "Canada",
  "United Kingdom",
  "United States",
  "Australia",
  "Germany",
  "Ireland",
  "Netherlands",
  "France",
];

const intakes = ["Spring", "Summer", "Fall", "Winter"];

const englishTests = [
  "IELTS",
  "TOEFL",
  "PTE",
  "Duolingo English Test",
  "Not Yet",
];

const budgets = [
  "$10,000 - $20,000",
  "$20,000 - $35,000",
  "$35,000 - $50,000",
  "$50,000+",
];

const StudyGoals: React.FC<StudyGoalsProps> = ({
  data,
  updateField,
}) => {
  return (
    <div className="study-step">
      <div className="step-heading">
        <span className="step-pill">
          Step 3 of 5
        </span>

        <h2>Your Study Goals</h2>

        <p>
          Help us understand your education plans so your advisor
          can prepare personalized recommendations.
        </p>
      </div>

      {/* Destination */}

      <section className="goal-section">

        <div className="section-title">
          <Globe2 size={18} />
          <span>Preferred Destination</span>
        </div>

        <div className="chip-grid">
          {countries.map((country) => (
            <button
              key={country}
              type="button"
              className={`chip ${
                data.preferredCountry === country
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                updateField(
                  "preferredCountry",
                  country
                )
              }
            >
              {country}
            </button>
          ))}
        </div>

      </section>

      {/* Intake */}

      <section className="goal-section">

        <div className="section-title">
          <CalendarDays size={18} />
          <span>Preferred Intake</span>
        </div>

        <div className="card-selector">

          {intakes.map((intake) => (
            <button
              key={intake}
              type="button"
              className={`selection-card ${
                data.intake === intake
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                updateField("intake", intake)
              }
            >
              {intake}
            </button>
          ))}

        </div>

      </section>

      {/* Program */}

      <section className="goal-section">

        <div className="section-title">
          <BookOpen size={18} />
          <span>Program of Interest</span>
        </div>

        <div className="input-wrapper">

          <BookOpen
            size={18}
            className="input-icon"
          />

          <input
            type="text"
            placeholder="Computer Science, Nursing, MBA..."
            value={data.program}
            onChange={(e) =>
              updateField(
                "program",
                e.target.value
              )
            }
          />

        </div>

      </section>

      {/* Budget */}

      <section className="goal-section">

        <div className="section-title">
          <Wallet size={18} />
          <span>Estimated Budget</span>
        </div>

        <div className="budget-grid">

          {budgets.map((budget) => (
            <button
              key={budget}
              type="button"
              className={`budget-card ${
                data.budget === budget
                  ? "selected"
                  : ""
              }`}
              onClick={() =>
                updateField(
                  "budget",
                  budget
                )
              }
            >
              {budget}
            </button>
          ))}

        </div>

      </section>

      {/* English Test */}

      <section className="goal-section">

        <div className="section-title">
          <Languages size={18} />
          <span>English Test</span>
        </div>

        <div className="input-wrapper">

          <Languages
            size={18}
            className="input-icon"
          />

          <select
            value={data.englishTest}
            onChange={(e) =>
              updateField(
                "englishTest",
                e.target.value
              )
            }
          >
            <option value="">
              Select Test
            </option>

            {englishTests.map((test) => (
              <option
                key={test}
                value={test}
              >
                {test}
              </option>
            ))}
          </select>

        </div>

      </section>

      {/* Advisor Note */}

      <div className="advisor-card">

        <div className="advisor-icon">
          <Sparkles size={22} />
        </div>

        <div>

          <h4>
            Your advisor will prepare before the meeting
          </h4>

          <p>
            Based on the information above, we'll identify
            universities, scholarship opportunities and visa
            pathways that align with your goals before your
            consultation begins.
          </p>

        </div>

      </div>
    </div>
  );
};

export default StudyGoals;