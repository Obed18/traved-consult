import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import "../styles/HeroSlider.css";
import { Link } from "react-router-dom";


interface Slide {
  id: number;
  image: string;
  eyebrow: string;
  title: string;
  subtitle: string;
}

const slides: Slide[] = [
  {
    id: 1,
    image:
      "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/02/16/08/University_graduation_GETTY.jpg",
    eyebrow: "Study Abroad",
    title: "Applications Ongoing!",
    subtitle:
      "Take the next step toward your international education journey. Enquire now and discover your eligibility.",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=2000&q=85",
    eyebrow: "Your Future Starts Here",
    title: "Study Abroad With Confidence",
    subtitle:
      "From choosing the right institution to preparing your application, we guide you every step of the way.",
  },
];

const AUTO_PLAY_DURATION = 6500;

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(() => {
      nextSlide();
    }, AUTO_PLAY_DURATION);

    return () => window.clearInterval(timer);
  }, [current, isPaused]);

  const slide = slides[current];

  return (
    <section
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
      aria-label="Featured study abroad information"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          className="hero-slide"
          style={{
            backgroundImage: `url("${slide.image}")`,
          }}
          initial={{
            opacity: 0,
            scale: 1.06,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            scale: 1.02,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Background overlay */}
          <div className="hero-overlay" />

          {/* Decorative gradient */}
          <div className="hero-gradient" />

          {/* Decorative shape */}
          <motion.div
            className="hero-glow"
            animate={{
              scale: [1, 1.12, 1],
              opacity: [0.35, 0.5, 0.35],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <div className="hero-container">
            <div className="hero-content">
              <motion.div
                className="hero-eyebrow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.2,
                  duration: 0.5,
                }}
              >
                <span className="hero-eyebrow-icon">
                  <GraduationCap size={17} strokeWidth={2.2} />
                </span>

                <span>{slide.eyebrow}</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.45,
                  duration: 0.6,
                }}
              >
                {slide.subtitle}
              </motion.p>

              <motion.div
                className="hero-actions"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.6,
                  duration: 0.6,
                }}
              >
                <Link to="/book" className="hero-primary-btn">
                <button className="hero-primary-btn">
                  Enquire Now
                  <ArrowRight size={18} />
                </button>
                </Link>

                <Link to="#services" className="hero-primary-btn">
                <button className="hero-secondary-btn">
                  Explore Opportunities
                </button>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Navigation */}
          <div className="hero-navigation">
            <button
              type="button"
              className="hero-nav-btn"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <ChevronLeft size={21} />
            </button>

            <button
              type="button"
              className="hero-nav-btn"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ChevronRight size={21} />
            </button>
          </div>

          {/* Slide counter */}
          <div className="hero-counter">
            <span className="hero-counter-current">
              {String(current + 1).padStart(2, "0")}
            </span>

            <span className="hero-counter-divider" />

            <span className="hero-counter-total">
              {String(slides.length).padStart(2, "0")}
            </span>
          </div>

          {/* Indicators */}
          <div className="hero-indicators">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={`hero-indicator ${
                  current === index ? "active" : ""
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={current === index ? "true" : undefined}
              >
                <span />
              </button>
            ))}
          </div>

          {/* Progress */}
          {!isPaused && (
            <motion.div
              key={slide.id}
              className="hero-progress"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                duration: AUTO_PLAY_DURATION / 1000,
                ease: "linear",
              }}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HeroSlider;