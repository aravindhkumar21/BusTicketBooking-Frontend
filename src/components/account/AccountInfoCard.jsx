import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";

const AccountInfoCard = ({ user }) => {
  if (!user) return null;

  return (
    <motion.div
      className="account-info-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="account-info-card-header">
        <User size={21} />
        <div>
          <h3>Account information</h3>
          <p>Your registered account details</p>
        </div>
      </div>

      <div className="account-info-list">
        <div className="account-info-row">
          <User size={18} />
          <div>
            <span>Name</span>
            <strong>{user.name || "Not available"}</strong>
          </div>
        </div>

        <div className="account-info-row">
          <Mail size={18} />
          <div>
            <span>Email</span>
            <strong>{user.email || "Not available"}</strong>
          </div>
        </div>

        <div className="account-info-row">
          <Phone size={18} />
          <div>
            <span>Phone</span>
            <strong>{user.phone || "Not available"}</strong>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AccountInfoCard;