import { useState } from "react";
import { CreditCard } from "lucide-react";
import PaymentMethodSelector from "../common/PaymentMethodSelector";
import Button from "../common/Button";
import { PAYMENT_METHODS } from "../../utils/constants";

const PaymentForm = ({
  bookingId,
  onSubmit,
  loading = false,
}) => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!bookingId || !paymentMethod) {
      return;
    }

    const paymentData = {
      bookingId,
      paymentMethod,
    };

    onSubmit?.(paymentData);
  };

  return (
    <form className="payment-form" onSubmit={handleSubmit}>
      <div className="payment-form-header">
        <CreditCard size={21} />

        <div>
          <h3>Payment method</h3>
          <p>Select how you want to pay for your booking.</p>
        </div>
      </div>

      <PaymentMethodSelector
        value={paymentMethod}
        onChange={setPaymentMethod}
        options={Object.values(PAYMENT_METHODS)}
      />

      <Button
        type="submit"
        disabled={loading || !bookingId || !paymentMethod}
      >
        {loading ? "Processing..." : "Make Payment"}
      </Button>
    </form>
  );
};

export default PaymentForm;