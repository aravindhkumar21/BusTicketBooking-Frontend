import { Link } from "react-router-dom";
import {
  BusFront,
  Search,
  Sparkles,
  UserCircle,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-one" />
      <div className="footer-glow footer-glow-two" />

      <div className="footer-inner">
        <motion.div
          className="footer-brand-section"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <Link to="/" className="footer-brand">
            <span className="footer-brand-icon">
              <BusFront size={22} />
            </span>

            <span className="footer-brand-text">
              <strong>Bus</strong>
              <span>Booking</span>
            </span>
          </Link>

          <p>
            Book your bus tickets easily, choose your seats,
            and travel comfortably.
          </p>

          <div className="footer-contact">
            <span>
              <Mail size={15} />
              aravindhkumarpofficial@gmail.com
            </span>

            <span>
              <Phone size={15} />
              +91 9965456360
            </span>
          </div>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.08 }}
        >
          <h4>Quick Links</h4>

          <Link to="/">
            <BusFront size={15} />
            Home
          </Link>

          <Link to="/search">
            <Search size={15} />
            Search Buses
          </Link>

          <Link to="/ai">
            <Sparkles size={15} />
            AI Assistant
          </Link>

          <Link to="/account">
            <UserCircle size={15} />
            My Account
          </Link>
        </motion.div>

        <motion.div
          className="footer-column"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.16 }}
        >
          <h4>Support</h4>

          <span>
            <Mail size={15} />
            Help & Support
          </span>

          <span>
            <Phone size={15} />
            Contact Us
          </span>

          <span>
            <MapPin size={15} />
            Tamil Nadu, India
          </span>
        </motion.div>
      </div>

      <div className="footer-bottom">
        <p>
          © {currentYear} Bus Booking. All rights reserved.
        </p>

        <span>Built for smarter bus travel.</span>
      </div>
    </footer>
  );
};

export default Footer;