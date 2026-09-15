import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const AITypingIndicator = () => {
  return (
    <div className="ai-typing-indicator">
      <div className="ai-typing-icon">
        <Bot size={18} />
      </div>

      <div className="ai-typing-dots" aria-label="AI is typing">
        {[0, 1, 2].map((dot) => (
          <motion.span
            key={dot}
            animate={{
              y: [0, -4, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              delay: dot * 0.15,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default AITypingIndicator;