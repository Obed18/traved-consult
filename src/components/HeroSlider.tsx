import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../styles/HeroSlider.css";

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/16/08/University_graduation_GETTY.jpg",
    title: "Applications Ongoing!",
    subtitle: "Enquire now for Eligibility",
  },
  {
    id: 2,
    image:
      "https://tse3.mm.bing.net/th/id/OIP.bCWxrwK9-EE_gRii7QOZ4QHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3",
    title: "Study Abroad with Confidence",
    subtitle: "We guide you every step of the way",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="slide-hero">
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[current].id}
          className="hero-slide"
          style={{ backgroundImage: `url(${slides[current].image})` }}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Overlay */}
          <div className="hero-overlay" />

          {/* Content */}
          <motion.div
            className="hero-content"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h1>{slides[current].title}</h1>
            <p>{slides[current].subtitle}</p>
          </motion.div>

          {/* Navigation Arrows */}
          <button className="nav-arrow left" onClick={prevSlide}>
            <ChevronLeft size={28} />
          </button>
          <button className="nav-arrow right" onClick={nextSlide}>
            <ChevronRight size={28} />
          </button>

          {/* Indicators */}
          <div className="hero-indicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`indicator ${current === index ? "active" : ""}`}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroSlider;
