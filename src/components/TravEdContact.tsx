import React, { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock3,
  FileText,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Users,
  Facebook,
} from "lucide-react";

import "../styles/TravEdContact.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  institution: string;
  deadline: string;
  message: string;
}

const initialForm: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  service: "",
  institution: "",
  deadline: "",
  message: "",
};

const services = [
  "Research & Academic Assistance",
  "Assignment Guidance",
  "Academic Writing Support",
  "Research Proposal Support",
  "Dissertation / Thesis Support",
  "Literature Review Support",
  "Academic Counselling",
  "Other Enquiry",
];

const TravEdContact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Connect this to your backend, Formspree, Supabase, etc.
    console.log("TravEd Consult enquiry:", formData);

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <section className="traved-contact" id="contact">
      <div className="traved-contact__background-shape" />

      <motion.div
        className="traved-contact__container"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Heading */}
        <motion.div
          className="traved-contact__heading"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="traved-contact__eyebrow">
            GET IN TOUCH
          </span>

          <h2>Contact Us</h2>

          <p>
            Have a question or need academic assistance? Our team is
            ready to help you find the right support for your academic
            journey.
          </p>
        </motion.div>

        <div className="traved-contact__card">
          {/* ================= FORM ================= */}
          <motion.div
            className="traved-contact__form-area"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="traved-contact__form-header">
              <div className="traved-contact__form-icon">
                <Send size={19} />
              </div>

              <div>
                <h3>Send us a message</h3>
                <p>
                  Tell us what you need and we’ll help you determine
                  the right service for your academic needs.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="traved-form-grid">
                <div className="traved-field">
                  <label htmlFor="firstName">
                    First Name <span>*</span>
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="traved-field">
                  <label htmlFor="lastName">
                    Last Name <span>*</span>
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              {/* Email + Phone */}
              <div className="traved-form-grid">
                <div className="traved-field">
                  <label htmlFor="email">
                    Email <span>*</span>
                  </label>

                  <div className="traved-input-icon">
                    <Mail size={16} />

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
                </div>

                <div className="traved-field">
                  <label htmlFor="phone">
                    Contact Details <span>*</span>
                  </label>

                  <div className="traved-input-icon">
                    <Phone size={16} />

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your contact number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Service */}
              <div className="traved-form-grid">
                <div className="traved-field">
                  <label htmlFor="service">
                    Service Required <span>*</span>
                  </label>

                  <div className="traved-input-icon">
                    <BookOpen size={16} />

                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="">
                        Select a service
                      </option>

                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="traved-field">
                  <label htmlFor="institution">
                    Institution / Programme
                  </label>

                  <div className="traved-input-icon">
                    <GraduationCap size={16} />

                    <input
                      id="institution"
                      name="institution"
                      type="text"
                      placeholder="e.g. University / Programme"
                      value={formData.institution}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Deadline */}
              <div className="traved-field traved-field--deadline">
                <label htmlFor="deadline">
                  Expected Deadline
                </label>

                <div className="traved-input-icon">
                  <Clock3 size={16} />

                  <input
                    id="deadline"
                    name="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="traved-field">
                <label htmlFor="message">
                  Message <span>*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us briefly about your academic needs..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="traved-form-bottom">
                <p>
                  <CheckCircle2 size={15} />
                  Your information is kept confidential.
                </p>

                <motion.button
                  type="submit"
                  className="traved-submit"
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 12px 28px rgba(13, 56, 59, 0.22)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {submitted ? (
                    <>
                      <CheckCircle2 size={17} />
                      Message Sent
                    </>
                  ) : (
                    <>
                      Send a Message
                      <ArrowRight size={17} />
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* ================= CONTACT PANEL ================= */}
          <motion.aside
            className="traved-contact__info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="traved-contact__info-content">
              <div className="traved-contact__info-top">
                <span className="traved-contact__mini-label">
                  TRAVED CONSULT
                </span>

                <h3>
                  Hi! We are always
                  <br />
                  here to help you.
                </h3>

                <p>
                  Have questions about our services? Reach out
                  and let’s discuss how we can support your
                  academic journey.
                </p>
              </div>

              {/* Contact Items */}
              <div className="traved-contact__details">
                <motion.a
                  href="tel:+233000000000"
                  className="traved-contact__detail"
                  whileHover={{ x: 5 }}
                >
                  <span className="traved-contact__detail-icon">
                    <Phone size={19} />
                  </span>

                  <span>
                    <strong>Call Us</strong>
                    <small>+233 XX XXX XXXX</small>
                  </span>
                </motion.a>

                <motion.a
                  href="https://wa.me/233000000000"
                  className="traved-contact__detail"
                  whileHover={{ x: 5 }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="traved-contact__detail-icon">
                    <MessageCircle size={19} />
                  </span>

                  <span>
                    <strong>WhatsApp</strong>
                    <small>Chat with our team</small>
                  </span>
                </motion.a>

                <motion.a
                  href="mailto:info@travedconsult.com"
                  className="traved-contact__detail"
                  whileHover={{ x: 5 }}
                >
                  <span className="traved-contact__detail-icon">
                    <Mail size={19} />
                  </span>

                  <span>
                    <strong>Email</strong>
                    <small>info@travedconsult.com</small>
                  </span>
                </motion.a>
              </div>

              {/* Location */}
              <div className="traved-contact__location">
                <MapPin size={17} />

                <span>
                  16 Coquette Street, Madina New Road
                  <br />
                  Accra - Ghana
                </span>
              </div>

              {/* Social */}
              <div className="traved-contact__social">
                <div className="traved-contact__social-line" />

                <p>Connect with us</p>

                <div className="traved-social-links">
                  <motion.a
                    href="#"
                    aria-label="Facebook"
                    whileHover={{ y: -4, scale: 1.1 }}
                  >
                    <Facebook size={18} />
                  </motion.a>

                  <motion.a
                    href="#"
                    aria-label="Instagram"
                    whileHover={{ y: -4, scale: 1.1 }}
                  >
                    <Instagram size={18} />
                  </motion.a>

                  <motion.a
                    href="#"
                    aria-label="LinkedIn"
                    whileHover={{ y: -4, scale: 1.1 }}
                  >
                    <Linkedin size={18} />
                  </motion.a>

                  <motion.a
                    href="#"
                    aria-label="WhatsApp"
                    whileHover={{ y: -4, scale: 1.1 }}
                  >
                    <MessageCircle size={18} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.aside>
        </div>
      </motion.div>
    </section>
  );
};

export default TravEdContact;