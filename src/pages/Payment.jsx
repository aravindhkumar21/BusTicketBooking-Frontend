import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";
import PageContainer from "../components/layout/PageContainer";
import LoadingSpinner from "../components/layout/LoadingSpinner";

import PaymentSummaryCard from "../components/payment/PaymentSummaryCard";
import PaymentForm from "../components/payment/PaymentForm";
import PaymentSuccessCard from "../components/payment/PaymentSuccessCard";

import { createBooking } from "../services/bookingApi";
import { makePayment } from "../services/paymentApi";

import { useBookingContext } from "../context/BookingContext";
import useAuth from "../hooks/useAuth";

const Payment = () => {
  const navigate = useNavigate();

  const { booking, clearBooking } = useBookingContext();
  const { user } = useAuth();

  const [createdBooking, setCreatedBooking] = useState(null);
  const [payment, setPayment] = useState(null);

  const [creatingBooking, setCreatingBooking] = useState(false);
  const [processingPayment, setProcessingPayment] = useState(false);

  const [error, setError] = useState("");

  const bus = booking.bus;
  const travelDate = booking.travelDate;
  const selectedSeats = booking.selectedSeats || [];

  useEffect(() => {
    if (!user) {
      navigate("/login", { replace: true });
      return;
    }

    if (!bus || !travelDate || !selectedSeats.length) {
      navigate("/seat-selection", { replace: true });
      return;
    }

    const createNewBooking = async () => {
      try {
        setCreatingBooking(true);
        setError("");

        const bookingData = {
          travelDate,
          userId: user.userId,
          busId: bus.busId,
          seatIds: selectedSeats.map((seat) => seat.seatId),
        };

        const response = await createBooking(bookingData);

        setCreatedBooking(response);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Unable to create booking. Please try again."
        );
      } finally {
        setCreatingBooking(false);
      }
    };

    createNewBooking();
  }, [user, bus, travelDate, selectedSeats.length, navigate]);

  const handlePayment = async (paymentData) => {
    if (!createdBooking?.bookingId) {
      setError("Booking is not ready yet. Please wait.");
      return;
    }

    try {
      setProcessingPayment(true);
      setError("");

      const response = await makePayment({
        bookingId: createdBooking.bookingId,
        paymentMethod: paymentData.paymentMethod,
      });

      setPayment(response);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Payment failed. Please try again."
      );
    } finally {
      setProcessingPayment(false);
    }
  };

  const handleViewBooking = (bookingId) => {
    navigate(`/booking/${bookingId}`);
  };

  const handleGoHome = () => {
    clearBooking();
    navigate("/");
  };

  if (!user || !bus || !travelDate || !selectedSeats.length) {
    return null;
  }

  if (creatingBooking) {
    return (
      <MainLayout>
        <PageContainer>
          <div className="payment-page">
            <div className="payment-page-header">
              <h1>Preparing your booking</h1>
              <p>Please wait while we create your booking.</p>
            </div>

            <LoadingSpinner />
          </div>
        </PageContainer>
      </MainLayout>
    );
  }

  if (payment) {
    return (
      <MainLayout>
        <PageContainer>
          <div className="payment-page">
            <div className="payment-page-header">
              <h1>Payment Complete</h1>
              <p>Your booking and payment have been processed.</p>
            </div>

            <PaymentSuccessCard
              payment={payment}
              onViewBooking={handleViewBooking}
              onGoHome={handleGoHome}
            />
          </div>
        </PageContainer>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <PageContainer>
        <div className="payment-page">
          <div className="payment-page-header">
            <h1>Complete Payment</h1>
            <p>Choose your payment method to complete the booking.</p>
          </div>

          {error && (
            <div className="payment-error">
              {error}
            </div>
          )}

          {createdBooking && (
            <div className="payment-layout">
              <PaymentSummaryCard booking={createdBooking} />

              <PaymentForm
                bookingId={createdBooking.bookingId}
                onSubmit={handlePayment}
                loading={processingPayment}
              />
            </div>
          )}
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default Payment;
