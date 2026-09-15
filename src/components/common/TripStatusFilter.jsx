const TripStatusFilter = ({
  value,
  onChange,
}) => {
  const filters = [
    {
      value: "ALL",
      label: "All Trips",
    },
    {
      value: "UPCOMING",
      label: "Upcoming",
    },
    {
      value: "COMPLETED",
      label: "Completed",
    },
    {
      value: "CANCELLED",
      label: "Cancelled",
    },
  ];

  return (
    <div className="trip-status-filter">
      {filters.map((filter) => (
        <button
          key={filter.value}
          type="button"
          className={
            value === filter.value
              ? "active"
              : ""
          }
          onClick={() => onChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default TripStatusFilter;