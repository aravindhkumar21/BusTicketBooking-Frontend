import { createContext, useContext, useState } from "react";

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [booking, setBooking] = useState({
    bus: null,
    travelDate: null,
    selectedSeats: [],
  });

  const selectBus = (bus) => {
    setBooking((prev) => ({
      ...prev,
      bus,
    }));
  };

  const setTravelDate = (travelDate) => {
    setBooking((prev) => ({
      ...prev,
      travelDate,
    }));
  };

  const setSelectedSeats = (selectedSeats) => {
    setBooking((prev) => ({
      ...prev,
      selectedSeats,
    }));
  };

  const clearBooking = () => {
    setBooking({
      bus: null,
      travelDate: null,
      selectedSeats: [],
    });
  };

  return (
    <BookingContext.Provider
      value={{
        booking,
        selectBus,
        setTravelDate,
        setSelectedSeats,
        clearBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => {
  return useContext(BookingContext);
};