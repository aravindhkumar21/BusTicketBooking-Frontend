const Input = ({
  label,
  type = "text",
  name,
  value,
  onChange,
  placeholder = "",
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

      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
      />

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

export default Input;