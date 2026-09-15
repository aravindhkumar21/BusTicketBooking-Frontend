import { IndianRupee } from "lucide-react";
import formatCurrency from "../../utils/formatCurrency";

const BusFareDisplay = ({
  fare,
  label = "Starting from",
}) => {
  if (fare === undefined || fare === null) {
    return null;
  }

  return (
    <div className="bus-fare-display">
      <span className="bus-fare-label">{label}</span>

      <div className="bus-fare-value">
        <IndianRupee size={18} />
        <strong>{formatCurrency(fare).replace("₹", "")}</strong>
      </div>
    </div>
  );
};

export default BusFareDisplay;