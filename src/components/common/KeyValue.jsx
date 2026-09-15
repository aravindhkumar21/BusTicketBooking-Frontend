const KeyValue = ({ label, value }) => {
  return (
    <div className="key-value">
      <span className="key-value-label">
        {label}
      </span>

      <span className="key-value-value">
        {value || "—"}
      </span>
    </div>
  );
};

export default KeyValue;