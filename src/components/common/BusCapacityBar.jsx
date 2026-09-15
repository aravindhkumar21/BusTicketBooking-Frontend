import ProgressBar from "./ProgressBar";

const BusCapacityBar = ({
  availableSeats = 0,
  totalSeats = 0,
}) => {
  if (!totalSeats) return null;

  const bookedSeats = totalSeats - availableSeats;

  return (
    <div className="bus-capacity-bar">
      <ProgressBar
        value={bookedSeats}
        max={totalSeats}
        label={`${availableSeats} seats available`}
      />
    </div>
  );
};

export default BusCapacityBar;