import { motion } from "framer-motion";
import { Armchair, ArrowRight, IndianRupee } from "lucide-react";
import formatCurrency from "../../utils/formatCurrency";
import Button from "../common/Button";

const SeatSelectionSummary = ({
  selectedSeats = [],
  fare = 0,
  onContinue,
}) => {
  const seatCount = selectedSeats.length;
  const totalAmount = fare * seatCount;

  return (
    <motion.div
      className="seat-selection-summary"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="seat-summary-header">
        <div className="seat-summary-icon">
          <Armchair size={20} />
        </div>

        <div>
          <h3>Selected seats</h3>
          <p>
            {seatCount} {seatCount === 1 ? "seat" : "seats"} selected
          </p>
        </div>
      </div>

      <div className="seat-summary-seats">
        {selectedSeats.length > 0 ? (
          selectedSeats.map((seat) => (
            <span key={seat.seatId}>
              {seat.seatNumber}
            </span>
          ))
        ) : (
          <p>No seats selected</p>
        )}
      </div>

      <div className="seat-summary-price">
        <div>
          <span>Fare per seat</span>
          <strong>{formatCurrency(fare)}</strong>
        </div>

        <div>
          <span>Total amount</span>
          <strong>
            <IndianRupee size={16} />
            {totalAmount.toFixed(2)}
          </strong>
        </div>
      </div>

      <Button
        type="button"
        onClick={onContinue}
        disabled={seatCount === 0}
      >
        Continue
        <ArrowRight size={17} />
      </Button>
    </motion.div>
  );
};

export default SeatSelectionSummary;