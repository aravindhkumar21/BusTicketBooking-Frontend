import api from "./api";

export const makePayment = async (paymentData) => {
  const response = await api.post("/api/payments/pay", paymentData);
  return response.data;
};

export const getPaymentById = async (id) => {
  const response = await api.get(`/api/payments/payment/${id}`);
  return response.data;
};

export const getPaymentsByUserId = async (userId) => {
  const response = await api.get(`/api/payments/user/${userId}`);
  return response.data;
};