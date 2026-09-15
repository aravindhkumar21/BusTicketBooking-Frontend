import { CreditCard } from "lucide-react";
import PriceDisplay from "./PriceDisplay";

const PaymentSummary = ({
  bookingId,
  paymentMethod,
  amount,
}) => {
  return (
    <div className="payment-summary">
      <div className="payment-summary-header">
        <CreditCard size={20} />
        <h3>Payment Summary</h3>
      </div>

      <div className="payment-summary-row">
        <span>Booking ID</span>
        <strong>
          {bookingId ? `#${bookingId}` : "—"}
        </strong>
      </div>

      <div className="payment-summary-row">
        <span>Payment Method</span>
        <strong>
          {paymentMethod
            ? paymentMethod.replaceAll("_", " ")
            : "—"}
        </strong>
      </div>

      <div className="payment-summary-total">
        <PriceDisplay
          amount={amount}
          label="Amount to Pay"
        />
      </div>
    </div>
  );
};

export default PaymentSummary;