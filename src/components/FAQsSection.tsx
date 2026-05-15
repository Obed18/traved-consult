import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/FAQsSection.css";

type FAQ = {
  question: string;
  answer: string | React.ReactNode;
};

type FAQCategory = {
  title: string;
  faqs: FAQ[];
};

const faqData: FAQCategory[] = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What does TravEd Consult do?",
        answer: (
          <>
            TravEd Consult is a professional study abroad consultancy and travel advisory firm in Ghana that helps students gain admission into universities abroad. <br /><br />
            We provide services including:
            <ul>
              <li>University selection</li>
              <li>Application processing</li>
              <li>Scholarship guidance</li>
              <li>Student visa assistance</li>
              <li>Travel preparation</li>
            </ul>
          </>
        ),
      },
      {
        question: "Which countries can I study in through TravEd Consult?",
        answer: (
          <>
            We assist students in gaining admission to:
            <ul>
              <li>United States (USA)</li>
              <li>Canada</li>
              <li>United Kingdom (UK)</li>
              <li>Australia</li>
              <li>United Arab Emirates (UAE)</li>
              <li>Europe</li>
            </ul>
            We help you choose the best option based on your goals and budget.
          </>
        ),
      },
      {
        question: "Do you help with student visa applications?",
        answer: (
          <>
            Yes, we provide:
            <ul>
              <li>Visa documentation guidance</li>
              <li>DS-160 support</li>
              <li>Visa interview preparation</li>
              <li>Financial documentation guidance</li>
            </ul>
          </>
        ),
      },
      {
        question: "Can TravEd Consult help me choose the right university?",
        answer: (
          <>
            Yes, we guide you based on:
            <ul>
              <li>Academic background</li>
              <li>Career goals</li>
              <li>Budget</li>
              <li>Scholarship opportunities</li>
              <li>Visa success rate</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    title: "Admission Questions",
    faqs: [
      {
        question: "What are the basic requirements to study abroad?",
        answer: (
          <>
            Most universities require:
            <ul>
              <li>Academic transcripts</li>
              <li>Passport</li>
              <li>English test (IELTS, TOEFL, Duolingo)</li>
              <li>Statement of Purpose (SOP)</li>
              <li>Recommendation letters</li>
              <li>Resume/CV (if required)</li>
            </ul>
          </>
        ),
      },
      {
        question: "Do I need IELTS or TOEFL?",
        answer:
          "Some universities require IELTS/TOEFL, while others offer waivers depending on your background. We guide you accordingly.",
      },
      {
        question: "How long does admission take?",
        answer: (
          <>
            <ul>
              <li>2–4 weeks (most universities)</li>
              <li>4–8 weeks (competitive schools)</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    title: "Financial Questions",
    faqs: [
      {
        question: "Are scholarships available?",
        answer:
          "Yes, many universities offer scholarships, financial aid, and tuition discounts. We help you find the best options.",
      },
      {
        question: "Can I study abroad with a loan?",
        answer:
          "Yes. Many students use education loans or family sponsorship. We guide you on financing and documentation.",
      },
    ],
  },
  {
    title: "Visa & Travel Questions",
    faqs: [
      {
        question: "What is the student visa process?",
        answer: (
          <ol>
            <li>Get admission</li>
            <li>Pay deposit</li>
            <li>Receive visa documents (I-20/CAS)</li>
            <li>Apply for visa</li>
            <li>Book appointment</li>
            <li>Attend interview</li>
          </ol>
        ),
      },
      {
        question: "Do you provide visa interview preparation?",
        answer:
          "Yes, we coach students to confidently answer visa interview questions and improve success chances.",
      },
      {
        question: "Do you assist with travel arrangements?",
        answer: (
          <>
            Yes, we help with:
            <ul>
              <li>Flight booking guidance</li>
              <li>Accommodation advice</li>
              <li>Pre-departure orientation</li>
              <li>Travel documentation</li>
            </ul>
          </>
        ),
      },
    ],
  },
];

const FAQsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);

  const toggleFAQ = (key: string) => {
    setActiveIndex(activeIndex === key ? null : key);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="faq-heading">Frequently Asked Questions (FAQ)</h2>

        {faqData.map((category, catIndex) => (
          <div key={catIndex} className="faq-category">
            <h3 className="faq-category-title">{category.title}</h3>

            {category.faqs.map((faq, index) => {
              const key = `${catIndex}-${index}`;
              const isOpen = activeIndex === key;

              return (
                <div
                  key={key}
                  className={`faq-item ${isOpen ? "active" : ""}`}
                  onClick={() => toggleFAQ(key)}
                >
                  <div className="faq-question">
                    {faq.question}
                    <span>{isOpen ? "-" : "+"}</span>
                  </div>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        className="faq-answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        ))}

        {/* YouTube CTA */}
        <div className="faq-cta">
          <h3>Follow Us On YouTube</h3>
          <p>
            Learn about immigration systems and how to apply for Study, Visit,
            and Work visas.
          </p>
          <button className="subscribe-btn">SUBSCRIBE</button>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;