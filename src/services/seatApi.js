import api from "./api";

export const getSeatsByBus = async (busId) => {
  const response = await api.get(`/seats/bus/${busId}`);
  return response.data;
};

export const getAllSeats = async () => {
  const response = await api.get("/seats/allseats");
  return response.data;
};

export const getSeatById = async (id) => {
  const response = await api.get(`/seats/seat/${id}`);
  return response.data;
};