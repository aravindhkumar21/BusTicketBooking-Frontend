import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, XCircle } from "lucide-react";

const AvailabilityBadge = ({ availableSeats }) => {
  if (availableSeats === undefined || availableSeats === null) {
    return null;
  }

  let status = "available";

  if (availableSeats === 0) {
    status = "full";
  } else if (availableSeats <= 5) {
    status = "limited";
  }

  const statusText = {
    available: `${availableSeats} seats available`,
    limited: `Only ${availableSeats} seats left`,
    full: "Sold out",
  };

  const icons = {
    available: <CheckCircle size={14} />,
    limited: <AlertCircle size={14} />,
    full: <XCircle size={14} />,
  };

  return (
    <motion.span
      className={`availability-badge availability-${status}`}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
    >
      <span className="availability-badge-icon">
        {icons[status]}
      </span>

      <span>{statusText[status]}</span>
    </motion.span>
  );
};

export default AvailabilityBadge;