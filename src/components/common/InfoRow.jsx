const InfoRow = ({
  icon,
  label,
  value,
  className = "",
}) => {
  return (
    <div className={`info-row ${className}`}>
      {icon && (
        <div className="info-row-icon">
          {icon}
        </div>
      )}

      <div className="info-row-content">
        <span className="info-row-label">
          {label}
        </span>

        <span className="info-row-value">
          {value || "—"}
        </span>
      </div>
    </div>
  );
};

export default InfoRow;