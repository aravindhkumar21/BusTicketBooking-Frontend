import { BusFront } from "lucide-react";
import BusTypeBadge from "./BusTypeBadge";

const BusInfo = ({
  busName,
  busNumber,
  busType,
}) => {
  return (
    <div className="bus-info">
      <div className="bus-info-icon">
        <BusFront size={24} />
      </div>

      <div className="bus-info-content">
        <h3>{busName || "Bus"}</h3>
        <span>{busNumber || "—"}</span>
      </div>

      <BusTypeBadge type={busType} />
    </div>
  );
};

export default BusInfo;