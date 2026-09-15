import { useState } from "react";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

const AIChatInput = ({ onSend, loading = false }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedMessage = message.trim();

    if (!trimmedMessage || loading) return;

    setMessage("");
    await onSend?.(trimmedMessage);
  };

  return (
    <form className="ai-chat-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        placeholder="Ask your travel assistant..."
        disabled={loading}
        aria-label="Message"
      />

      <motion.button
        type="submit"
        disabled={loading || !message.trim()}
        whileTap={{ scale: 0.95 }}
        aria-label="Send message"
      >
        <Send size={19} />
      </motion.button>
    </form>
  );
};

export default AIChatInput;