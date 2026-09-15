import { motion } from "framer-motion";
import { Bell, Menu } from "lucide-react";

const AdminHeader = ({ onMenuClick }) => {
  return (
    <motion.header
      className="admin-header"
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="admin-header-left">
        <motion.button
          type="button"
          className="admin-menu-button"
          onClick={onMenuClick}
          aria-label="Open admin menu"
          title="Open admin menu"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
        >
          <Menu size={22} />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, delay: 0.1 }}
        >
          <h1>Admin Dashboard</h1>
          <p>Manage your bus booking system</p>
        </motion.div>
      </div>

      <motion.button
        type="button"
        className="admin-notification-button"
        aria-label="Notifications"
        title="Notifications"
        whileHover={{
          scale: 1.08,
          rotate: 3,
        }}
        whileTap={{
          scale: 0.92,
        }}
      >
        <Bell size={20} />

        <motion.span
          className="admin-notification-dot"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.button>
    </motion.header>
  );
};

export default AdminHeader;