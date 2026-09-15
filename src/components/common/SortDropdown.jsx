import Dropdown from "./Dropdown";

const SortDropdown = ({
  value,
  onChange,
}) => {
  const options = [
    {
      value: "fare-low",
      label: "Fare: Low to High",
    },
    {
      value: "fare-high",
      label: "Fare: High to Low",
    },
    {
      value: "availability-high",
      label: "Most Seats Available",
    },
    {
      value: "name",
      label: "Bus Name",
    },
  ];

  return (
    <Dropdown
      label="Sort By"
      name="sortBy"
      value={value}
      onChange={onChange}
      options={options}
      placeholder="Sort results"
    />
  );
};

export default SortDropdown;