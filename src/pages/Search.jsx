import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { searchBuses } from "../services/busApi";
import { useBookingContext } from "../context/BookingContext";

import MainLayout from "../components/layout/MainLayout";
import PageContainer from "../components/layout/PageContainer";
import BusSearchBar from "../components/bus/BusSearchBar";
import BusFilters from "../components/bus/BusFilters";
import BusResultHeader from "../components/bus/BusResultHeader";
import BusSort from "../components/bus/BusSort";
import BusList from "../components/bus/BusList";
import LoadingSpinner from "../components/layout/LoadingSpinner";

const Search = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { selectBus } = useBookingContext();

  const [buses, setBuses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [source, setSource] = useState(
    location.state?.source || ""
  );

  const [destination, setDestination] = useState(
    location.state?.destination || ""
  );

  const [busType, setBusType] = useState("");
  const [maxFare, setMaxFare] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleSearch = async ({
  source: newSource,
  destination: newDestination,
}) => {
  const cleanSource = newSource.trim();
  const cleanDestination = newDestination.trim();

  if (!cleanSource || !cleanDestination) {
    setError("Please enter both source and destination.");
    return;
  }

  if (
    cleanSource.toLowerCase() ===
    cleanDestination.toLowerCase()
  ) {
    setError(
      "Source and destination cannot be the same."
    );
    return;
  }

  setSource(cleanSource);
  setDestination(cleanDestination);

  setLoading(true);
  setError("");

  try {
    const data = await searchBuses(
      cleanSource,
      cleanDestination
    );

    setBuses(Array.isArray(data) ? data : []);
  } catch (err) {
    setBuses([]);

    setError(
      err.response?.data?.message ||
        "Unable to search buses. Please try again."
    );
  } finally {
    setLoading(false);
  }
};

  const filteredAndSortedBuses = useMemo(() => {
    let result = [...buses];

    if (busType) {
      result = result.filter(
        (bus) => bus.busType === busType
      );
    }

    if (maxFare) {
      result = result.filter(
        (bus) => Number(bus.fare) <= Number(maxFare)
      );
    }

    switch (sortBy) {
      case "fare-low-high":
        result.sort((a, b) => a.fare - b.fare);
        break;

      case "fare-high-low":
        result.sort((a, b) => b.fare - a.fare);
        break;

      case "seats-high-low":
        result.sort(
          (a, b) =>
            b.availableSeats - a.availableSeats
        );
        break;

      case "name-a-z":
        result.sort((a, b) =>
          a.busName.localeCompare(b.busName)
        );
        break;

      default:
        break;
    }

    return result;
  }, [buses, busType, maxFare, sortBy]);

  const handleReset = () => {
    setBusType("");
    setMaxFare("");
    setSortBy("");
  };

  const handleSelectBus = (bus) => {
    selectBus(bus);

    navigate("/seat-selection");
  };

  return (
    <MainLayout>
      <PageContainer>
        <BusSearchBar
          initialSource={source}
          initialDestination={destination}
          onSearch={handleSearch}
        />

        {error && (
          <div className="search-error">
            {error}
          </div>
        )}

        <BusResultHeader
          source={source}
          destination={destination}
          count={filteredAndSortedBuses.length}
        />

        {loading ? (
          <LoadingSpinner />
        ) : (
          <div className="bus-search-layout">
            <BusFilters
              busType={busType}
              maxFare={maxFare}
              onBusTypeChange={setBusType}
              onMaxFareChange={setMaxFare}
              onReset={handleReset}
            />

            <div className="bus-search-results">
              <BusSort
                value={sortBy}
                onChange={(event) =>
                  setSortBy(event.target.value)
                }
              />

              <BusList
                buses={filteredAndSortedBuses}
                onSelectBus={handleSelectBus}
              />
            </div>
          </div>
        )}
      </PageContainer>
    </MainLayout>
  );
};

export default Search;