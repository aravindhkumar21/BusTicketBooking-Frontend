import { motion } from "framer-motion";
import { AlertCircle, CheckCircle, Info, X, XCircle } from "lucide-react";

const Alert = ({ message, type = "info", onClose }) => {
  if (!message) return null;

  const icons = {
    info: <Info size={19} />,
    success: <CheckCircle size={19} />,
    warning: <AlertCircle size={19} />,
    error: <XCircle size={19} />,
  };

  return (
    <motion.div
      className={`alert alert-${type}`}
      role="alert"
      initial={{ opacity: 0, y: -10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      <span className="alert-icon">
        {icons[type] || icons.info}
      </span>

      <span className="alert-message">{message}</span>

      {onClose && (
        <motion.button
          type="button"
          onClick={onClose}
          aria-label="Close alert"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
        >
          <X size={17} />
        </motion.button>
      )}
    </motion.div>
  );
};

export default Alert;