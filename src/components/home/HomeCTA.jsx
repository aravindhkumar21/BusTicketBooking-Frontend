import { motion } from "framer-motion";
import { ArrowRight, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HomeCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="home-cta-section">
      <motion.div
        className="home-cta-card"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="home-cta-content">
          <span className="section-eyebrow">
            Ready to travel?
          </span>

          <h2>
            Your next journey
            <br />
            is waiting.
          </h2>

          <p>
            Find a bus, choose your seat, and start your journey
            today.
          </p>
        </div>

        <motion.button
          type="button"
          className="home-cta-button"
          onClick={() => navigate("/search")}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          <Search size={19} />
          Search buses
          <ArrowRight size={18} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HomeCTA;