import { useState } from "react";
import { ArrowRightLeft, Search } from "lucide-react";
import { motion } from "framer-motion";
import Input from "../common/Input";
import Button from "../common/Button";

const BusSearchBar = ({
  initialSource = "",
  initialDestination = "",
  onSearch,
}) => {
  const [source, setSource] = useState(initialSource);
  const [destination, setDestination] = useState(
    initialDestination
  );

  const handleSwap = () => {
    setSource(destination);
    setDestination(source);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!source.trim() || !destination.trim()) {
      return;
    }

    onSearch?.({
      source: source.trim(),
      destination: destination.trim(),
    });
  };

  return (
    <motion.form
      className="bus-search-bar"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
    >
      <div className="bus-search-input">
        <Input
          label="From"
          name="source"
          value={source}
          onChange={(event) => setSource(event.target.value)}
          placeholder="Departure city"
          required
        />
      </div>

      <motion.button
        type="button"
        className="bus-search-swap"
        onClick={handleSwap}
        aria-label="Swap departure and destination"
        whileHover={{ rotate: 180 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowRightLeft size={18} />
      </motion.button>

      <div className="bus-search-input">
        <Input
          label="To"
          name="destination"
          value={destination}
          onChange={(event) =>
            setDestination(event.target.value)
          }
          placeholder="Arrival city"
          required
        />
      </div>

      <Button type="submit">
        <Search size={18} />
        Search
      </Button>
    </motion.form>
  );
};

export default BusSearchBar;