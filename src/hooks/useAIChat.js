import { useContext } from "react";
import { useAIChatContext } from "../context/AIChatContext";

const useAIChat = () => {
  return useAIChatContext();
};

export default useAIChat;