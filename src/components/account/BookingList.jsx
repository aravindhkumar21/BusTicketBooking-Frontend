import { motion } from "framer-motion";
import { CalendarDays, Ticket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import formatCurrency from "../../utils/formatCurrency";
import BookingStatusIcon from "../common/BookingStatusIcon";
import EmptyState from "../layout/EmptyState";

const BookingList = ({ bookings = [] }) => {
  const navigate = useNavigate();

  if (!bookings.length) {
    return (
      <EmptyState
        title="No bookings yet"
        message="Your bookings will appear here after you make a reservation."
      />
    );
  }

  return (
    <div className="booking-list">
      {bookings.map((booking) => (
        <motion.article
          key={booking.bookingId}
          className="booking-list-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="booking-list-header">
            <div>
              <span>Booking #{booking.bookingId}</span>
              <h3>{booking.bus?.busName || "Bus"}</h3>
              <p>{booking.bus?.busNumber || "N/A"}</p>
            </div>

            <BookingStatusIcon
              status={booking.bookingStatus}
            />
          </div>

          <div className="booking-list-details">
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

          <div className="booking-list-footer">
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
      ))}
    </div>
  );
};

export default BookingList;