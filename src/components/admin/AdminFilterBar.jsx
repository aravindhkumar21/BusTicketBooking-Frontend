import { motion } from "framer-motion";
import { Filter } from "lucide-react";

const AdminFilterBar = ({ children }) => {
  return (
    <motion.div
      className="admin-filter-bar"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        className="admin-filter-icon"
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.08 }}
      >
        <Filter size={18} />
        <span>Filters</span>
      </motion.div>

      <motion.div
        className="admin-filter-controls"
        initial={{ opacity: 0, x: 8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3, delay: 0.12 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default AdminFilterBar;