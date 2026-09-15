import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Users,
  BusFront,
  Map,
  Ticket,
  CreditCard,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    label: "Dashboard",
    path: "/admin",
    icon: LayoutDashboard,
  },
  {
    label: "Users",
    path: "/admin/users",
    icon: Users,
  },
  {
    label: "Buses",
    path: "/admin/buses",
    icon: BusFront,
  },
  {
    label: "Routes",
    path: "/admin/routes",
    icon: Map,
  },
  {
    label: "Bookings",
    path: "/admin/bookings",
    icon: Ticket,
  },
  {
    label: "Payments",
    path: "/admin/payments",
    icon: CreditCard,
  },
];

const sidebarVariants = {
  hidden: {
    opacity: 0,
    x: -25,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    x: -15,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const AdminSidebar = () => {
  return (
    <motion.aside
      className="admin-sidebar"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Brand */}
      <motion.div
        className="admin-sidebar-header"
        variants={itemVariants}
      >
        <div className="admin-brand-mark">
          <BusFront size={25} strokeWidth={2.2} />
        </div>

        <div className="admin-brand-text">
          <h2>
            Transit<span>AI</span>
          </h2>

          <p>BUS BOOKING SYSTEM</p>
        </div>
      </motion.div>

      {/* Admin identity */}
      <motion.div
        className="admin-sidebar-profile"
        variants={itemVariants}
      >
        <div className="admin-profile-icon">
          <ShieldCheck size={19} />
        </div>

        <div>
          <strong>Administrator</strong>
          <span>System Control</span>
        </div>

        <motion.div
          className="admin-online-dot"
          animate={{
            opacity: [0.45, 1, 0.45],
            scale: [0.9, 1.08, 0.9],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Navigation heading */}
      <motion.div
        className="admin-nav-label"
        variants={itemVariants}
      >
        <Sparkles size={13} />
        <span>CONTROL CENTER</span>
      </motion.div>

      {/* Navigation */}
      <motion.nav
        className="admin-sidebar-nav"
        aria-label="Admin navigation"
      >
        {menuItems.map(({ label, path, icon: Icon }) => (
          <motion.div
            key={path}
            variants={itemVariants}
          >
            <NavLink
              to={path}
              end={path === "/admin"}
              className={({ isActive }) =>
                `admin-sidebar-link ${
                  isActive ? "active" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="admin-sidebar-icon">
                    <Icon size={19} strokeWidth={2} />
                  </span>

                  <span className="admin-sidebar-link-text">
                    {label}
                  </span>

                  {isActive && (
                    <motion.span
                      className="admin-sidebar-active-glow"
                      layoutId="admin-sidebar-active"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          </motion.div>
        ))}
      </motion.nav>

      {/* Bottom status */}
      <motion.div
        className="admin-sidebar-footer"
        variants={itemVariants}
      >
        <div className="admin-footer-glow" />

        <div className="admin-footer-icon">
          <Sparkles size={16} />
        </div>

        <div>
          <strong>System Online</strong>
          <span>All services operational</span>
        </div>
      </motion.div>
    </motion.aside>
  );
};

export default AdminSidebar;