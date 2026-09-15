import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, BusFront, UserCircle, LogOut, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, isAuthenticated, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/search", label: "Search Buses" },
    { to: "/ai", label: "AI Assistant", icon: <Sparkles size={15} /> },
  ];

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="navbar-inner">
        {/* Brand */}
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <motion.span
            className="navbar-brand-icon"
            whileHover={{ rotate: -5, scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <BusFront size={21} />
          </motion.span>

          <span className="navbar-brand-text">
            <strong>Bus</strong>
            <span>Booking</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="navbar-desktop-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}

          {isAuthenticated && (
            <NavLink
              to="/account"
              className={({ isActive }) =>
                `navbar-link ${isActive ? "active" : ""}`
              }
            >
              <UserCircle size={16} />
              <span>Account</span>
            </NavLink>
          )}
        </div>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          {isAuthenticated ? (
            <>
              <div className="navbar-user">
                <div className="navbar-user-avatar">
                  <UserCircle size={18} />
                </div>

                <div className="navbar-user-info">
                  <span>Welcome</span>
                  <strong>{user?.name || "User"}</strong>
                </div>
              </div>

              <button
                type="button"
                className="navbar-logout"
                onClick={logout}
                title="Logout"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <Link to="/login" className="navbar-login">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar-menu-button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="navbar-mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="navbar-mobile-links">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === "/"}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    `navbar-mobile-link ${isActive ? "active" : ""}`
                  }
                >
                  {item.icon}
                  <span>{item.label}</span>
                </NavLink>
              ))}

              {isAuthenticated ? (
                <>
                  <NavLink
                    to="/account"
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `navbar-mobile-link ${isActive ? "active" : ""}`
                    }
                  >
                    <UserCircle size={17} />
                    <span>Account</span>
                  </NavLink>

                  <button
                    type="button"
                    className="navbar-mobile-logout"
                    onClick={() => {
                      logout();
                      closeMenu();
                    }}
                  >
                    <LogOut size={17} />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="navbar-mobile-login"
                  onClick={closeMenu}
                >
                  Login
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;