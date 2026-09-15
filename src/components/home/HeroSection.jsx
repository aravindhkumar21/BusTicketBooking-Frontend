
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />
      </div>

      <div className="hero-content">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="hero-badge">
            <MapPin size={16} />
            Smart & comfortable travel
          </span>

          <h1>
            Your journey
            <br />
            <span>starts here.</span>
          </h1>

          <p>
            Discover buses, choose your perfect seat, and book your
            journey with a smarter travel experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;