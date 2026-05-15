import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, Phone, MapPin, ChevronDown, Mail, BadgeInfo } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const menuVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const sidebarVariants: Variants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "tween", duration: 0.4 },
  },
  exit: {
    x: "100%",
    transition: { type: "tween", duration: 0.3 },
  },
};

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<
    "services" | null
  >(null);

  const servicesRef = useRef<HTMLLIElement | null>(null);
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  /* ================= SCROLL EFFECT ================= */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= CLICK OUTSIDE ================= */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        openDropdown &&
        servicesRef.current &&
        !servicesRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(null);
      }

      if (
        menuOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(e.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, [openDropdown, menuOpen]);

  return (
    <header className="courier-header">
      {/* ================= TOP BAR ================= */}
      <div className="courier-topbar">
        <div className="courier-contact">
          <Phone size={16} className="icon" />
          <span>+233 54 921 3246</span>
          <MapPin size={16} className="icon" />
          <span>
            16 Coquette Street, Madina New Road, Accra - Ghana
          </span>
          <Mail size={16} className="icon" />
          <span>hello@travedconsult.com</span>
        </div>
        <span className="courier-support">
          <BadgeInfo size={16} className="icon"/> 24/7 Customer Support
        </span>
      </div>

      {/* ================= NAVBAR ================= */}
      <motion.nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        initial="hidden"
        animate="visible"
        variants={menuVariants}
      >
        {/* LOGO */}
        <div className="nav-left">
          <Link to="/">
            <img
              src="/traved.png"
              alt="Logo"
              className="logo-img"
            />
          </Link>
        </div>

        {/* CENTER LINKS */}
        <div className="nav-center">
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>

            {/* SERVICES DROPDOWN */}
            <li
              className="dropdown"
              ref={servicesRef}
              onClick={() =>
                setOpenDropdown(
                  openDropdown === "services"
                    ? null
                    : "services"
                )
              }
            >
              Services <ChevronDown size={14} />

              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link className="dropdown-link" to="/services/university-application" onClick={() => setOpenDropdown(null)}>University Application</Link>
                    <Link className="dropdown-link" to="/services/visa-assistance" onClick={() => setOpenDropdown(null)}>Visa Assistance</Link>
                    <Link className="dropdown-link" to="/services/academic-support" onClick={() => setOpenDropdown(null)}>Academic Support</Link>
                    <Link className="dropdown-link" to="/services/test-preparation" onClick={() => setOpenDropdown(null)}>Test Preparation</Link>
                    <Link className="dropdown-link" to="/services/career-job-support" onClick={() => setOpenDropdown(null)}>Career and Job Support</Link>
                    <Link className="dropdown-link" to="/services/counselling-search" onClick={() => setOpenDropdown(null)}>Counselling & Search</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>

            <li>
              <Link to="/about">About</Link>
            </li>

            <li>
              <Link to="/book">Booking</Link>
            </li>

            <li>
              <Link to="/blog">Blog</Link>
            </li>

            <li>
              <Link to="/faqs">
                FAQs
              </Link>
            </li>
          </ul>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="nav-right">
          <Link to="/book" className="signin-link">
            APPLY NOW
          </Link>
          <Link to="/contact" className="book-btn">
            CONTACT US
          </Link>
        </div>

        {/* MOBILE ICON */}
        <button
          className="mobile-menu-icon"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* ================= MOBILE SIDEBAR ================= */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="sidebar-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
            />

            <motion.div
              className="mobile-sidebar"
              variants={sidebarVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              ref={sidebarRef}
            >
              <X
                className="sidebar-close-icon"
                onClick={() => setMenuOpen(false)}
              />

              <ul>
                <li>
                  <Link
                    to="/"
                  >
                    Home
                  </Link>
                </li>
            {/* SERVICES DROPDOWN */}
            <li
              className="dropdown"
              ref={servicesRef}
              onClick={() =>
                setOpenDropdown(
                  openDropdown === "services"
                    ? null
                    : "services"
                )
              }
            >
              Services <ChevronDown size={14} />

              <AnimatePresence>
                {openDropdown === "services" && (
                  <motion.div
                    className="dropdown-menu"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Link className="dropdown-link" to="/services/university-application" onClick={() => setOpenDropdown(null)}>University Application</Link>
                    <Link className="dropdown-link" to="/services/visa-assistance" onClick={() => setOpenDropdown(null)}>Visa Assistance</Link>
                    <Link className="dropdown-link" to="/services/academic-support" onClick={() => setOpenDropdown(null)}>Academic Support</Link>
                    <Link className="dropdown-link" to="/services/test-preparation" onClick={() => setOpenDropdown(null)}>Test Preparation</Link>
                    <Link className="dropdown-link" to="/services/career-job-support" onClick={() => setOpenDropdown(null)}>Career and Job Support</Link>
                    <Link className="dropdown-link" to="/services/counselling-search" onClick={() => setOpenDropdown(null)}>Counselling & Search</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
                <li>
                  <Link
                    to="/about"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/book"
                  >
                    Booking
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faqs"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>

              <div className="mobile-buttons">
                <a className="signin-link" href="#apply">
                  APPLY NOW
                </a>
                <a className="book-btn" href="#contact">
                  CONTACT US
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;