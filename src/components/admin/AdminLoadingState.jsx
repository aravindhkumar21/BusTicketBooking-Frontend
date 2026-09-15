import { motion } from "framer-motion";
import Spinner from "../common/Spinner";

const AdminLoadingState = ({
  message = "Loading...",
}) => {
  return (
    <motion.div
      className="admin-loading-state"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <motion.div
        className="admin-loading-glow"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.65, 0.35],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="admin-loading-spinner"
        animate={{
          scale: [1, 1.04, 1],
        }}
        transition={{
          duration: 1.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Spinner />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.15,
        }}
      >
        {message}
      </motion.p>

      <motion.div
        className="admin-loading-dots"
        animate={{
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 1.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        • • •
      </motion.div>
    </motion.div>
  );
};

export default AdminLoadingState;