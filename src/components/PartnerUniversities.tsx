// PartnerUniversities.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/PartnerUniversities.css";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

const partners: Partner[] = [
  {
    id: 1,
    name: "De Montfort University",
    logo: "https://www.ieduconsultants.com/wp-content/themes/yootheme/cache/lancaster-uni-logo-bc5e799e.jpeg",
  },
  {
    id: 2,
    name: "Edith Cowan University",
    logo: "https://www.ieduconsultants.com/wp-content/themes/yootheme/cache/icrgu-robert-gordon-uni-aberdeen-logo-0a25ab28.jpeg",
  },
  {
    id: 3,
    name: "FIC / Simon Fraser University",
    logo: "https://www.ieduconsultants.com/wp-content/themes/yootheme/cache/into-oregon-state-u-logo-0810d9d4.jpeg",
  },
  {
    id: 4,
    name: "Georgian College",
    logo: "https://www.ieduconsultants.com/wp-content/themes/yootheme/cache/kaplan-logo-ab4989fb.jpeg",
  },
  {
    id: 5,
    name: "Partner Five",
    logo: "https://www.ieduconsultants.com/wp-content/themes/yootheme/cache/middlesex-uni-logo-270f5c96.jpeg",
  },
  {
    id: 6,
    name: "Partner Six",
    logo: "https://www.ieduconsultants.com/wp-content/themes/yootheme/cache/navitas-swansea-uni-logo-1d71a676.jpeg",
  },
  {
    id: 7,
    name: "FIC / Simon Fraser University",
    logo: "https://www.ieduconsultants.com/wp-content/themes/yootheme/cache/puic-plymouth-uni-logo-846d03a1.jpeg",
  },
  {
    id: 8,
    name: "Georgian College",
    logo: "https://www.ieduconsultants.com/wp-content/themes/yootheme/cache/royal-road-uni-logo-84048d53.jpeg",
  },
  {
    id: 9,
    name: "Partner Five",
    logo: "https://www.ieduconsultants.com/wp-content/themes/yootheme/cache/navitas-umass-uni-new-hampshire-logo-5eedd280.jpeg",
  },
  {
    id: 10,
    name: "Partner Six",
    logo: "https://www.ieduconsultants.com/wp-content/themes/yootheme/cache/uniagents-certified_logo-614fbc08.png",
  },
];

const ITEMS_PER_VIEW = 4;

export default function PartnerUniversities() {
  const [index, setIndex] = useState(0);

  const totalPages = Math.ceil(partners.length / ITEMS_PER_VIEW);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalPages);
    }, 10000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const visiblePartners = partners.slice(
    index * ITEMS_PER_VIEW,
    index * ITEMS_PER_VIEW + ITEMS_PER_VIEW
  );

  return (
    <section className="partners-section">
      <h2 className="partners-title">Partner Universities</h2>

      <div className="partners-wrapper">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="partners-row"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {visiblePartners.map((partner) => (
              <motion.div
                key={partner.id}
                className="partner-card"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img src={partner.logo} alt={partner.name} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="partners-dots">
        {Array.from({ length: totalPages }).map((_, i) => (
          <span
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </section>
  );
}
