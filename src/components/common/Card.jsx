import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
  hover = true,
  onClick,
}) => {
  return (
    <motion.div
      className={`app-card ${className}`}
      onClick={onClick}
      whileHover={
        hover
          ? {
              y: -4,
              transition: { duration: 0.2 },
            }
          : {}
      }
    >
      {children}
    </motion.div>
  );
};

export default Card;