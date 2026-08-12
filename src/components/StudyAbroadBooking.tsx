import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  GraduationCap,
} from "lucide-react";
import "../styles/StudyAbroadBooking.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  destination: string;
  studyLevel: string;
  intake: string;
  service: string;
  message: string;
}

const StudyAbroadBooking: React.FC = () => {
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    email: "",
    phone: "",
    destination: "",
    studyLevel: "",
    intake: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("TravEd consultation request:", formData);

    // Connect this to your backend/Formspree/Supabase here.
  };

  return (
    <section className="trav-ed-booking">
      <div className="trav-ed-booking__container">

        {/* LEFT CONTENT */}
        <motion.div
          className="trav-ed-booking__content"
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="trav-ed-booking__eyebrow">
            WE'RE HERE TO HELP YOU
          </span>

          <h2>
            Start Your
            <br />
            <strong>Study Abroad</strong>
            <br />
            Journey
          </h2>

          <p className="trav-ed-booking__description">
            Tell us about your study abroad plans and our consultants
            will help you find the right university, destination and
            pathway for your goals.
          </p>

          <div className="trav-ed-booking__contact">

            <motion.a
              href="mailto:info@travedconsult.com"
              className="trav-ed-booking__contact-item"
              whileHover={{ x: 5 }}
            >
              <span className="trav-ed-booking__icon">
                <Mail size={17} strokeWidth={2} />
              </span>

              <span>
                <small>E-mail</small>
                <strong>hello@travedconsult.com</strong>
              </span>
            </motion.a>

            <motion.a
              href="tel:+233549213246"
              className="trav-ed-booking__contact-item"
              whileHover={{ x: 5 }}
            >
              <span className="trav-ed-booking__icon">
                <Phone size={17} strokeWidth={2} />
              </span>

              <span>
                <small>Phone number</small>
                <strong>+233 54 921 3246</strong>
              </span>
            </motion.a>

          </div>
        </motion.div>

        {/* FORM CARD */}
        <motion.div
          className="trav-ed-booking__card"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.7,
            delay: 0.1,
            ease: "easeOut",
          }}
        >
          <form onSubmit={handleSubmit}>

            <div className="trav-ed-booking__field">
              <label htmlFor="name">Full name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="trav-ed-booking__field">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="trav-ed-booking__field">
              <label htmlFor="phone">Phone number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+233 00 000 0000"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="trav-ed-booking__field">
              <label htmlFor="destination">Preferred destination</label>

              <div className="trav-ed-booking__select-wrap">
                <MapPin size={14} />

                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select destination</option>
                  <option value="uk">United Kingdom</option>
                  <option value="usa">United States</option>
                  <option value="canada">Canada</option>
                  <option value="australia">Australia</option>
                  <option value="germany">Germany</option>
                  <option value="france">France</option>
                  <option value="ireland">Ireland</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="trav-ed-booking__row">

              <div className="trav-ed-booking__field">
                <label htmlFor="studyLevel">Study level</label>

                <div className="trav-ed-booking__select-wrap">
                  <GraduationCap size={14} />

                  <select
                    id="studyLevel"
                    name="studyLevel"
                    value={formData.studyLevel}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select level</option>
                    <option value="undergraduate">
                      Undergraduate
                    </option>
                    <option value="masters">
                      Master's
                    </option>
                    <option value="phd">
                      PhD
                    </option>
                    <option value="short-course">
                      Short Course
                    </option>
                    <option value="professional">
                      Professional Course
                    </option>
                  </select>
                </div>
              </div>

              <div className="trav-ed-booking__field">
                <label htmlFor="intake">Preferred intake</label>

                <div className="trav-ed-booking__select-wrap">
                  <CalendarDays size={14} />

                  <select
                    id="intake"
                    name="intake"
                    value={formData.intake}
                    onChange={handleChange}
                  >
                    <option value="">Select intake</option>
                    <option value="january">January</option>
                    <option value="may">May</option>
                    <option value="september">September</option>
                    <option value="october">October</option>
                    <option value="undecided">Not sure yet</option>
                  </select>
                </div>
              </div>

            </div>

            <div className="trav-ed-booking__field">
              <label htmlFor="service">What do you need help with?</label>

              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="university-admission">
                  University Admission
                </option>
                <option value="course-selection">
                  Course & University Selection
                </option>
                <option value="visa-guidance">
                  Visa Guidance
                </option>
                <option value="scholarship">
                  Scholarship Guidance
                </option>
                <option value="travel-arrangements">
                  Travel Arrangements
                </option>
                <option value="complete-package">
                  Complete Study Abroad Package
                </option>
              </select>
            </div>

            <div className="trav-ed-booking__field">
              <label htmlFor="message">Tell us about your plans</label>

              <textarea
                id="message"
                name="message"
                rows={3}
                placeholder="Tell us what you'd like help with..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <motion.button
              type="submit"
              className="trav-ed-booking__button"
              whileHover={{
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <span className="trav-ed-booking__button-icon">
                <ArrowRight size={17} />
              </span>

              <span>Book a Consultation</span>
            </motion.button>

          </form>
        </motion.div>

      </div>
    </section>
  );
};

export default StudyAbroadBooking;