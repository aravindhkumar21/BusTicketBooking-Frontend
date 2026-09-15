import { motion } from "framer-motion";
import { Search, X } from "lucide-react";

const AdminSearchBar = ({
  value = "",
  onChange,
  placeholder = "Search...",
}) => {
  const handleClear = () => {
    onChange?.("");
  };

  return (
    <motion.div
      className="admin-search-bar"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <motion.div
        className="admin-search-icon"
        animate={{
          scale: value ? 1.05 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        <Search size={19} />
      </motion.div>

      <input
        type="text"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
        placeholder={placeholder}
        aria-label="Search"
      />

      {value && (
        <motion.button
          type="button"
          onClick={handleClear}
          aria-label="Clear search"
          title="Clear search"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <X size={17} />
        </motion.button>
      )}
    </motion.div>
  );
};

export default AdminSearchBar;