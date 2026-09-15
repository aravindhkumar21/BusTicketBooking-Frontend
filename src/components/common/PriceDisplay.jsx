import formatCurrency from "../../utils/formatCurrency";

const PriceDisplay = ({
  amount,
  label = "Total",
  className = "",
}) => {
  return (
    <div className={`price-display ${className}`}>
      {label && (
        <span className="price-label">
          {label}
        </span>
      )}

      <span className="price-value">
        {formatCurrency(amount)}
      </span>
    </div>
  );
};

export default PriceDisplay;