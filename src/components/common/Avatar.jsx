import { motion } from "framer-motion";

const Avatar = ({
  name = "User",
  size = 40,
}) => {
  const safeName = name?.trim() || "User";
  const initial = safeName.charAt(0).toUpperCase();

  return (
    <motion.div
      className="avatar"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      aria-label={safeName}
      title={safeName}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.25 }}
    >
      {initial}
    </motion.div>
  );
};

export default Avatar;