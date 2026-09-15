import api from "./api";

export const searchBuses = async (source, destination) => {
  const response = await api.get("/buses/search", {
    params: {
      source,
      destination,
    },
  });

  return response.data;
};

export const getAllBuses = async () => {
  const response = await api.get("/buses/allbuses");
  return response.data;
};

export const getBusById = async (id) => {
  const response = await api.get(`/buses/bus/${id}`);
  return response.data;
};