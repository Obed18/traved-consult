import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import "../styles/PricingPackagesSection.css";

interface ServiceItem {
  title: string;
  price: string;
}

interface PackageProps {
  title: string;
  services: ServiceItem[];
  total: string;
  includes: string[];
  onBook?: (packageInfo: { title: string; price: string }) => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const ServiceCard: React.FC<ServiceItem & { onBook?: (packageInfo: { title: string; price: string }) => void }> = ({ title, price, onBook }) => (
  <motion.div
    variants={fadeUp}
    className="pps-card"
    whileHover={{ y: -6 }}
  >
    <div className="pps-card-top">
      <p className="pps-card-title">{title}</p>
      <span className="pps-card-price">{price}</span>
    </div>
    <button className="pps-btn" onClick={() => onBook?.({ title, price })}>BOOK NOW</button>
  </motion.div>
);

const PackageSummary: React.FC<{ total: string; includes: string[]; onBook?: (packageInfo: { title: string; price: string }) => void; sectionTitle?: string }> = ({
  total,
  includes,
  onBook,
  sectionTitle,
}) => (
  <motion.div
    variants={fadeUp}
    className="pps-summary"
    whileHover={{ scale: 1.01 }}
  >
    <div className="pps-summary-header">
      <p>Total Package</p>
      <h2>{total}</h2>
    </div>

    <div className="pps-includes">
      <p className="pps-includes-title">Includes</p>
      <ul>
        {includes.map((item, idx) => (
          <li key={idx}>
            <Check size={16} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>

    <button className="pps-btn" onClick={() => onBook?.({ title: sectionTitle || "Total Package", price: total })}>BOOK NOW</button>
  </motion.div>
);

const PackageSection: React.FC<PackageProps> = ({
  title,
  services,
  total,
  includes,
  onBook,
}) => (
  <section className="pps-section">
    <h2 className="pps-section-title">{title}</h2>

    <motion.div
      className="pps-grid"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ staggerChildren: 0.08 }}
    >
      <div className="pps-services">
        {services.map((service, idx) => (
          <ServiceCard key={idx} {...service} onBook={onBook} />
        ))}
      </div>

      <PackageSummary total={total} includes={includes} onBook={onBook} sectionTitle={title} />
    </motion.div>
  </section>
);

const PricingPackagesSection: React.FC<{ onBook?: (packageInfo: { title: string; price: string }) => void }> = ({ onBook }) => {
  return (
    <div className="pps-wrapper">
      <PackageSection
        title="Global Pathway Consultation"
        services={[
          { title: "Strategic Planning Session", price: "$80" },
          { title: "Scholarship & Assistorship Advice", price: "$70" },
          { title: "School/Program Recommendations", price: "$60" },
          { title: "Visa Interview Support", price: "$80" },
          { title: "Expert Coaching", price: "$60" },
          { title: "Personalized Next Steps Roadmap", price: "$50" },
        ]}
        total="$400"
        includes={[
          "Strategic Planning Session",
          "Scholarship & Assistorship Advice",
          "School/Program Recommendations",
          "Visa Interview Support",
          "Expert Coaching",
          "Personalized Next Steps Roadmap",
        ]}
        onBook={onBook}
      />

      <PackageSection
        title="Private Visa Interview Mock Coaching"
        services={[
          { title: "Private Mock Session", price: "$80" },
          { title: "DS-160 Form Review", price: "$30" },
          { title: "Reapplication Guidance", price: "$60" },
          { title: "Q&A Support", price: "$30" },
        ]}
        total="$200"
        includes={[
          "Private Mock Session",
          "DS-160 Form Review",
          "Reapplication Guidance",
          "Q&A Support",
        ]}
        onBook={onBook}
      />

      <PackageSection
        title="Visa Mastery Success"
        services={[
          { title: "Visa Interview Coaching Course", price: "$100" },
          { title: "DS-160 Form Assistance", price: "$50" },
          { title: "Answer Review & Story Refinement", price: "$100" },
          { title: "Two Private Mock Interview Sessions", price: "$120" },
          { title: "Confidence & Mindset Training", price: "$60" },
          { title: "Denial Recovery Guidance", price: "$80" },
          { title: "Private Support Group Access", price: "$40" },
        ]}
        total="$550"
        includes={[
          "Visa Interview Coaching Course",
          "DS-160 Form Assistance",
          "Answer Review & Story Refinement",
          "Two Private Mock Interview Sessions",
          "Confidence & Mindset Training",
          "Denial Recovery Guidance",
          "Private Support Group Access",
        ]}
        onBook={onBook}
      />
    </div>
  );
};

export default PricingPackagesSection;