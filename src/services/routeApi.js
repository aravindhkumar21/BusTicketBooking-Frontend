import api from "./api";

export const getAllRoutes = async () => {
  const response = await api.get("/routes/allroutes");
  return response.data;
};

export const getRouteById = async (id) => {
  const response = await api.get(`/routes/route/${id}`);
  return response.data;
};