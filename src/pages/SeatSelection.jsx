import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import PageContainer from "../components/layout/PageContainer";
import LoadingSpinner from "../components/layout/LoadingSpinner";

import SeatGrid from "../components/seat/SeatGrid";
import SeatSelectionSummary from "../components/seat/SeatSelectionSummary";

import TravelDatePicker from "../components/common/TravelDatePicker";

import { getSeatsByBus } from "../services/seatApi";
import { useBookingContext } from "../context/BookingContext";

const SeatSelection = () => {
  const navigate = useNavigate();

  const {
    booking,
    setTravelDate,
    setSelectedSeats,
  } = useBookingContext();

  const [seats, setSeats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const selectedSeats = booking.selectedSeats || [];
  const bus = booking.bus;
  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!bus?.busId) {
      navigate("/search", { replace: true });
      return;
    }

    const fetchSeats = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getSeatsByBus(bus.busId);

        setSeats(Array.isArray(data) ? data : []);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Unable to load seats. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchSeats();
  }, [bus?.busId, navigate]);

  const handleSeatSelect = (seat) => {
    const alreadySelected = selectedSeats.some(
      (selectedSeat) =>
        selectedSeat.seatId === seat.seatId
    );

    if (alreadySelected) {
      setSelectedSeats(
        selectedSeats.filter(
          (selectedSeat) =>
            selectedSeat.seatId !== seat.seatId
        )
      );
    } else {
      setSelectedSeats([
        ...selectedSeats,
        seat,
      ]);
    }
  };

  const handleContinue = () => {
    if (!booking.travelDate) {
      setError("Please select your travel date.");
      return;
    }

    if (!selectedSeats.length) {
      setError("Please select at least one seat.");
      return;
    }

    setError("");
    navigate("/booking-summary");
  };

  if (!bus) {
    return null;
  }

  return (
    <MainLayout>
      <PageContainer>
        <div className="seat-selection-page">

          <div className="seat-selection-header">
            <h1>Select Seats</h1>
            <p>
              {bus.busName} • {bus.busNumber}
            </p>
          </div>

          <div className="seat-selection-date">
            <TravelDatePicker
                value={booking.travelDate || ""}
                onChange={(event) =>
                    setTravelDate(event.target.value)
                }
                min={today}
            />
          </div>

          {error && (
            <div className="seat-selection-error">
              {error}
            </div>
          )}

          {loading ? (
            <LoadingSpinner />
          ) : (
            <div className="seat-selection-layout">
              <SeatGrid
                seats={seats}
                selectedSeats={selectedSeats}
                onSeatSelect={handleSeatSelect}
              />

              <SeatSelectionSummary
                selectedSeats={selectedSeats}
                fare={bus.fare}
                onContinue={handleContinue}
              />
            </div>
          )}

        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default SeatSelection;