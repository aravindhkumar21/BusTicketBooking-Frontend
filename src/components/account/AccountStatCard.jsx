import { motion } from "framer-motion";

const AccountStatCard = ({
  label,
  value,
  icon: Icon,
}) => {
  return (
    <motion.div
      className="account-stat-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -3 }}
    >
      <div className="account-stat-icon">
        {Icon && <Icon size={22} />}
      </div>

      <div className="account-stat-content">
        <span>{label}</span>
        <strong>{value}</strong>
      </div>
    </motion.div>
  );
};

export default AccountStatCard;