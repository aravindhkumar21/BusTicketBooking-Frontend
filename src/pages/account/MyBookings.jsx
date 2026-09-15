import { useEffect, useState } from "react";
import { Ticket, XCircle } from "lucide-react";

import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/layout/PageContainer";
import SectionHeader from "../../components/layout/SectionHeader";
import Card from "../../components/common/Card";
import EmptyState from "../../components/layout/EmptyState";
import LoadingSpinner from "../../components/layout/LoadingSpinner";

import useAuth from "../../hooks/useAuth";
import { getBookingsByUserId, cancelBookingByUser } from "../../services/bookingApi";

const MyBookings = () => {
  const { user } = useAuth();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cancellingId, setCancellingId] = useState(null);
  const [error, setError] = useState("");

  const fetchBookings = async () => {
    if (!user?.userId) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      setError("");

      const data = await getBookingsByUserId(user.userId);

      setBookings(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error("Unable to load bookings:", err);
      setError("Unable to load your bookings.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [user?.userId]);

  const handleCancelBooking = async (bookingId) => {
    const confirmed = window.confirm(
      `Are you sure you want to cancel Booking #${bookingId}?`
    );

    if (!confirmed) {
      return;
    }

    try {
      setCancellingId(bookingId);
      setError("");

      await cancelBookingByUser(bookingId, user.userId);

      await fetchBookings();
    } catch (err) {
      console.error("Unable to cancel booking:", err);

      setError(
        err.response?.data?.message ||
          "Unable to cancel the booking."
      );
    } finally {
      setCancellingId(null);
    }
  };

  return (
    <MainLayout>
      <PageContainer>
        <div className="my-bookings-page">
          <SectionHeader
            title="My Bookings"
            subtitle="View your booked bus tickets and travel details."
          />

          {loading && <LoadingSpinner />}

          {!loading && error && (
            <Card>
              <p>{error}</p>
            </Card>
          )}

          {!loading && !error && bookings.length === 0 && (
            <EmptyState
              icon={<Ticket size={32} />}
              title="No bookings yet"
              message="You haven't booked any trips yet."
            />
          )}

          {!loading && !error && bookings.length > 0 && (
            <div className="my-bookings-list">
              {bookings.map((booking) => {
                const isCancelled =
                  booking.bookingStatus === "CANCELLED";

                const isCancelling =
                  cancellingId === booking.bookingId;

                return (
                  <Card
                    key={booking.bookingId}
                    className="my-booking-card"
                  >
                    <div className="my-booking-header">
                      <div>
                        <span>Booking ID</span>
                        <h3>#{booking.bookingId}</h3>
                      </div>

                      <span>
                        {booking.bookingStatus}
                      </span>
                    </div>

                    <div className="my-booking-details">
                      <div>
                        <span>Bus</span>
                        <strong>
                          {booking.bus?.busName || "N/A"}
                        </strong>
                      </div>

                      <div>
                        <span>Route</span>
                        <strong>
                          {booking.bus?.route?.source || "N/A"}{" "}
                          →{" "}
                          {booking.bus?.route?.destination || "N/A"}
                        </strong>
                      </div>

                      <div>
                        <span>Travel Date</span>
                        <strong>
                          {booking.travelDate || "N/A"}
                        </strong>
                      </div>

                      <div>
                        <span>Seats</span>
                        <strong>
                          {booking.numberOfSeats}
                        </strong>
                      </div>

                      <div>
                        <span>Total Amount</span>
                        <strong>
                          ₹{booking.totalAmount}
                        </strong>
                      </div>
                    </div>

                    {!isCancelled && (
                      <div className="my-booking-actions">
                        <button
                          type="button"
                          onClick={() =>
                            handleCancelBooking(
                              booking.bookingId
                            )
                          }
                          disabled={isCancelling}
                        >
                          <XCircle size={17} />

                          {isCancelling
                            ? "Cancelling..."
                            : "Cancel Booking"}
                        </button>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          )}
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default MyBookings;