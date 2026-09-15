import { motion } from "framer-motion";
import {
  CalendarDays,
  BusFront,
  Armchair,
  Receipt,
  Clock3,
  Route,
  CreditCard,
} from "lucide-react";

import formatCurrency from "../../utils/formatCurrency";
import BookingStatusIcon from "../common/BookingStatusIcon";

const BookingDetailsCard = ({ booking }) => {
  if (!booking) return null;

  const route = booking.bus?.route;

  return (
    <motion.div
      className="booking-details-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="booking-details-header">
        <div>
          <span>Booking ID</span>
          <h2>#{booking.bookingId}</h2>
        </div>

        <BookingStatusIcon
          status={booking.bookingStatus}
        />
      </div>

      <div className="booking-details-grid">
        <div className="booking-detail-item">
          <BusFront size={20} />

          <div>
            <span>Bus</span>

            <strong>
              {booking.bus?.busName || "Not available"}
            </strong>

            <small>
              {booking.bus?.busNumber || "N/A"}
            </small>

            <small>
              {booking.bus?.busType || "N/A"}
            </small>
          </div>
        </div>

        <div className="booking-detail-item">
          <Route size={20} />

          <div>
            <span>Route</span>

            <strong>
              {route?.source || "N/A"} →{" "}
              {route?.destination || "N/A"}
            </strong>
          </div>
        </div>

        <div className="booking-detail-item">
          <Clock3 size={20} />

          <div>
            <span>Journey time</span>

            <strong>
              {route?.departureTime || "N/A"}
            </strong>

            <small>
              Arrival: {route?.arrivalTime || "N/A"}
            </small>
          </div>
        </div>

        <div className="booking-detail-item">
          <CalendarDays size={20} />

          <div>
            <span>Travel date</span>

            <strong>
              {booking.travelDate || "N/A"}
            </strong>
          </div>
        </div>

        <div className="booking-detail-item">
          <Armchair size={20} />

          <div>
            <span>Seats</span>

            <strong>
              {booking.numberOfSeats || 0}
            </strong>
          </div>
        </div>

        <div className="booking-detail-item">
          <Receipt size={20} />

          <div>
            <span>Total amount</span>

            <strong>
              {formatCurrency(booking.totalAmount)}
            </strong>
          </div>
        </div>

        {booking.payment && (
          <div className="booking-detail-item">
            <CreditCard size={20} />

            <div>
              <span>Payment</span>

              <strong>
                {booking.payment.paymentStatus || "N/A"}
              </strong>

              <small>
                {booking.payment.paymentMethod || "N/A"}
              </small>
            </div>
          </div>
        )}
      </div>

      <div className="booking-seat-list">
        <span>Selected seats</span>

        <div>
          {booking.seats?.length ? (
            booking.seats.map((seat) => (
              <span key={seat.seatId}>
                {seat.seatNumber}
              </span>
            ))
          ) : (
            <span>No seat information</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BookingDetailsCard;