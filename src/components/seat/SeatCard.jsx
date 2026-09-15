import { motion } from "framer-motion";
import { Armchair } from "lucide-react";
import { SEAT_STATUS } from "../../utils/constants";

const SeatCard = ({
  seat,
  selected = false,
  onSelect,
}) => {
  if (!seat) return null;

  const isBooked = seat.seatStatus === SEAT_STATUS.BOOKED;

  const handleClick = () => {
    if (isBooked) return;

    onSelect?.(seat);
  };

  return (
    <motion.button
      type="button"
      className={`seat-card ${
        isBooked ? "seat-booked" : ""
      } ${selected ? "seat-selected" : ""}`}
      onClick={handleClick}
      disabled={isBooked}
      whileHover={!isBooked ? { scale: 1.05 } : {}}
      whileTap={!isBooked ? { scale: 0.95 } : {}}
      aria-label={`Seat ${seat.seatNumber}`}
      aria-pressed={selected}
    >
      <Armchair size={22} />

      <span className="seat-number">
        {seat.seatNumber}
      </span>

      <span className="seat-type">
        {seat.seatType}
      </span>
    </motion.button>
  );
};

export default SeatCard;
