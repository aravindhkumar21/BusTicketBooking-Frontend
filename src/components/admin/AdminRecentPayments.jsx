import { motion } from "framer-motion";
import { CreditCard, WalletCards } from "lucide-react";
import formatCurrency from "../../utils/formatCurrency";
import StatusBadge from "../common/StatusBadge";

const AdminRecentPayments = ({ payments = [] }) => {
  if (!payments.length) {
    return (
      <motion.div
        className="admin-recent-payments-empty"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.35 }}
      >
        <div className="admin-recent-empty-icon">
          <CreditCard size={30} />
        </div>

        <p>No recent payments found.</p>
      </motion.div>
    );
  }

  return (
    <div className="admin-recent-payments">
      {payments.map((payment, index) => (
        <motion.article
          key={payment.paymentId}
          className="admin-recent-payment"
          initial={{
            opacity: 0,
            x: 18,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          whileHover={{
            x: -4,
            scale: 1.01,
          }}
          transition={{
            duration: 0.4,
            delay: index * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="admin-recent-payment-icon"
            whileHover={{
              scale: 1.08,
              rotate: -5,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
            }}
          >
            <CreditCard size={19} />
          </motion.div>

          <div className="admin-recent-payment-info">
            <div className="admin-recent-payment-top">
              <strong>
                Payment #{payment.paymentId}
              </strong>

              <StatusBadge status={payment.paymentStatus} />
            </div>

            <p>
              {payment.booking?.user?.name || "Unknown user"} •{" "}
              Booking #{payment.booking?.bookingId ?? "N/A"}
            </p>

            <div className="admin-recent-payment-meta">
              <span className="admin-payment-method">
                <WalletCards size={14} />
                {payment.paymentMethod || "N/A"}
              </span>

              <strong>
                {formatCurrency(payment.amount)}
              </strong>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default AdminRecentPayments;