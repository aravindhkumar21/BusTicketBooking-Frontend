import { motion } from "framer-motion";
import { Mail, Phone, User } from "lucide-react";

const ProfileInfoCard = ({ user, onEdit }) => {
  if (!user) return null;

  return (
    <motion.div
      className="profile-info-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="profile-info-header">
        <div className="profile-info-icon">
          <User size={24} />
        </div>

        <div>
          <h2>Profile information</h2>
          <p>Manage your personal account details.</p>
        </div>
      </div>

      <div className="profile-info-list">
        <div className="profile-info-row">
          <User size={18} />
          <div>
            <span>Name</span>
            <strong>{user.name || "Not available"}</strong>
          </div>
        </div>

        <div className="profile-info-row">
          <Mail size={18} />
          <div>
            <span>Email</span>
            <strong>{user.email || "Not available"}</strong>
          </div>
        </div>

        <div className="profile-info-row">
          <Phone size={18} />
          <div>
            <span>Phone</span>
            <strong>{user.phone || "Not available"}</strong>
          </div>
        </div>
      </div>

      <button
        type="button"
        className="profile-edit-button"
        onClick={() => onEdit?.()}
      >
        Edit profile
      </button>
    </motion.div>
  );
};

export default ProfileInfoCard;