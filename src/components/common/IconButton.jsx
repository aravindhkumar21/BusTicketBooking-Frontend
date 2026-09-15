import { motion } from "framer-motion";

const IconButton = ({
  icon,
  children,
  onClick,
  label,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={`icon-button ${className}`}
      whileHover={!disabled ? { scale: 1.08 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {icon || children}
    </motion.button>
  );
};

export default IconButton;