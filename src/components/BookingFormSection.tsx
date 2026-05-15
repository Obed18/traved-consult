import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar,
  ChevronDown,
  User,
  Mail,
  Phone,
  X,
  Tag,
  DollarSign,
} from "lucide-react";
import "../styles/BookingFormSection.css";

interface BookingFormSectionProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: {
    title: string;
    price: string;
  };
}

const consultants = [
  "Select a consultant",
  "Gracious Kajah",
  "Benjamin Ekow Asem-Mensah",
  "Terrick Nii Obodai Torgbor",
];

const times = [
  "Select a time",
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
];

const BookingFormSection: React.FC<BookingFormSectionProps> = ({
  isOpen,
  onClose,
  selectedPackage,
}) => {
  const [consultant, setConsultant] = useState(consultants[0]);
  const [time, setTime] = useState(times[0]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    planName: selectedPackage?.title || "Visa Interview Coaching Course",
    totalPrice: selectedPackage?.price || "$100",
  });

  // Update form data when selectedPackage changes
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      planName: selectedPackage?.title || "Visa Interview Coaching Course",
      totalPrice: selectedPackage?.price || "$100",
    }));
  }, [selectedPackage]);

  // Check if all required fields are filled
  const isFormValid =
    formData.fullName.trim() !== "" &&
    formData.email.trim() !== "" &&
    formData.phone.trim() !== "" &&
    formData.date !== "" &&
    time !== times[0] &&
    consultant !== consultants[0];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleBookNow = () => {
    if (isFormValid) {
      alert("Booking submitted successfully!");
      onClose();
    }
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="booking-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="booking-modal-content"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="booking-modal-close" onClick={onClose}>
              <X size={24} />
            </button>
            <motion.section
              className="booking-wrapper"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            >
      <div className="booking-card">
        {/* Package */}
            <div className="package-box">
              <p className="package-label">Selected Package</p>
              <div className="package-row">
                <span className="package-name">
                  {selectedPackage?.title || "Visa Interview Coaching Course"}
                </span>
                <span className="package-price">
                  {selectedPackage?.price || "$100"}
                </span>
              </div>
            </div>

        {/* Form */}
        <div className="form-grid">
          <InputField
            icon={<User size={18} />}
            label="Full Name *"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(value) => handleInputChange("fullName", value)}
          />

          <InputField
            icon={<Mail size={18} />}
            label="Email Address *"
            placeholder="Enter your email address"
            value={formData.email}
            onChange={(value) => handleInputChange("email", value)}
          />

          <InputField
            icon={<Phone size={18} />}
            label="Phone Number *"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(value) => handleInputChange("phone", value)}
          />

          {/* Date */}
          <div className="form-group">
            <label className="form-label">Preferred Date *</label>
            <div className="input-with-icon">
              <input 
                type="date" 
                className="form-input" 
                value={formData.date}
                onChange={(e) => handleInputChange("date", e.target.value)}
              />
              <Calendar size={18} className="input-icon" />
            </div>
          </div>

          {/* Time */}
          <div className="form-group">
            <label className="form-label">Preferred Time *</label>
            <div className="select-wrapper">
              <select
                className="form-select"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              >
                {times.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
              <ChevronDown size={18} className="select-icon" />
            </div>
          </div>

          {/* Plan Name - Read Only */}
          <div className="form-group">
            <label className="form-label">Plan Name</label>
            <div className="input-with-icon">
              <input
                type="text"
                className="form-input readonly-field"
                value={formData.planName}
                readOnly
              />
              <Tag size={18} className="input-icon" />
            </div>
          </div>

          {/* Total Price - Read Only */}
          <div className="form-group">
            <label className="form-label">Total Price</label>
            <div className="input-with-icon">
              <input
                type="text"
                className="form-input readonly-field"
                value={formData.totalPrice}
                readOnly
              />
              <DollarSign size={18} className="input-icon" />
            </div>
          </div>

          {/* Consultant */}
          <div className="form-group full-width">
            <label className="form-label">Preferred Consultant *</label>
            <div className="select-wrapper">
              <select
                className="form-select"
                value={consultant}
                onChange={(e) => setConsultant(e.target.value)}
              >
                {consultants.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <ChevronDown size={18} className="select-icon" />
            </div>
          </div>

          {/* Book Now Button */}
          <div className="form-group full-width">
            <button
              className={`book-now-button ${isFormValid ? "enabled" : "disabled"}`}
              onClick={handleBookNow}
              disabled={!isFormValid}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
          </motion.section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface InputProps {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
}

const InputField: React.FC<InputProps> = ({ label, placeholder, icon, value, onChange }) => {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      <div className="input-with-icon">
        <input 
          className="form-input" 
          placeholder={placeholder} 
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className="input-icon">{icon}</span>
      </div>
    </div>
  );
};

export default BookingFormSection;
