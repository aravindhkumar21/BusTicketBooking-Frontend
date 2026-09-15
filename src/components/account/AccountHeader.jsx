import { motion } from "framer-motion";
import { UserCircle } from "lucide-react";

const AccountHeader = ({ user }) => {
  if (!user) return null;

  return (
    <motion.div
      className="account-header"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="account-header-icon">
        <UserCircle size={42} />
      </div>

      <div className="account-header-content">
        <span>Welcome back</span>
        <h1>{user.name || "User"}</h1>
        <p>{user.email}</p>
      </div>
    </motion.div>
  );
};

export default AccountHeader;