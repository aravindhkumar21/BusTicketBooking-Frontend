import { BusFront } from "lucide-react";

const BrandMark = ({ size = 36 }) => {
  return (
    <div
      className="brand-mark"
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      aria-label="Bus Booking"
    >
      <BusFront size={size * 0.55} />
    </div>
  );
};

export default BrandMark;