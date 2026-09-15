import { Copy, Check } from "lucide-react";
import { useState } from "react";

const BookingIdDisplay = ({ bookingId }) => {
  const [copied, setCopied] = useState(false);

  if (!bookingId) return null;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(String(bookingId));
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="booking-id-display">
      <div>
        <span>Booking ID</span>
        <strong>#{bookingId}</strong>
      </div>

      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy booking ID"
        title="Copy booking ID"
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
      </button>
    </div>
  );
};

export default BookingIdDisplay;