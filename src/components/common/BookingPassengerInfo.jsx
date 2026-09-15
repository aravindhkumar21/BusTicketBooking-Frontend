import { Users, Armchair } from "lucide-react";

const BookingPassengerInfo = ({
  numberOfSeats = 0,
  selectedSeats = [],
}) => {
  return (
    <div className="booking-passenger-info">
      <div className="booking-passenger-item">
        <Users size={18} />
        <div>
          <span>Passengers</span>
          <strong>{numberOfSeats}</strong>
        </div>
      </div>

      <div className="booking-passenger-item">
        <Armchair size={18} />
        <div>
          <span>Seats</span>
          <strong>
            {selectedSeats.length
              ? selectedSeats.join(", ")
              : "—"}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default BookingPassengerInfo;