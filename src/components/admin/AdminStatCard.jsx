import { motion } from "framer-motion";

const AdminStatCard = ({
  title,
  value,
  icon: Icon,
  description,
}) => {
  return (
    <motion.article
      className="admin-stat-card"
      initial={{ opacity: 0, y: 25, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      whileHover={{
        y: -7,
        scale: 1.015,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="admin-stat-card-glow" />

      <div className="admin-stat-card-top">
        <motion.div
          className="admin-stat-card-icon"
          whileHover={{
            rotate: 6,
            scale: 1.08,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
          }}
        >
          {Icon && <Icon size={22} strokeWidth={2.2} />}
        </motion.div>

        <span className="admin-stat-card-title">
          {title}
        </span>
      </div>

      <motion.strong
        className="admin-stat-card-value"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.4,
          delay: 0.15,
        }}
      >
        {value ?? 0}
      </motion.strong>

      {description && (
        <motion.p
          className="admin-stat-card-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
        >
          {description}
        </motion.p>
      )}

      <motion.div
        className="admin-stat-card-line"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          ease: "easeOut",
        }}
      />
    </motion.article>
  );
};

export default AdminStatCard;