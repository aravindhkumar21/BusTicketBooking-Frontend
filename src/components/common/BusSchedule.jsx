import { Clock, ArrowRight } from "lucide-react";

const BusSchedule = ({
  departureTime,
  arrivalTime,
}) => {
  return (
    <div className="bus-schedule">
      <div className="schedule-time">
        <span>Departure</span>
        <strong>{departureTime || "—"}</strong>
      </div>

      <div className="schedule-line">
        <span />
        <ArrowRight size={18} />
        <span />
      </div>

      <div className="schedule-time">
        <span>Arrival</span>
        <strong>{arrivalTime || "—"}</strong>
      </div>
    </div>
  );
};

export default BusSchedule;