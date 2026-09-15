import { BusFront } from "lucide-react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="app-logo">
      <BusFront size={28} />
      <span>Bus Booking</span>
    </Link>
  );
};

export default Logo;