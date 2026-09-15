import { motion } from "framer-motion";
import {
  CalendarCheck,
  Search,
  User,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AccountQuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      label: "Search buses",
      description: "Find buses for your next trip",
      icon: Search,
      path: "/search",
    },
    {
      label: "My bookings",
      description: "View and manage your bookings",
      icon: CalendarCheck,
      path: "/my-bookings",
    },
    {
      label: "Edit profile",
      description: "Update your account details",
      icon: User,
      path: "/profile",
    },
  ];

  return (
    <div className="account-quick-actions">
      {actions.map(
        ({ label, description, icon: Icon, path }) => (
          <motion.button
            key={path}
            type="button"
            className="account-quick-action"
            onClick={() => navigate(path)}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="account-quick-action-icon">
              <Icon size={21} />
            </div>

            <div className="account-quick-action-content">
              <strong>{label}</strong>
              <span>{description}</span>
            </div>
          </motion.button>
        )
      )}
    </div>
  );
};

export default AccountQuickActions;