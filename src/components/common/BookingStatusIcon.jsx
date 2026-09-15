import {
  CheckCircle,
  XCircle,
  Clock,
  CircleCheck,
} from "lucide-react";

const BookingStatusIcon = ({
  status,
  size = 22,
}) => {
  const normalizedStatus = status?.toUpperCase();

  const iconMap = {
    BOOKED: <CheckCircle size={size} />,
    COMPLETED: <CircleCheck size={size} />,
    CANCELLED: <XCircle size={size} />,
    PENDING: <Clock size={size} />,
  };

  return (
    <span
      className={`booking-status-icon booking-status-${normalizedStatus?.toLowerCase()}`}
    >
      {iconMap[normalizedStatus] || <Clock size={size} />}
    </span>
  );
};

export default BookingStatusIcon;