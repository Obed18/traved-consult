import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  X,
  ChevronDown,
  ChevronDownCircle,
  ChevronDown as ArrowDown,
} from "lucide-react";
import "../styles/HeroSection.css";

type Lang = "EN" | "FRAN";

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [lang, setLang] = useState<Lang>("EN");

  const onSelectLang = (l: Lang) => {
    setLang(l);
    setLangOpen(false);
    // hookup i18n logic here
    console.log("selected language", l);
  };

  return (
    <section className="hero-video-root">
      {/* Video background + overlay */}
      <div className="hero-video-media">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          // replace with your video source or poster image for fallback
          src="https://www.ieduconsultants.com/wp-content/uploads/2020/10/university-drone-view.mp4"
        />
        <div className="hero-video-overlay" />
      </div>

      {/* Content center */}
      <div className="hero-video-content">
        <motion.div
          className="hero-down"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          <button
            className="chev-btn"
            aria-label="scroll down"
            onClick={() => {
              const el = document.getElementById("next-section");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 9l6 6 6-6"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Placeholder next section id for scroll */}
      <div id="next-section" style={{ height: "90vh" }}></div>
    </section>
  );
}
