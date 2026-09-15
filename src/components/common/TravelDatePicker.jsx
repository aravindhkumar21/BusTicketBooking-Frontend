const TravelDatePicker = ({
  value,
  onChange,
  min,
  label = "Travel Date",
  required = true,
}) => {
  return (
    <div className="form-field">
      <label htmlFor="travelDate">{label}</label>

      <input
        id="travelDate"
        type="date"
        name="travelDate"
        value={value}
        onChange={onChange}
        min={min}
        required={required}
      />
    </div>
  );
};

export default TravelDatePicker;