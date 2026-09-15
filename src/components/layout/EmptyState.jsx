import { Inbox } from "lucide-react";
import { motion } from "framer-motion";

const EmptyState = ({ title, message }) => {
  return (
    <motion.div
      className="empty-state"
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <motion.div
        className="empty-state-icon"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.08 }}
      >
        <Inbox size={26} />
      </motion.div>

      <div className="empty-state-content">
        <h3>{title}</h3>
        {message && <p>{message}</p>}
      </div>
    </motion.div>
  );
};

export default EmptyState;