import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const ErrorMessage = ({ message }) => {
  if (!message) return null;

  return (
    <motion.div
      className="error-message"
      role="alert"
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <AlertCircle size={18} />
      <span>{message}</span>
    </motion.div>
  );
};

export default ErrorMessage;