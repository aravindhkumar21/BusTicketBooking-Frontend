import { Armchair } from "lucide-react";

const SelectedSeatsDisplay = ({
  seats = [],
}) => {
  if (!seats.length) {
    return (
      <div className="selected-seats-display empty">
        <span>No seats selected</span>
      </div>
    );
  }

  return (
    <div className="selected-seats-display">
      <div className="selected-seats-header">
        <Armchair size={18} />
        <span>Selected Seats</span>
      </div>

      <div className="selected-seats-list">
        {seats.map((seat) => (
          <span
            key={seat}
            className="selected-seat-chip"
          >
            {seat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SelectedSeatsDisplay;