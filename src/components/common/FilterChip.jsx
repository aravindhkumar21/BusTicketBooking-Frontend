const FilterChip = ({
  label,
  active = false,
  onClick,
  removable = false,
}) => {
  return (
    <button
      type="button"
      className={`filter-chip ${active ? "active" : ""}`}
      onClick={onClick}
    >
      <span>{label}</span>

      {removable && (
        <span
          className="filter-chip-remove"
          aria-hidden="true"
        >
          ×
        </span>
      )}
    </button>
  );
};

export default FilterChip;