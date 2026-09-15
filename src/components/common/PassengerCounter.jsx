import { Minus, Plus } from "lucide-react";

const PassengerCounter = ({
  value = 1,
  min = 1,
  max = 10,
  onChange,
  label = "Passengers",
}) => {
  const decrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const increase = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="passenger-counter">
      <span className="passenger-counter-label">
        {label}
      </span>

      <div className="passenger-counter-controls">
        <button
          type="button"
          onClick={decrease}
          disabled={value <= min}
          aria-label="Decrease passengers"
        >
          <Minus size={18} />
        </button>

        <span>{value}</span>

        <button
          type="button"
          onClick={increase}
          disabled={value >= max}
          aria-label="Increase passengers"
        >
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
};

export default PassengerCounter;