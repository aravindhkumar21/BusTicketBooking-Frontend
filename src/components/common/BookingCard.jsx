import { CalendarDays, BusFront } from "lucide-react";
import Card from "./Card";
import RouteDisplay from "./RouteDisplay";
import BookingIdDisplay from "./BookingIdDisplay";
import StatusBadge from "./StatusBadge";
import PriceDisplay from "./PriceDisplay";
import formatDate from "../../utils/formatDate";

const BookingCard = ({
  booking,
  onClick,
}) => {
  if (!booking) return null;

  return (
    <Card
      className="booking-card"
      onClick={onClick}
    >
      <div className="booking-card-header">
        <BookingIdDisplay
          bookingId={booking.bookingId}
        />

        <StatusBadge status={booking.bookingStatus} />
      </div>

      <div className="booking-card-route">
        <BusFront size={20} />

        <RouteDisplay
          source={booking.bus?.route?.source}
          destination={booking.bus?.route?.destination}
        />
      </div>

      <div className="booking-card-date">
        <CalendarDays size={18} />

        <span>
          {formatDate(booking.travelDate)}
        </span>
      </div>

      <div className="booking-card-footer">
        <span>
          {booking.numberOfSeats || 0} seats
        </span>

        <PriceDisplay
          amount={booking.totalAmount}
          label=""
        />
      </div>
    </Card>
  );
};

export default BookingCard;