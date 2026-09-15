import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const AIHighlight = () => {
  return (
    <section className="ai-highlight-section">
      <motion.div
        className="ai-highlight-card"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="ai-highlight-content">
          <span className="section-eyebrow">
            <Sparkles size={16} />
            Powered by AI
          </span>

          <h2>
            Your personal
            <br />
            <span>travel assistant.</span>
          </h2>

          <p>
            Tell our AI where you want to go. It can understand your
            request, find available buses, guide you through seat
            selection, and help you complete your booking.
          </p>

          <Link
            to="/ai"
            className="ai-highlight-button"
          >
            <MessageCircle size={19} />
            Try AI Assistant
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="ai-highlight-visual">
          <motion.div
            className="ai-orb"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 4, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Bot size={54} />
          </motion.div>

          <motion.div
            className="ai-floating-card ai-floating-card-one"
            animate={{ y: [0, -6, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles size={16} />
            <span>Find my bus</span>
          </motion.div>

          <motion.div
            className="ai-floating-card ai-floating-card-two"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <MessageCircle size={16} />
            <span>Book my seat</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default AIHighlight;