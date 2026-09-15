import { BusFront } from "lucide-react";

const BusTypeBadge = ({ type }) => {
  if (!type) return null;

  const formattedType = type
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="bus-type-badge">
      <BusFront size={16} />
      <span>{formattedType}</span>
    </div>
  );
};

export default BusTypeBadge;