import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import PageContainer from "../components/layout/PageContainer";
import BookingSummaryCard from "../components/booking/BookingSummaryCard";
import Button from "../components/common/Button";

import { useBookingContext } from "../context/BookingContext";
import useAuth from "../hooks/useAuth";

const BookingSummary = () => {
  const navigate = useNavigate();

  const { booking } = useBookingContext();
  const { user } = useAuth();

  const bus = booking.bus;
  const travelDate = booking.travelDate;
  const selectedSeats = booking.selectedSeats || [];

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
      return;
    }

    if (!bus) {
      navigate("/search", { replace: true });
      return;
    }

    if (!travelDate || !selectedSeats.length) {
      navigate("/seat-selection", { replace: true });
    }
  }, [user, bus, travelDate, selectedSeats.length, navigate]);

  if (!user || !bus || !travelDate || !selectedSeats.length) {
    return null;
  }

  const handleContinue = () => {
    navigate("/payment");
  };

  const handleBack = () => {
    navigate("/seat-selection");
  };

  return (
    <MainLayout>
      <PageContainer>
        <div className="booking-summary-page">
          <div className="booking-summary-page-header">
            <h1>Booking Summary</h1>
            <p>Review your journey and selected seats before payment.</p>
          </div>

          <div className="booking-summary-content">
            <BookingSummaryCard
              bus={bus}
              travelDate={travelDate}
              selectedSeats={selectedSeats}
            />

            <div className="booking-summary-actions">
              <Button type="button" onClick={handleBack}>
                Back to seat selection
              </Button>

              <Button type="button" onClick={handleContinue}>
                Continue to payment
              </Button>
            </div>
          </div>
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default BookingSummary;