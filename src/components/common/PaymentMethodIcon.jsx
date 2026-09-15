import {
  Smartphone,
  CreditCard,
  Landmark,
  Banknote,
} from "lucide-react";

const PaymentMethodIcon = ({
  method,
  size = 22,
}) => {
  const normalizedMethod = method?.toUpperCase();

  const iconMap = {
    UPI: <Smartphone size={size} />,
    CREDIT_CARD: <CreditCard size={size} />,
    DEBIT_CARD: <CreditCard size={size} />,
    NET_BANKING: <Landmark size={size} />,
    CASH: <Banknote size={size} />,
  };

  return (
    <span
      className={`payment-method-icon payment-method-${normalizedMethod?.toLowerCase()}`}
    >
      {iconMap[normalizedMethod] || <CreditCard size={size} />}
    </span>
  );
};

export default PaymentMethodIcon;