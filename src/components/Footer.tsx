import { motion, Variants } from "framer-motion";
import { Twitter, Facebook, Instagram,  } from "lucide-react";
import "../styles/Footer.css";

const footerVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const columnVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15 },
  }),
};

const Footer = () => {
  return (
    <motion.footer
      className="footer"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="footer-container">
        {/* Brand */}
        <motion.div
          className="footer-brand"
          variants={columnVariants}
          custom={0}
        >
          <div className="logo">
            <img
              src="/traved.png"
              className="footer-logo-img"
              alt="Logo"
            />
          </div>
          <p className="description">
            Dream Big, Study Abroad – Your Global Education Journey Starts Here!
          </p>
          <div className="footer-socials">
            <a href="https://www.facebook.com/share/1GwafEKyne/?mibextid=wwXIfr" className="link-text"> <Facebook /></a>
            <a href="https://www.instagram.com/traved_consult?igsh=Mm5xdTg5ZmxsZWl0" className="link-text"></a> <Instagram />
            <a href="https://x.com/traved_consult?s=21" className="link-text"> <Twitter size={24} /></a>
          </div>
        </motion.div>

        {/* Company */}
        <motion.div
          className="footer-column"
          variants={columnVariants}
          custom={1}
        >
          <h4>Company</h4>
          <ul>
            <li>Booking</li>
            <li>Testimonials</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Study Destination</li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          className="footer-column"
          variants={columnVariants}
          custom={2}
        >
          <h4>Services</h4>
          <ul>
            <li>University Application</li>
            <li>Visa Assistance</li>
            <li>Academic Support</li>
            <li>Test Preparation</li>
            <li>Career and Job Support</li>
            <li>Counselling & Search</li>
          </ul>
        </motion.div>

        {/* Study Destination */}
        <motion.div
          className="footer-column"
          variants={columnVariants}
          custom={3}
        >
          <h4>Study Destination</h4>
          <ul>
            <li>Study in USA</li>
            <li>Study in UK</li>
            <li>Study in Canada</li>
            <li>Study in Europe</li>
          </ul>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="footer-divider" />

      {/* Bottom */}
      <div className="footer-bottom">
        {/* <div className="socials">
        </div> */}

        <p>© 2025 Traved Consult</p>
      </div>
    </motion.footer>
  );
};

export default Footer;
