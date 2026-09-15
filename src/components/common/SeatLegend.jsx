import SeatIcon from "./SeatIcon";

const SeatLegend = () => {
  return (
    <div className="seat-legend">
      <div className="seat-legend-item">
        <SeatIcon status="AVAILABLE" size={20} />
        <span>Available</span>
      </div>

      <div className="seat-legend-item">
        <SeatIcon
          status="AVAILABLE"
          selected
          size={20}
        />
        <span>Selected</span>
      </div>

      <div className="seat-legend-item">
        <SeatIcon status="BOOKED" size={20} />
        <span>Booked</span>
      </div>
    </div>
  );
};

export default SeatLegend;