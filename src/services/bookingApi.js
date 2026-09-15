import api from "./api";

export const createBooking = async (bookingData) => {
  const response = await api.post("/api/bookings/book", bookingData);
  return response.data;
};

export const getAllBookings = async () => {
  const response = await api.get("/api/bookings/allbookings");
  return response.data;
};

export const getBookingById = async (id) => {
  const response = await api.get(`/api/bookings/booking/${id}`);
  return response.data;
};

export const getBookingsByUserId = async (userId) => {
  const response = await api.get(`/api/bookings/user/${userId}`);
  return response.data;
};

export const updateBooking = async (id, bookingData) => {
  const response = await api.put(
    `/api/bookings/update-booking/${id}`,
    bookingData
  );
  return response.data;
};

export const deleteBooking = async (id) => {
  const response = await api.delete(`/api/bookings/delete-booking/${id}`);
  return response.data;
};

export const cancelBookingByUser = async (bookingId, userId) => {
  const response = await api.delete(
    `/api/bookings/user/${userId}/${bookingId}`
  );
  return response.data;
};