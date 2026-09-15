const PriceRange = ({
  min = 0,
  max = 5000,
  value = max,
  onChange,
}) => {
  return (
    <div className="price-range">
      <div className="price-range-header">
        <span>Maximum Fare</span>
        <strong>₹{value}</strong>
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />

      <div className="price-range-values">
        <span>₹{min}</span>
        <span>₹{max}</span>
      </div>
    </div>
  );
};

export default PriceRange;