import { motion } from "framer-motion";

const SectionHeader = ({ title, subtitle }) => {
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="section-header-accent" />

      <div className="section-header-content">
        <h2>{title}</h2>

        {subtitle && <p>{subtitle}</p>}
      </div>
    </motion.div>
  );
};

export default SectionHeader;