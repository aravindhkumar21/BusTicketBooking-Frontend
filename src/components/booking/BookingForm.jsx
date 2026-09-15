import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import Input from "../common/Input";
import Button from "../common/Button";

const BookingForm = ({
  userId,
  busId,
  selectedSeats = [],
  onSubmit,
  loading = false,
}) => {
  const [travelDate, setTravelDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!travelDate || !userId || !busId || !selectedSeats.length) {
      return;
    }

    const bookingData = {
      travelDate,
      userId,
      busId,
      seatIds: selectedSeats.map((seat) => seat.seatId),
    };

    onSubmit?.(bookingData);
  };

  return (
    <motion.form
      className="booking-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="booking-form-header">
        <CalendarDays size={21} />

        <div>
          <h3>Travel details</h3>
          <p>Select your preferred travel date.</p>
        </div>
      </div>

      <Input
        label="Travel date"
        name="travelDate"
        type="date"
        value={travelDate}
        onChange={(event) =>
          setTravelDate(event.target.value)
        }
        required
      />

      <Button
        type="submit"
        disabled={
          loading ||
          !travelDate ||
          !userId ||
          !busId ||
          !selectedSeats.length
        }
      >
        {loading ? "Creating booking..." : "Continue"}
      </Button>
    </motion.form>
  );
};

export default BookingForm;