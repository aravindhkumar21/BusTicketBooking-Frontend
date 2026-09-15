import formatDate from "../../utils/formatDate";

const DateDisplay = ({
  date,
  label = "Date",
  className = "",
}) => {
  return (
    <div className={`date-display ${className}`}>
      {label && (
        <span className="date-label">
          {label}
        </span>
      )}

      <span className="date-value">
        {formatDate(date)}
      </span>
    </div>
  );
};

export default DateDisplay;