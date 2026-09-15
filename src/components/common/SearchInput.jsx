import { Search, X } from "lucide-react";

const SearchInput = ({
  value,
  onChange,
  onSubmit,
  onClear,
  placeholder = "Search...",
}) => {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && onSubmit) {
      onSubmit();
    }
  };

  return (
    <div className="search-input">
      <Search size={20} />

      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        aria-label={placeholder}
      />

      {value && onClear && (
        <button
          type="button"
          onClick={onClear}
          aria-label="Clear search"
        >
          <X size={18} />
        </button>
      )}

      {onSubmit && (
        <button
          type="button"
          onClick={onSubmit}
        >
          Search
        </button>
      )}
    </div>
  );
};

export default SearchInput;