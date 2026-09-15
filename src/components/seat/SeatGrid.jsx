import { motion } from "framer-motion";
import SeatCard from "./SeatCard";
import SeatLegend from "../common/SeatLegend";

const SeatGrid = ({
  seats = [],
  selectedSeats = [],
  onSeatSelect,
}) => {
  const isSelected = (seat) => {
    return selectedSeats.some(
      (selectedSeat) => selectedSeat.seatId === seat.seatId
    );
  };

  if (!seats.length) {
    return (
      <div className="seat-grid-empty">
        <p>No seats available for this bus.</p>
      </div>
    );
  }

  return (
    <div className="seat-grid-wrapper">
      <div className="seat-grid-header">
        <div>
          <h3>Select your seats</h3>
          <p>
            Choose available seats for your journey.
          </p>
        </div>
      </div>

      <SeatLegend />

      <motion.div
        className="seat-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.35 }}
      >
        {seats.map((seat) => (
          <SeatCard
            key={seat.seatId}
            seat={seat}
            selected={isSelected(seat)}
            onSelect={onSeatSelect}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default SeatGrid;