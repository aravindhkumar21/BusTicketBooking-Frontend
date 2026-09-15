import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import AdminSidebar from "./AdminSidebar";
import AdminHeader from "./AdminHeader";

const AdminLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen((previous) => !previous);
  };

  const handleOverlayClick = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="admin-layout">
      {/* Ambient background effects */}
      <div className="admin-ambient-glow admin-ambient-glow-one" />
      <div className="admin-ambient-glow admin-ambient-glow-two" />

      {/* Desktop / Mobile Sidebar */}
      <motion.div
        className={`admin-sidebar-wrapper ${
          sidebarOpen ? "open" : ""
        }`}
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <AdminSidebar />
      </motion.div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.button
            type="button"
            className="admin-sidebar-overlay"
            onClick={handleOverlayClick}
            aria-label="Close admin menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />
        )}
      </AnimatePresence>

      {/* Main application */}
      <motion.div
        className="admin-main"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.5,
          delay: 0.08,
        }}
      >
        <AdminHeader onMenuClick={handleMenuClick} />

        <motion.main
          className="admin-content"
          initial={{
            opacity: 0,
            y: 18,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {children}
        </motion.main>
      </motion.div>
    </div>
  );
};

export default AdminLayout;