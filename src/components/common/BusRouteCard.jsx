import Card from "./Card";
import BusInfo from "./BusInfo";
import BusRouteLine from "./BusRouteLine";
import TimeRange from "./TimeRange";
import BusFareDisplay from "./BusFareDisplay";
import AvailabilityBadge from "./AvailabilityBadge";

const BusRouteCard = ({
  bus,
  onClick,
}) => {
  if (!bus) return null;

  return (
    <Card
      className="bus-route-card"
      onClick={onClick}
    >
      <BusInfo
        busName={bus.busName}
        busNumber={bus.busNumber}
        busType={bus.busType}
      />

      <BusRouteLine
        source={bus.source}
        destination={bus.destination}
      />

      <TimeRange
        departureTime={bus.departureTime}
        arrivalTime={bus.arrivalTime}
      />

      <div className="bus-route-card-footer">
        <BusFareDisplay fare={bus.fare} />

        <AvailabilityBadge
          availableSeats={bus.availableSeats}
        />
      </div>
    </Card>
  );
};

export default BusRouteCard;