const TimeDisplay = ({
  time,
  label = "Time",
  className = "",
}) => {
  if (!time) return null;

  return (
    <div className={`time-display ${className}`}>
      {label && (
        <span className="time-label">
          {label}
        </span>
      )}

      <span className="time-value">
        {time}
      </span>
    </div>
  );
};

export default TimeDisplay;