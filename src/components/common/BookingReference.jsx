import { Ticket } from "lucide-react";

const BookingReference = ({ bookingId }) => {
  if (!bookingId) return null;

  return (
    <div className="booking-reference">
      <div className="booking-reference-icon">
        <Ticket size={20} />
      </div>

      <div className="booking-reference-content">
        <span>Booking Reference</span>
        <strong>#{bookingId}</strong>
      </div>
    </div>
  );
};

export default BookingReference;