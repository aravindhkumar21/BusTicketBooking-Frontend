import { motion } from "framer-motion";
import { CalendarDays, Ticket, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import formatCurrency from "../../utils/formatCurrency";
import StatusBadge from "../common/StatusBadge";

const AdminRecentBookings = ({ bookings = [] }) => {
  const navigate = useNavigate();

  const handleViewBooking = (bookingId) => {
    navigate(`/booking/${bookingId}`);
  };

  if (!bookings.length) {
    return (
      <motion.div
        className="admin-recent-bookings-empty"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <div className="admin-recent-empty-icon">
          <Ticket size={30} />
        </div>

        <p>No recent bookings found.</p>
      </motion.div>
    );
  }

  return (
    <div className="admin-recent-bookings">
      {bookings.map((booking, index) => (
        <motion.article
          key={booking.bookingId}
          className="admin-recent-booking"
          initial={{
            opacity: 0,
            x: -18,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            x: 5,
            scale: 1.01,
          }}
          transition={{
            duration: 0.4,
            delay: index * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="admin-recent-booking-icon"
            whileHover={{
              scale: 1.08,
              rotate: 5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <Ticket size={19} />
          </motion.div>

          <div className="admin-recent-booking-info">
            <div className="admin-recent-booking-top">
              <strong>
                Booking #{booking.bookingId}
              </strong>

              <StatusBadge status={booking.bookingStatus} />
            </div>

            <p>
              {booking.user?.name || "Unknown user"} •{" "}
              {booking.bus?.busName || "Unknown bus"}
            </p>

            <div className="admin-recent-booking-meta">
              <span>
                <CalendarDays size={15} />
                {booking.travelDate || "N/A"}
              </span>

              <strong>
                {formatCurrency(booking.totalAmount)}
              </strong>

              <motion.button
                type="button"
                className="admin-recent-booking-arrow"
                onClick={() =>
                  handleViewBooking(booking.bookingId)
                }
                aria-label={`View Booking ${booking.bookingId}`}
                title={`View Booking #${booking.bookingId}`}
                whileHover={{
                  scale: 1.15,
                  x: 3,
                  y: -3,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                <ArrowUpRight size={16} />
              </motion.button>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default AdminRecentBookings;