import { ArrowRight } from "lucide-react";

const RouteDisplay = ({
  source,
  destination,
  className = "",
}) => {
  return (
    <div className={`route-display ${className}`}>
      <span>{source || "—"}</span>

      <ArrowRight size={20} />

      <span>{destination || "—"}</span>
    </div>
  );
};

export default RouteDisplay;