import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomeSearchCard = () => {
  const navigate = useNavigate();

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [travelDate, setTravelDate] = useState("");

  const handleSearch = () => {
    if (!source.trim() || !destination.trim()) {
      return;
    }

    navigate("/search", {
      state: {
        source: source.trim(),
        destination: destination.trim(),
        travelDate,
      },
    });
  };

  return (
    <motion.section
      className="home-search-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="home-search-card-header">
        <div>
          <span className="section-eyebrow">
            Plan your journey
          </span>

          <h2>Where are you going?</h2>
        </div>

        <p>
          Search available buses and find the right journey for you.
        </p>
      </div>

      <div className="home-search-fields">
        <div className="home-search-field">
          <MapPin size={20} />

          <div>
            <label htmlFor="home-search-from">
              From
            </label>

            <input
              id="home-search-from"
              type="text"
              placeholder="Departure city"
              value={source}
              onChange={(event) =>
                setSource(event.target.value)
              }
            />
          </div>
        </div>

        <div className="home-search-field">
          <MapPin size={20} />

          <div>
            <label htmlFor="home-search-to">
              To
            </label>

            <input
              id="home-search-to"
              type="text"
              placeholder="Arrival city"
              value={destination}
              onChange={(event) =>
                setDestination(event.target.value)
              }
            />
          </div>
        </div>

        <div className="home-search-field">
          <CalendarDays size={20} />

          <div>
            <label htmlFor="home-search-date">
              Travel date
            </label>

            <input
              id="home-search-date"
              type="date"
              value={travelDate}
              onChange={(event) =>
                setTravelDate(event.target.value)
              }
            />
          </div>
        </div>

        <motion.button
          type="button"
          className="home-search-submit"
          onClick={handleSearch}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
        >
          Search
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </motion.section>
  );
};

export default HomeSearchCard;