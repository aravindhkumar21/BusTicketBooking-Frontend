import { motion } from "framer-motion";
import { CalendarDays, CreditCard, Receipt } from "lucide-react";
import formatCurrency from "../../utils/formatCurrency";

const PaymentSummaryCard = ({ booking }) => {
  if (!booking) return null;

  return (
    <motion.div
      className="payment-summary-card"
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="payment-summary-header">
        <Receipt size={22} />

        <div>
          <span>Payment summary</span>
          <h2>Booking #{booking.bookingId}</h2>
        </div>
      </div>

      <div className="payment-summary-details">
        <div className="payment-summary-row">
          <CalendarDays size={19} />
          <div>
            <span>Travel date</span>
            <strong>{booking.travelDate}</strong>
          </div>
        </div>

        <div className="payment-summary-row">
          <CreditCard size={19} />
          <div>
            <span>Payment status</span>
            <strong>
              {booking.payment?.paymentStatus || "Pending"}
            </strong>
          </div>
        </div>
      </div>

      <div className="payment-summary-total">
        <span>Total amount</span>
        <strong>
          {formatCurrency(booking.totalAmount)}
        </strong>
      </div>
    </motion.div>
  );
};

export default PaymentSummaryCard;