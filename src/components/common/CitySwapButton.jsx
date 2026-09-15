import { ArrowUpDown } from "lucide-react";
import IconButton from "./IconButton";

const CitySwapButton = ({ onSwap }) => {
  return (
    <IconButton
      icon={<ArrowUpDown size={18} />}
      label="Swap source and destination"
      onClick={onSwap}
      className="city-swap-button"
    />
  );
};

export default CitySwapButton;