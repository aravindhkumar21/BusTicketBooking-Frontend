import { motion } from "framer-motion";
import {
  BusFront,
  MapPinned,
  ShieldCheck,
  Users,
} from "lucide-react";

const stats = [
  {
    icon: BusFront,
    value: "100+",
    label: "Buses",
  },
  {
    icon: MapPinned,
    value: "50+",
    label: "Routes",
  },
  {
    icon: Users,
    value: "1K+",
    label: "Happy travellers",
  },
  {
    icon: ShieldCheck,
    value: "24/7",
    label: "Booking access",
  },
];

const HomeStats = () => {
  return (
    <section className="home-stats-section">
      <div className="home-stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <motion.div
              key={stat.label}
              className="home-stat"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
            >
              <div className="home-stat-icon">
                <Icon size={22} />
              </div>

              <div>
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeStats;