import { CalendarDays, CreditCard, Receipt, Ticket } from "lucide-react";
import formatCurrency from "../../utils/formatCurrency";

const AdminPaymentDetails = ({ payment }) => {
  if (!payment) return null;

  const booking = payment.booking;
  const user = booking?.user;
  const bus = booking?.bus;

  const seatNumbers =
    booking?.seats?.map((seat) => seat.seatNumber).join(", ") || "N/A";

  return (
    <div className="admin-payment-details">
      <div className="admin-payment-details-header">
        <div className="admin-payment-details-icon">
          <Receipt size={24} />
        </div>

        <div>
          <span>Payment details</span>
          <h2>Payment #{payment.paymentId}</h2>
        </div>
      </div>

      <div className="admin-payment-details-grid">
        <div className="admin-payment-detail">
          <span>Amount</span>
          <strong>{formatCurrency(payment.amount)}</strong>
        </div>

        <div className="admin-payment-detail">
          <span>Payment method</span>
          <strong>{payment.paymentMethod || "N/A"}</strong>
        </div>

        <div className="admin-payment-detail">
          <span>Payment status</span>
          <strong>{payment.paymentStatus || "N/A"}</strong>
        </div>

        <div className="admin-payment-detail">
          <span>Payment time</span>
          <strong>
            {payment.paymentTime
              ? new Date(payment.paymentTime).toLocaleString()
              : "N/A"}
          </strong>
        </div>
      </div>

      {booking && (
        <div className="admin-payment-booking">
          <div className="admin-payment-section-title">
            <Ticket size={19} />
            <h3>Booking information</h3>
          </div>

          <div className="admin-payment-detail-list">
            <div>
              <span>Booking ID</span>
              <strong>#{booking.bookingId}</strong>
            </div>

            <div>
              <span>Passenger</span>
              <strong>{user?.name || "N/A"}</strong>
            </div>

            <div>
              <span>Email</span>
              <strong>{user?.email || "N/A"}</strong>
            </div>

            <div>
              <span>Bus</span>
              <strong>{bus?.busName || "N/A"}</strong>
            </div>

            <div>
              <span>Bus number</span>
              <strong>{bus?.busNumber || "N/A"}</strong>
            </div>

            <div>
              <span>Travel date</span>
              <strong>{booking.travelDate || "N/A"}</strong>
            </div>

            <div>
              <span>Seats</span>
              <strong>{seatNumbers}</strong>
            </div>

            <div>
              <span>Total booking amount</span>
              <strong>{formatCurrency(booking.totalAmount)}</strong>
            </div>
          </div>
        </div>
      )}

      {payment.paymentTime && (
        <div className="admin-payment-time">
          <CalendarDays size={18} />
          <span>
            Payment processed on{" "}
            {new Date(payment.paymentTime).toLocaleString()}
          </span>
        </div>
      )}

      <div className="admin-payment-method">
        <CreditCard size={18} />
        <span>{payment.paymentMethod || "Payment method unavailable"}</span>
      </div>
    </div>
  );
};

export default AdminPaymentDetails;