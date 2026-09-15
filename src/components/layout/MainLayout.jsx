import { motion } from "framer-motion";
import Navbar from "./Navbar";
import Footer from "./Footer";

const MainLayout = ({ children }) => {
  return (
    <div className="main-layout">
      <Navbar />

      <motion.main
        className="main-layout-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        {children}
      </motion.main>

      <Footer />
    </div>
  );
};

export default MainLayout;