import api from "./api";

export const sendAIMessage = async (sessionId, userId, message) => {
  // Build request payload. The backend expects `userId` only when a user is logged in.
  const payload = { sessionId, message };
  if (userId) payload.userId = userId;
  console.log('Sending AI payload:', payload);
  try {
    const response = await api.post("/api/ai/chat", payload);
    return response.data;
  } catch (err) {
    console.error('AI API error:', err.response?.status, err.response?.data);
    throw err;
  }
};