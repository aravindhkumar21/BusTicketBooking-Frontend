import BusCard from "./BusCard";
import EmptyState from "../layout/EmptyState";

const BusList = ({
  buses = [],
  onSelectBus,
}) => {
  if (!buses.length) {
    return (
      <EmptyState
        title="No buses found"
        message="Try searching with a different source or destination."
      />
    );
  }

  return (
    <div className="bus-list">
      {buses.map((bus) => (
        <BusCard
          key={bus.busId}
          bus={bus}
          onSelect={onSelectBus}
        />
      ))}
    </div>
  );
};

export default BusList;