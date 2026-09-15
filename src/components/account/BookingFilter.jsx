import { BOOKING_STATUS } from "../../utils/constants";

const BookingFilter = ({ value = "ALL", onChange }) => {
  const options = [
    { value: "ALL", label: "All bookings" },
    ...Object.values(BOOKING_STATUS).map((status) => ({
      value: status,
      label: status,
    })),
  ];

  return (
    <div className="booking-filter">
      <label htmlFor="booking-status-filter">
        Filter bookings
      </label>

      <select
        id="booking-status-filter"
        value={value}
        onChange={(event) => onChange?.(event.target.value)}
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default BookingFilter;