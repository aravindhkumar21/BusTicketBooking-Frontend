import { motion } from "framer-motion";
import { CalendarDays, Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import formatCurrency from "../../utils/formatCurrency";
import BookingStatusIcon from "../common/BookingStatusIcon";

const RecentBookingCard = ({ booking }) => {
  const navigate = useNavigate();

  if (!booking) return null;

  const busName = booking.bus?.busName || "Bus";
  const busNumber = booking.bus?.busNumber || "N/A";

  return (
    <motion.article
      className="recent-booking-card"
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
    >
      <div className="recent-booking-header">
        <div>
          <span>Booking #{booking.bookingId}</span>
          <h3>{busName}</h3>
          <p>{busNumber}</p>
        </div>

        <BookingStatusIcon status={booking.bookingStatus} />
      </div>

      <div className="recent-booking-details">
        <div>
          <CalendarDays size={18} />
          <span>{booking.travelDate}</span>
        </div>

        <div>
          <Ticket size={18} />
          <span>
            {booking.numberOfSeats} seat
            {booking.numberOfSeats !== 1 ? "s" : ""}
          </span>
        </div>
      </div>

      <div className="recent-booking-footer">
        <strong>
          {formatCurrency(booking.totalAmount)}
        </strong>

        <button
          type="button"
          onClick={() =>
            navigate(`/bookings/${booking.bookingId}`)
          }
        >
          View details
        </button>
      </div>
    </motion.article>
  );
};

export default RecentBookingCard;