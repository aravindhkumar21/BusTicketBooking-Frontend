import { Armchair } from "lucide-react";

const SeatCountBadge = ({ count = 0 }) => {
  return (
    <span className="seat-count-badge">
      <Armchair size={16} />
      <span>
        {count} {count === 1 ? "seat" : "seats"}
      </span>
    </span>
  );
};

export default SeatCountBadge;