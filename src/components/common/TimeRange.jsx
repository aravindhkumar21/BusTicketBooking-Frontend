import { Clock } from "lucide-react";

const TimeRange = ({
  departureTime,
  arrivalTime,
}) => {
  return (
    <div className="time-range">
      <div className="time-point">
        <Clock size={18} />
        <div>
          <span>Departure</span>
          <strong>{departureTime || "—"}</strong>
        </div>
      </div>

      <div className="time-divider" />

      <div className="time-point">
        <Clock size={18} />
        <div>
          <span>Arrival</span>
          <strong>{arrivalTime || "—"}</strong>
        </div>
      </div>
    </div>
  );
};

export default TimeRange;