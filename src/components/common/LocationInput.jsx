import { MapPin } from "lucide-react";

const LocationInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  required = false,
}) => {
  return (
    <div className="form-field location-input">
      {label && (
        <label htmlFor={name}>{label}</label>
      )}

      <div className="location-input-wrapper">
        <MapPin size={18} />

        <input
          id={name}
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      </div>
    </div>
  );
};

export default LocationInput;