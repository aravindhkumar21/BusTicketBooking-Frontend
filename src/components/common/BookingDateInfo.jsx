import { CalendarDays, PlaneTakeoff } from "lucide-react";
import formatDate from "../../utils/formatDate";

const BookingDateInfo = ({
  bookingDate,
  travelDate,
}) => {
  return (
    <div className="booking-date-info">
      <div className="booking-date-item">
        <CalendarDays size={18} />
        <div>
          <span>Booked On</span>
          <strong>{formatDate(bookingDate)}</strong>
        </div>
      </div>

      <div className="booking-date-item">
        <PlaneTakeoff size={18} />
        <div>
          <span>Travel Date</span>
          <strong>{formatDate(travelDate)}</strong>
        </div>
      </div>
    </div>
  );
};

export default BookingDateInfo;