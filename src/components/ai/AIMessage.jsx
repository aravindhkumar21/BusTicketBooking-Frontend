import { motion } from "framer-motion";
import { Bot, User } from "lucide-react";

const AIMessage = ({ message }) => {
  if (!message) return null;

  const isUser = message.role === "user";

  return (
    <motion.div
      className={`ai-message ${isUser ? "user" : "assistant"}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
    >
      <div className="ai-message-icon">
        {isUser ? <User size={18} /> : <Bot size={18} />}
      </div>

      <div className="ai-message-content">
        {message.content}
      </div>
    </motion.div>
  );
};

export default AIMessage;