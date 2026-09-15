import { useEffect, useRef } from "react";
import { Bot } from "lucide-react";

import useAIChat from "../../hooks/useAIChat";
import useAuth from "../../hooks/useAuth";

import AIMessage from "./AIMessage";
import AIQuickPrompts from "./AIQuickPrompts";
import AITypingIndicator from "./AITypingIndicator";
import AIChatInput from "./AIChatInput";

const AIChatWindow = () => {
  const { messages, loading, sendMessage } = useAIChat();
  const { user } = useAuth();

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSendMessage = async (message) => {
     await sendMessage(message, user?.userId ?? null);
  };

  return (
    <section className="ai-chat-window">
      {/* Header */}
      <div className="ai-chat-header">
        <div className="ai-chat-header-icon">
          <Bot size={24} />
        </div>

        <div>
          <h2>Travel Assistant</h2>
          <p>Ask me about buses, seats and bookings.</p>
        </div>
      </div>

      {/* Messages */}
      <div className="ai-chat-messages">
        {messages.length === 0 && (
          <div className="ai-chat-empty">
            <Bot size={36} />

            <h3>How can I help you?</h3>

            <p>
              Try asking me to find a bus or start a booking.
            </p>

            <AIQuickPrompts onPrompt={handleSendMessage} />
          </div>
        )}

        {messages.map((message, index) => (
          <AIMessage
            key={message.id || index}
            message={message}
          />
        ))}

        {loading && <AITypingIndicator />}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <AIChatInput
        onSend={handleSendMessage}
        loading={loading}
      />
    </section>
  );
};

export default AIChatWindow;
