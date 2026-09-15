const ProgressBar = ({
  value = 0,
  max = 100,
  label = "",
}) => {
  const percentage = Math.min(
    100,
    Math.max(0, (value / max) * 100)
  );

  return (
    <div className="progress-wrapper">
      {label && (
        <div className="progress-label">
          <span>{label}</span>
          <span>{Math.round(percentage)}%</span>
        </div>
      )}

      <div
        className="progress-track"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin="0"
        aria-valuemax={max}
      >
        <div
          className="progress-fill"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;