import { motion } from "framer-motion";
import {
  Bot,
  BusFront,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: BusFront,
    title: "Easy bus booking",
    description:
      "Search available buses and book your journey with a simple flow.",
  },
  {
    icon: ShieldCheck,
    title: "Secure booking",
    description:
      "Your booking and payment information is handled through the system securely.",
  },
  {
    icon: Bot,
    title: "AI travel assistant",
    description:
      "Find buses and complete your booking through a conversational AI experience.",
  },
  {
    icon: Sparkles,
    title: "Smart experience",
    description:
      "Enjoy a modern, responsive travel experience designed for effortless booking.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us-section">
      <div className="section-header">
        <span className="section-eyebrow">Why choose us</span>

        <h2>
          Travel smarter.
          <br />
          Book with confidence.
        </h2>

        <p>
          Everything you need for a smooth bus booking experience,
          brought together in one place.
        </p>
      </div>

      <div className="why-choose-us-grid">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <motion.div
              key={feature.title}
              className="why-choose-us-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -6,
              }}
            >
              <div className="why-choose-us-icon">
                <Icon size={24} />
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

export default WhyChooseUs;