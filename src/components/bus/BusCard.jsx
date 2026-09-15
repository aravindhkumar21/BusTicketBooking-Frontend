import { motion } from "framer-motion";
import { ArrowRight, BusFront, Users } from "lucide-react";
import formatCurrency from "../../utils/formatCurrency";
import BusTypeBadge from "../common/BusTypeBadge";
import AvailabilityBadge from "../common/AvailabilityBadge";
import Button from "../common/Button";

const BusCard = ({ bus, onSelect }) => {
  if (!bus) return null;

  return (
    <motion.article
      className="bus-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
    >
      <div className="bus-card-main">
        <div className="bus-card-icon">
          <BusFront size={26} />
        </div>

        <div className="bus-card-info">
          <div className="bus-card-title-row">
            <h3>{bus.busName}</h3>
            <BusTypeBadge type={bus.busType} />
          </div>

          <p className="bus-card-number">
            {bus.busNumber}
          </p>
        </div>
      </div>

      <div className="bus-card-details">
        <div className="bus-card-detail">
          <span>Fare</span>
          <strong>{formatCurrency(bus.fare)}</strong>
        </div>

        <div className="bus-card-detail">
          <span>Available seats</span>

         <div className="bus-card-availability">
           <Users size={16} />
           <AvailabilityBadge
           availableSeats={bus.availableSeats}
           />
        </div>
        </div>
      </div>

      <div className="bus-card-action">
        <Button onClick={() => onSelect?.(bus)}>
          Select bus
          <ArrowRight size={17} />
        </Button>
      </div>
    </motion.article>
  );
};

export default BusCard;