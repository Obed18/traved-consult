import React from "react";
import { motion, Variants } from "framer-motion";
import { Link } from "react-router-dom";
import { SERVICES } from "../data/services";
import "../styles/Footer.css";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { FiYoutube } from "react-icons/fi";

type IconProps = {
  size?: number;
  className?: string;
};


const FacebookIcon: React.FC<IconProps> = (props) => React.createElement(FaFacebookF as any, props);
const InstagramIcon: React.FC<IconProps> = (props) => React.createElement(FaInstagram as any, props);
const TwitterIcon: React.FC<IconProps> = (props) => React.createElement(FaXTwitter as any, props);
const LinkedinIcon: React.FC<IconProps> = (props) => React.createElement(FaLinkedinIn as any, props);
const WhatsappIcon: React.FC<IconProps> = (props) => React.createElement(FaWhatsapp as any, props);
const TiktokIcon: React.FC<IconProps> = (props) => React.createElement(FaTiktok as any, props);
const YoutubeIcon: React.FC<IconProps> = (props) => React.createElement(FiYoutube as any, props);



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
            <a href="https://www.facebook.com/share/1GwafEKyne/?mibextid=wwXIfr" className="link-text"> <FacebookIcon size={24}/></a>
            <a href="https://www.instagram.com/traved_consult?igsh=Mm5xdTg5ZmxsZWl0" className="link-text"></a> <InstagramIcon size={24} />
            <a href="https://x.com/traved_consult?s=21" className="link-text"> <TwitterIcon size={24} /></a>
            {/* <a href="https://www.linkedin.com/in/traved-consult-1b0b4b1b6/" className="link-text"> <LinkedinIcon /></a> */}
            <a href="https://wa.me/233549213246" className="link-text"> <WhatsappIcon size={24} /></a>
            <a href="https://www.tiktok.com/@traved_consult?_r=1&_t=ZS-9BNNI2HUx9R" className="link-text"> <TiktokIcon size={24} /></a>
            {/* <a href="https://www.youtube.com/@travedconsult" className="link-text"> <YoutubeIcon /></a> */}
          </div>
        </motion.div>

        {/* Company */}
        <motion.div
          className="footer-column"
          variants={columnVariants}
          custom={1}
        >
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/book">Booking</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
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
            {SERVICES.map((service) => (
              <li key={service.id}>
                <Link to={`/services/${service.id}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Study Destination */}
        <motion.div
          className="footer-column"
          variants={columnVariants}
          custom={3}
        >
          <h4>Reach Us</h4>
          <ul>
            <li>16 Coquette Street, Madina New Road</li>
            <li>Accra - Ghana</li>
            <li>hello@travedconsult.com</li>
            <li>+233 54 921 3246</li>
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
