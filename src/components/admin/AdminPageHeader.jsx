import { motion } from "framer-motion";

const AdminPageHeader = ({
  title,
  description,
  action,
}) => {
  return (
    <motion.div
      className="admin-page-header"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="admin-page-header-glow" />

      <motion.div
        className="admin-page-header-content"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.45,
          delay: 0.1,
        }}
      >
        <div className="admin-page-header-accent" />

        <div>
          <h1>{title}</h1>

          {description && <p>{description}</p>}
        </div>
      </motion.div>

      {action && (
        <motion.div
          className="admin-page-header-action"
          initial={{ opacity: 0, x: 12, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 0.4,
            delay: 0.15,
          }}
        >
          {action}
        </motion.div>
      )}
    </motion.div>
  );
};

export default AdminPageHeader;