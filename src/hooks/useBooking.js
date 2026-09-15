import { useContext } from "react";
import { useBookingContext } from "../context/BookingContext";

const useBooking = () => {
  return useBookingContext();
};

export default useBooking;