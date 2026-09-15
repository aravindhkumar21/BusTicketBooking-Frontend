import {
  CheckCircle,
  XCircle,
  Clock,
  RotateCcw,
} from "lucide-react";

const PaymentStatusIcon = ({
  status,
  size = 22,
}) => {
  const normalizedStatus = status?.toUpperCase();

  const iconMap = {
    SUCCESS: <CheckCircle size={size} />,
    FAILED: <XCircle size={size} />,
    PENDING: <Clock size={size} />,
    REFUNDED: <RotateCcw size={size} />,
  };

  return (
    <span
      className={`payment-status-icon payment-status-${normalizedStatus?.toLowerCase()}`}
    >
      {iconMap[normalizedStatus] || <Clock size={size} />}
    </span>
  );
};

export default PaymentStatusIcon;