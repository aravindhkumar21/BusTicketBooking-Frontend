import { useEffect, useMemo, useState } from "react";

import AdminLayout from "../../components/admin/AdminLayout";
import AdminPageHeader from "../../components/admin/AdminPageHeader";
import AdminSearchBar from "../../components/admin/AdminSearchBar";
import AdminTable from "../../components/admin/AdminTable";
import AdminActionButtons from "../../components/admin/AdminActionButtons";
import AdminFormModal from "../../components/admin/AdminFormModal";
import ConfirmDialog from "../../components/common/ConfirmDialog";
import StatusBadge from "../../components/common/StatusBadge";
import formatCurrency from "../../utils/formatCurrency";

import api from "../../services/api";

const ManagePayments = () => {
  const [payments, setPayments] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [selectedPayment, setSelectedPayment] = useState(null);
  const [deletePayment, setDeletePayment] = useState(null);

  const loadPayments = async () => {
    try {
      setLoading(true);

      const response = await api.get("/api/payments/allpayments");

      setPayments(response.data || []);
    } catch (error) {
      console.error("Failed to load payments:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadPayments();
  }, []);

  const filteredPayments = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return payments;
    }

    return payments.filter((payment) => {
      const paymentId = String(payment.paymentId || "");

      const bookingId = String(
        payment.booking?.bookingId || ""
      );

      const userName =
        payment.booking?.user?.name?.toLowerCase() || "";

      const userEmail =
        payment.booking?.user?.email?.toLowerCase() || "";

      const paymentMethod =
        payment.paymentMethod?.toLowerCase() || "";

      const paymentStatus =
        payment.paymentStatus?.toLowerCase() || "";

      return (
        paymentId.includes(value) ||
        bookingId.includes(value) ||
        userName.includes(value) ||
        userEmail.includes(value) ||
        paymentMethod.includes(value) ||
        paymentStatus.includes(value)
      );
    });
  }, [payments, search]);

  const handleDelete = async () => {
    if (!deletePayment) return;

    try {
      await api.delete(
        `/api/payments/${deletePayment.paymentId}`
      );

      setPayments((currentPayments) =>
        currentPayments.filter(
          (payment) =>
            payment.paymentId !== deletePayment.paymentId
        )
      );

      setDeletePayment(null);
    } catch (error) {
      console.error("Failed to delete payment:", error);
    }
  };

  const columns = [
    {
      key: "paymentId",
      label: "ID",
      render: (payment) => `#${payment.paymentId}`,
    },
    {
      key: "booking",
      label: "Booking",
      render: (payment) =>
        payment.booking?.bookingId
          ? `#${payment.booking.bookingId}`
          : "N/A",
    },
    {
      key: "user",
      label: "Passenger",
      render: (payment) => (
        <div>
          <strong>
            {payment.booking?.user?.name || "N/A"}
          </strong>
          <div>
            {payment.booking?.user?.email || "N/A"}
          </div>
        </div>
      ),
    },
    {
      key: "amount",
      label: "Amount",
      render: (payment) =>
        formatCurrency(payment.amount),
    },
    {
      key: "paymentMethod",
      label: "Method",
      render: (payment) =>
        payment.paymentMethod || "N/A",
    },
    {
      key: "paymentStatus",
      label: "Status",
      render: (payment) => (
        <StatusBadge status={payment.paymentStatus} />
      ),
    },
    {
      key: "paymentTime",
      label: "Payment time",
      render: (payment) =>
        payment.paymentTime
          ? new Date(payment.paymentTime).toLocaleString()
          : "N/A",
    },
    {
      key: "actions",
      label: "Actions",
      render: (payment) => (
        <AdminActionButtons
          onEdit={() => setSelectedPayment(payment)}
          onDelete={() => setDeletePayment(payment)}
        />
      ),
    },
  ];

  return (
    <AdminLayout>
      <AdminPageHeader
        title="Manage Payments"
        description="View and manage all payment records."
      />

      <div className="admin-page-toolbar">
        <AdminSearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by payment, booking, passenger or method..."
        />
      </div>

      <AdminTable
        columns={columns}
        data={filteredPayments}
        loading={loading}
        emptyMessage={
          search
            ? "No payments match your search."
            : "No payments found."
        }
      />

      <AdminFormModal
        isOpen={Boolean(selectedPayment)}
        onClose={() => setSelectedPayment(null)}
        title={`Payment #${selectedPayment?.paymentId || ""}`}
      >
        {selectedPayment && (
          <div className="admin-payment-view">
            <div>
              <strong>Payment ID</strong>
              <p>#{selectedPayment.paymentId}</p>
            </div>

            <div>
              <strong>Booking ID</strong>
              <p>
                #{selectedPayment.booking?.bookingId || "N/A"}
              </p>
            </div>

            <div>
              <strong>Passenger</strong>
              <p>
                {selectedPayment.booking?.user?.name || "N/A"}
              </p>
            </div>

            <div>
              <strong>Email</strong>
              <p>
                {selectedPayment.booking?.user?.email || "N/A"}
              </p>
            </div>

            <div>
              <strong>Amount</strong>
              <p>
                {formatCurrency(selectedPayment.amount)}
              </p>
            </div>

            <div>
              <strong>Payment method</strong>
              <p>
                {selectedPayment.paymentMethod || "N/A"}
              </p>
            </div>

            <div>
              <strong>Payment status</strong>
              <p>
                <StatusBadge
                  status={selectedPayment.paymentStatus}
                />
              </p>
            </div>

            <div>
              <strong>Payment time</strong>
              <p>
                {selectedPayment.paymentTime
                  ? new Date(
                      selectedPayment.paymentTime
                    ).toLocaleString()
                  : "N/A"}
              </p>
            </div>

            <div className="admin-payment-view-actions">
              <button
                type="button"
                onClick={() => setSelectedPayment(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </AdminFormModal>

      <ConfirmDialog
        isOpen={Boolean(deletePayment)}
        onClose={() => setDeletePayment(null)}
        onConfirm={handleDelete}
        title="Delete Payment"
        message={
          deletePayment
            ? `Are you sure you want to delete payment #${deletePayment.paymentId}?`
            : "Are you sure you want to delete this payment?"
        }
      />
    </AdminLayout>
  );
};

export default ManagePayments;