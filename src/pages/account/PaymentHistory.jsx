import { useEffect, useState } from "react";
import { CreditCard } from "lucide-react";

import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/layout/PageContainer";
import SectionHeader from "../../components/layout/SectionHeader";
import Card from "../../components/common/Card";
import EmptyState from "../../components/layout/EmptyState";
import LoadingSpinner from "../../components/layout/LoadingSpinner";

import useAuth from "../../hooks/useAuth";
import { getPaymentsByUserId } from "../../services/paymentApi";
import formatDateTime from "../../utils/formatDateTime";

const PaymentHistory = () => {
  const { user } = useAuth();

  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchPayments = async () => {
      if (!user?.userId) {
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const data = await getPaymentsByUserId(user.userId);

        setPayments(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Unable to load payment history:", err);
        setError("Unable to load your payment history.");
      } finally {
        setLoading(false);
      }
    };

    fetchPayments();
  }, [user?.userId]);

  return (
    <MainLayout>
      <PageContainer>
        <div className="payment-history-page">
          <SectionHeader
            title="Payment History"
            subtitle="View your previous payment information."
          />

          {loading && <LoadingSpinner />}

          {!loading && error && (
            <Card>
              <p>{error}</p>
            </Card>
          )}

          {!loading && !error && payments.length === 0 && (
            <EmptyState
              icon={<CreditCard size={32} />}
              title="No payments yet"
              message="You haven't made any payments yet."
            />
          )}

          {!loading && !error && payments.length > 0 && (
            <div className="payment-history-list">
              {payments.map((payment) => (
                <Card
                  key={payment.paymentId}
                  className="payment-history-card"
                >
                  <div className="payment-history-header">
                    <div>
                      <span>Payment ID</span>
                      <h3>#{payment.paymentId}</h3>
                    </div>

                    <span>{payment.paymentStatus}</span>
                  </div>

                  <div className="payment-history-details">
                    <div>
                      <span>Booking ID</span>
                      <strong>
                        #{payment.booking?.bookingId || "N/A"}
                      </strong>
                    </div>

                    <div>
                      <span>Amount</span>
                      <strong>
                        ₹{payment.amount}
                      </strong>
                    </div>

                    <div>
                      <span>Payment Method</span>
                      <strong>
                        {payment.paymentMethod || "N/A"}
                      </strong>
                    </div>

                    <div>
                      <span>Payment Time</span>
                        <strong>
                          {formatDateTime(payment.paymentTime) || "N/A"}
                        </strong>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default PaymentHistory;