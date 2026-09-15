import { motion } from "framer-motion";
import {
  Search,
  Armchair,
  CreditCard,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Search your journey",
    description:
      "Choose your departure city, destination, and travel date to find available buses.",
  },
  {
    number: "02",
    icon: Armchair,
    title: "Choose your seat",
    description:
      "View the bus layout and select the seats that work best for you.",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Make payment",
    description:
      "Review your booking details and complete the payment process.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Travel with ease",
    description:
      "Get your booking confirmation and enjoy a comfortable journey.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section">
      <div className="section-header">
        <span className="section-eyebrow">Simple process</span>

        <h2>
          From search to seat,
          <br />
          in just a few steps.
        </h2>

        <p>
          A straightforward booking experience designed to keep
          everything simple.
        </p>
      </div>

      <div className="how-it-works-grid">
        {steps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.number}
              className="how-it-works-step"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.1,
              }}
            >
              <div className="step-top">
                <span className="step-number">{step.number}</span>

                <div className="step-icon">
                  <Icon size={24} />
                </div>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;