import { motion } from "framer-motion";
import { RotateCcw, SlidersHorizontal } from "lucide-react";
import Dropdown from "../common/Dropdown";
import PriceRange from "../common/PriceRange";
import Button from "../common/Button";
import { BUS_TYPES } from "../../utils/constants";

const BusFilters = ({
  busType = "",
  maxFare = "",
  onBusTypeChange,
  onMaxFareChange,
  onReset,
}) => {
  const busTypeOptions = [
    {
      value: BUS_TYPES.AC_SLEEPER,
      label: "AC Sleeper",
    },
    {
      value: BUS_TYPES.NON_AC_SLEEPER,
      label: "Non-AC Sleeper",
    },
    {
      value: BUS_TYPES.AC_SEATER,
      label: "AC Seater",
    },
    {
      value: BUS_TYPES.NON_AC_SEATER,
      label: "Non-AC Seater",
    },
  ];

  return (
    <motion.aside
      className="bus-filters"
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="bus-filters-header">
        <div>
          <SlidersHorizontal size={20} />
          <h3>Filters</h3>
        </div>

        <Button
          type="button"
          className="bus-filter-reset"
          onClick={onReset}
        >
          <RotateCcw size={15} />
          Reset
        </Button>
      </div>

      <div className="bus-filter-group">
        <Dropdown
          label="Bus type"
          name="busType"
          value={busType}
          onChange={(event) =>
            onBusTypeChange?.(event.target.value)
          }
          options={busTypeOptions}
          placeholder="All bus types"
        />
      </div>

      <div className="bus-filter-group">
        <PriceRange
          value={maxFare}
          onChange={onMaxFareChange}
        />
      </div>
    </motion.aside>
  );
};

export default BusFilters;