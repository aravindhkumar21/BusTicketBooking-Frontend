import { MapPin, ArrowRight } from "lucide-react";

const BusRouteLine = ({
  source,
  destination,
}) => {
  return (
    <div className="bus-route-line">
      <div className="bus-route-point">
        <MapPin size={18} />
        <span>{source || "—"}</span>
      </div>

      <ArrowRight size={20} />

      <div className="bus-route-point">
        <MapPin size={18} />
        <span>{destination || "—"}</span>
      </div>
    </div>
  );
};

export default BusRouteLine;