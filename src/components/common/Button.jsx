import { motion } from "framer-motion";

const Button = ({
  children,
  type = "button",
  onClick,
  disabled = false,
  className = "",
  ariaLabel,
}) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={`app-button ${className}`}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
    >
      {children}
    </motion.button>
  );
};

export default Button;