const Dropdown = ({
  label,
  name,
  value,
  onChange,
  options = [],
  placeholder = "Select an option",
  required = false,
  disabled = false,
  error = "",
}) => {
  const errorId = `${name}-error`;

  return (
    <div className="form-field">
      {label && (
        <label htmlFor={name}>
          {label}
          {required && <span aria-hidden="true"> *</span>}
        </label>
      )}

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
      >
        <option value="" disabled>
          {placeholder}
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

      {error && (
        <span
          id={errorId}
          className="field-error"
          role="alert"
        >
          {error}
        </span>
      )}
    </div>
  );
};

export default Dropdown;