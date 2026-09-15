import { motion } from "framer-motion";
import { CalendarDays, CreditCard, Receipt } from "lucide-react";
import formatCurrency from "../../utils/formatCurrency";
import PaymentStatusIcon from "../common/PaymentStatusIcon";

const PaymentHistoryList = ({ payments = [] }) => {
  if (!payments.length) {
    return (
      <div className="payment-history-empty">
        <Receipt size={28} />
        <h3>No payment history</h3>
        <p>Your completed payments will appear here.</p>
      </div>
    );
  }

  return (
    <div className="payment-history-list">
      {payments.map((payment) => (
        <motion.article
          key={payment.paymentId}
          className="payment-history-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="payment-history-header">
            <div>
              <span>Payment #{payment.paymentId}</span>
              <h3>
                {formatCurrency(payment.amount)}
              </h3>
            </div>

            <PaymentStatusIcon
              status={payment.paymentStatus}
            />
          </div>

          <div className="payment-history-details">
            <div>
              <CreditCard size={18} />
              <span>{payment.paymentMethod}</span>
            </div>

            <div>
              <CalendarDays size={18} />
              <span>
                {payment.paymentTime
                  ? new Date(
                      payment.paymentTime
                    ).toLocaleString()
                  : "N/A"}
              </span>
            </div>
          </div>

          {payment.booking?.bookingId && (
            <div className="payment-history-booking">
              <Receipt size={17} />
              <span>
                Booking #{payment.booking.bookingId}
              </span>
            </div>
          )}
        </motion.article>
      ))}
    </div>
  );
};

export default PaymentHistoryList;