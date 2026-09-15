import { motion } from "framer-motion";
import { Armchair, CalendarDays, MapPin } from "lucide-react";
import formatCurrency from "../../utils/formatCurrency";

const BookingSummaryCard = ({
  bus,
  travelDate,
  selectedSeats = [],
}) => {
  if (!bus) return null;

  const totalAmount = bus.fare * selectedSeats.length;

  return (
    <motion.div
      className="booking-summary-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="booking-summary-header">
        <div>
          <span className="booking-summary-label">
            Booking summary
          </span>

          <h2>{bus.busName}</h2>

          <p>{bus.busNumber}</p>
        </div>

        <span className="booking-summary-type">
          {bus.busType}
        </span>
      </div>

      <div className="booking-summary-details">
        <div className="booking-summary-row">
          <MapPin size={19} />

          <div>
            <span>Bus</span>
            <strong>{bus.busName}</strong>
          </div>
        </div>

        <div className="booking-summary-row">
          <CalendarDays size={19} />

          <div>
            <span>Travel date</span>
            <strong>{travelDate || "Not selected"}</strong>
          </div>
        </div>

        <div className="booking-summary-row">
          <Armchair size={19} />

          <div>
            <span>Selected seats</span>

            <strong>
              {selectedSeats.length > 0
                ? selectedSeats
                    .map((seat) => seat.seatNumber)
                    .join(", ")
                : "No seats selected"}
            </strong>
          </div>
        </div>
      </div>

      <div className="booking-summary-total">
        <span>Total amount</span>

        <strong>{formatCurrency(totalAmount)}</strong>
      </div>
    </motion.div>
  );
};

export default BookingSummaryCard;