import formatCurrency from "../../utils/formatCurrency";

const BookingAmountBreakdown = ({
  fare = 0,
  seatCount = 0,
  totalAmount = 0,
}) => {
  return (
    <div className="booking-amount-breakdown">
      <div className="amount-row">
        <span>Fare per seat</span>
        <span>{formatCurrency(fare)}</span>
      </div>

      <div className="amount-row">
        <span>Number of seats</span>
        <span>{seatCount}</span>
      </div>

      <div className="amount-divider" />

      <div className="amount-row total">
        <strong>Total Amount</strong>
        <strong>{formatCurrency(totalAmount)}</strong>
      </div>
    </div>
  );
};

export default BookingAmountBreakdown;