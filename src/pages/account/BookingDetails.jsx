import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/layout/PageContainer";
import LoadingSpinner from "../../components/layout/LoadingSpinner";
import Button from "../../components/common/Button";
import BookingDetailsCard from "../../components/account/BookingDetailsCard";

import { getBookingById } from "../../services/bookingApi";
import useAuth from "../../hooks/useAuth";

const BookingDetails = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
      return;
    }

    if (!bookingId) {
      setError("Booking ID is missing.");
      return;
    }

    const fetchBooking = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getBookingById(bookingId);

        setBooking(data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Unable to load booking details. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBooking();
  }, [bookingId, user, navigate]);

  const handleBack = () => {
    navigate("/");
  };

  if (!user) {
    return null;
  }

  return (
    <MainLayout>
      <PageContainer>
        <div className="booking-details-page">
          <div className="booking-details-page-header">
            <h1>Booking Details</h1>
            <p>View your booking and journey information.</p>
          </div>

          {loading && <LoadingSpinner />}

          {!loading && error && (
            <div className="booking-details-error">
              <p>{error}</p>

              <Button type="button" onClick={handleBack}>
                Go to Home
              </Button>
            </div>
          )}

          {!loading && !error && booking && (
            <div className="booking-details-content">
              <BookingDetailsCard booking={booking} />

              <div className="booking-details-actions">
                <Button type="button" onClick={handleBack}>
                  Back to Home
                </Button>
              </div>
            </div>
          )}
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default BookingDetails;
