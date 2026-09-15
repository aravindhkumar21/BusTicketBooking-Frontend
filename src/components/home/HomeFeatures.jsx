import { motion } from "framer-motion";
import {
  CalendarDays,
  Headphones,
  MapPinned,
  TicketCheck,
} from "lucide-react";

const features = [
  {
    icon: MapPinned,
    title: "Multiple destinations",
    description:
      "Search routes between available cities and find the journey that fits your plans.",
  },
  {
    icon: CalendarDays,
    title: "Flexible travel planning",
    description:
      "Choose your preferred travel date before moving ahead with your booking.",
  },
  {
    icon: TicketCheck,
    title: "Easy ticket management",
    description:
      "Keep your booking information organized and accessible from your account.",
  },
  {
    icon: Headphones,
    title: "AI-powered assistance",
    description:
      "Get conversational help while searching for buses and moving through the booking flow.",
  },
];

const HomeFeatures = () => {
  return (
    <section className="home-features-section">
      <div className="section-header">
        <span className="section-eyebrow">Everything you need</span>

        <h2>
          A better way to
          <br />
          plan your trip.
        </h2>

        <p>
          Useful features come together to make your bus booking
          experience simple and convenient.
        </p>
      </div>

      <div className="home-features-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              className="home-feature-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
            >
              <div className="home-feature-icon">
                <Icon size={23} />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HomeFeatures;