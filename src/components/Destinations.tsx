import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Destinations.css";

interface Destination {
  id: string;
  name: string;
  slug: string;
  image: string;
//   flag: string;
}

const destinations: Destination[] = [
  {
    id: "research-academic-assistance",
    name: "Research and Academic Assistance",
    slug: "research-academic-assistance",
    image:
      "/services/research.avif",
    // flag: "https://flagcdn.com/w80/gb.png",
  },
  {
    id: "cultural-exchanges-conferences-events",
    name: "Cultural Exchanges, Conferences and Events",
    slug: "cultural-exchanges-conferences-events",
    image:
      "/services/conference.avif",
    // flag: "https://flagcdn.com/w80/us.png",
  },
  {
    id: "business-travel-vacations-tours",
    name: "Business Travel, Vacations and Tours",
    slug: "business-travel-vacations-tours",
    image:
      "/services/travel.webp",
    // flag: "https://flagcdn.com/w80/ca.png",
  },
  {
    id: "flight-booking-accommodation-travel-arrangements",
    name: "Flight Booking, Accommodation and Travel Arrangements",
    slug: "flight-booking-accommodation-travel-arrangements",
    image:
      "/services/flight.avif",
    // flag: "https://flagcdn.com/w80/au.png",
  },
  {
    id: "visa-facilitation",
    name: "Visa Facilitation",
    slug: "visa-facilitation",
    image:
      "/services/visa.jpg",
    // flag: "https://flagcdn.com/w80/dk.png",
  },

  // Additional destinations
  {
    id: "university-selection-counselling-application-support",
    name: "University Selection Counselling & Application Support",
    slug: "university-selection-counselling-application-support",
    image:
      "/services/university.jpg",
    // flag: "https://flagcdn.com/w80/de.png",
  },
  {
    id: "travEd-global-education-fair",
    name: "TravEd Global Education Fair",
    slug: "travEd-global-education-fair",
    image:
      "/services/education-fair.avif",
    // flag: "https://flagcdn.com/w80/ie.png",
  },
//   {
//     id: "france",
//     name: "France",
//     slug: "france",
//     image:
//       "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=85",
//     // flag: "https://flagcdn.com/w80/fr.png",
//   },
//   {
//     id: "netherlands",
//     name: "Netherlands",
//     slug: "netherlands",
//     image:
//       "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1200&q=85",
//     // flag: "https://flagcdn.com/w80/nl.png",
//   },
//   {
//     id: "sweden",
//     name: "Sweden",
//     slug: "sweden",
//     image:
//       "https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=85",
//     // flag: "https://flagcdn.com/w80/se.png",
//   },
//   {
//     id: "new-zealand",
//     name: "New Zealand",
//     slug: "new-zealand",
//     image:
//       "https://images.unsplash.com/photo-1469521669194-babb45599def?auto=format&fit=crop&w=1200&q=85",
//     // flag: "https://flagcdn.com/w80/nz.png",
//   },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Destinations: React.FC = () => {
  return (
    <section className="destinations-section">
      <div className="destinations-container">

        {/* Section Header */}
        <motion.div
          className="destinations-header"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <h2>Our Services</h2>

          <p>
            Explore our range of professional travel and educational consultancy services designed to guide you toward the right opportunities.
          </p>
        </motion.div>

        {/* Destination Cards */}
        <motion.div
          className="destinations-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
        >
          {destinations.map((destination) => (
            <motion.div
              key={destination.id}
              className="destination-card-wrapper"
              variants={cardVariants}
            >
              <Link
                to={`/services/${destination.slug}`}
                className="destination-card"
                aria-label={`Explore ${destination.name}`}
              >
                {/* Image */}
                <motion.img
                  src={destination.image}
                  alt={`${destination.name} destination`}
                  className="destination-image"
                  loading="lazy"
                  whileHover={{
                    scale: 1.07,
                  }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                />

                {/* Overlay */}
                <div className="destination-overlay" />

                {/* Flag
                <motion.div
                  className="destination-flag"
                  whileHover={{
                    y: -3,
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <img
                    src={destination.flag}
                    alt={`${destination.name} flag`}
                  />
                </motion.div> */}

                {/* Country */}
                <div className="destination-content">
                  <h3>{destination.name}</h3>

                  <motion.div
                    className="destination-arrow"
                    initial={{ opacity: 0, x: -8 }}
                    whileHover={{
                      opacity: 1,
                      x: 0,
                    }}
                  >
                    <ArrowRight size={18} strokeWidth={2.2} />
                  </motion.div>
                </div>

                {/* Hover shine */}
                <div className="destination-shine" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Destinations;
