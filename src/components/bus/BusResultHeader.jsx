import { BusFront } from "lucide-react";

const BusResultHeader = ({
  source = "",
  destination = "",
  count = 0,
}) => {
  return (
    <div className="bus-result-header">
      <div className="bus-result-header-icon">
        <BusFront size={22} />
      </div>

      <div>
        <h2>
          {source && destination
            ? `${source} to ${destination}`
            : "Available buses"}
        </h2>

        <p>
          {count} {count === 1 ? "bus" : "buses"} available
        </p>
      </div>
    </div>
  );
};

export default BusResultHeader;