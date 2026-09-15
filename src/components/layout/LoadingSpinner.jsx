import { LoaderCircle } from "lucide-react";
import { motion } from "framer-motion";

const LoadingSpinner = ({ size = 24 }) => {
  return (
    <motion.div
      className="loading-spinner-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 0.9,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <LoaderCircle
          size={size}
          className="loading-spinner"
          strokeWidth={2.4}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingSpinner;