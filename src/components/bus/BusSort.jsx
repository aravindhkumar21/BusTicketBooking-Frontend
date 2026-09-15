import { ArrowDownUp } from "lucide-react";

const BusSort = ({ value = "", onChange }) => {
  const options = [
    {
      value: "fare-low-high",
      label: "Fare: Low to High",
    },
    {
      value: "fare-high-low",
      label: "Fare: High to Low",
    },
    {
      value: "seats-high-low",
      label: "Available seats",
    },
    {
      value: "name-a-z",
      label: "Bus name: A to Z",
    },
  ];

  return (
    <div className="bus-sort">
      <ArrowDownUp size={18} />

      <label htmlFor="bus-sort-select">
        Sort by
      </label>

      <select
        id="bus-sort-select"
        value={value}
        onChange={onChange}
      >
        <option value="">
          Recommended
        </option>

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

export default BusSort;