import { motion } from "framer-motion";
import { BusFront, CalendarDays, Ticket } from "lucide-react";

const AIQuickPrompts = ({ onPrompt }) => {
  const prompts = [
    {
      label: "Find buses",
      message: "I want to find a bus",
      icon: BusFront,
    },
    {
      label: "Book a seat",
      message: "I want to book a seat",
      icon: Ticket,
    },
    {
      label: "Booking help",
      message: "Help me with my booking",
      icon: CalendarDays,
    },
  ];

  return (
    <div className="ai-quick-prompts">
      {prompts.map(({ label, message, icon: Icon }) => (
        <motion.button
          key={label}
          type="button"
          className="ai-quick-prompt"
          onClick={() => onPrompt?.(message)}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Icon size={18} />
          <span>{label}</span>
        </motion.button>
      ))}
    </div>
  );
};

export default AIQuickPrompts;