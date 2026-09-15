import { createContext, useContext, useState } from "react";
import { sendAIMessage } from "../services/aiApi";

const AIChatContext = createContext();

export const AIChatProvider = ({ children }) => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [sessionId] = useState(() => {
    return crypto.randomUUID();
  });

  const sendMessage = async (message, userId) => {
    if (!message.trim()) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: message,
      },
    ]);

    setLoading(true);

    try {
      const response = await sendAIMessage(
        sessionId,
        userId,
        message
      );
      console.log('AI raw response:', response);

      // Handle possible different response shapes
      const assistantContent = response?.response ?? response?.message ?? response?.data ?? response?.reply ?? "";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: assistantContent,
        },
      ]);

      return response;
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <AIChatContext.Provider
      value={{
        messages,
        loading,
        sessionId,
        sendMessage,
        clearChat,
      }}
    >
      {children}
    </AIChatContext.Provider>
  );
};

export const useAIChatContext = () => {
  return useContext(AIChatContext);
};