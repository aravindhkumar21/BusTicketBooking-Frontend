import {
  Smartphone,
  CreditCard,
  Landmark,
  Banknote,
} from "lucide-react";

const PaymentMethodSelector = ({
  value,
  onChange,
}) => {
  const methods = [
    {
      value: "UPI",
      label: "UPI",
      icon: <Smartphone size={22} />,
    },
    {
      value: "CREDIT_CARD",
      label: "Credit Card",
      icon: <CreditCard size={22} />,
    },
    {
      value: "DEBIT_CARD",
      label: "Debit Card",
      icon: <CreditCard size={22} />,
    },
    {
      value: "NET_BANKING",
      label: "Net Banking",
      icon: <Landmark size={22} />,
    },
    {
      value: "CASH",
      label: "Cash",
      icon: <Banknote size={22} />,
    },
  ];

  return (
    <div className="payment-method-selector">
      {methods.map((method) => (
        <button
          key={method.value}
          type="button"
          className={`payment-method-option ${
            value === method.value ? "selected" : ""
          }`}
          onClick={() => onChange(method.value)}
        >
          {method.icon}
          <span>{method.label}</span>
        </button>
      ))}
    </div>
  );
};

export default PaymentMethodSelector;