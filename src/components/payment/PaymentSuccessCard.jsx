import { motion } from "framer-motion";
import { CheckCircle2, Receipt } from "lucide-react";
import Button from "../common/Button";
import formatCurrency from "../../utils/formatCurrency";

const PaymentSuccessCard = ({
  payment,
  onViewBooking,
  onGoHome,
}) => {
  if (!payment) return null;

  const bookingId = payment.booking?.bookingId;

  return (
    <motion.div
      className="payment-success-card"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="payment-success-icon">
        <CheckCircle2 size={48} />
      </div>

      <h2>Payment successful</h2>

      <p>
        Your payment has been completed successfully.
      </p>

      <div className="payment-success-details">
        <div>
          <span>Payment ID</span>
          <strong>{payment.paymentId}</strong>
        </div>

        <div>
          <span>Booking ID</span>
          <strong>{bookingId ?? "N/A"}</strong>
        </div>

        <div>
          <span>Amount</span>
          <strong>
            {formatCurrency(payment.amount)}
          </strong>
        </div>

        <div>
          <span>Payment method</span>
          <strong>{payment.paymentMethod}</strong>
        </div>

        <div>
          <span>Status</span>
          <strong>{payment.paymentStatus}</strong>
        </div>

        <div>
          <span>Payment time</span>
          <strong>
            {payment.paymentTime
              ? new Date(payment.paymentTime).toLocaleString()
              : "N/A"}
          </strong>
        </div>
      </div>

      <div className="payment-success-actions">
        <Button
          onClick={() => onViewBooking?.(bookingId)}
          disabled={!bookingId}
        >
          <Receipt size={17} />
          View booking
        </Button>

        <Button
          variant="secondary"
          onClick={() => onGoHome?.()}
        >
          Go to home
        </Button>
      </div>
    </motion.div>
  );
};

export default PaymentSuccessCard;