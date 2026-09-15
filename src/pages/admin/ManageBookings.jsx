import { useEffect, useMemo, useState } from "react";

import AdminLayout from "../../components/admin/AdminLayout";
import AdminPageHeader from "../../components/admin/AdminPageHeader";
import AdminSearchBar from "../../components/admin/AdminSearchBar";
import AdminTable from "../../components/admin/AdminTable";
import AdminFormModal from "../../components/admin/AdminFormModal";
import AdminActionButtons from "../../components/admin/AdminActionButtons";
import ConfirmDialog from "../../components/common/ConfirmDialog";
import StatusBadge from "../../components/common/StatusBadge";
import Button from "../../components/common/Button";
import formatCurrency from "../../utils/formatCurrency";

import api from "../../services/api";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [deleteBooking, setDeleteBooking] = useState(null);

  const loadBookings = async () => {
    try {
      setLoading(true);

      const response = await api.get("/api/bookings/allbookings");

      setBookings(response.data || []);
    } catch (error) {
      console.error("Failed to load bookings:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBookings();
  }, []);

  const filteredBookings = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return bookings;
    }

    return bookings.filter((booking) => {
      const userName = booking.user?.name?.toLowerCase() || "";
      const userEmail = booking.user?.email?.toLowerCase() || "";
      const busName = booking.bus?.busName?.toLowerCase() || "";
      const busNumber = booking.bus?.busNumber?.toLowerCase() || "";
      const bookingId = String(booking.bookingId || "");

      return (
        bookingId.includes(value) ||
        userName.includes(value) ||
        userEmail.includes(value) ||
        busName.includes(value) ||
        busNumber.includes(value)
      );
    });
  }, [bookings, search]);

  const handleDelete = async () => {
    if (!deleteBooking) return;

    try {
      await api.delete(
        `/api/bookings/delete-booking/${deleteBooking.bookingId}`
      );

      setBookings((currentBookings) =>
        currentBookings.filter(
          (booking) =>
            booking.bookingId !== deleteBooking.bookingId
        )
      );

      setDeleteBooking(null);
    } catch (error) {
      console.error("Failed to delete booking:", error);
    }
  };

  const columns = [
    {
      key: "bookingId",
      label: "ID",
      render: (booking) => `#${booking.bookingId}`,
    },
    {
      key: "user",
      label: "Passenger",
      render: (booking) => (
        <div>
          <strong>{booking.user?.name || "N/A"}</strong>
          <div>{booking.user?.email || "N/A"}</div>
        </div>
      ),
    },
    {
      key: "bus",
      label: "Bus",
      render: (booking) => (
        <div>
          <strong>{booking.bus?.busName || "N/A"}</strong>
          <div>{booking.bus?.busNumber || "N/A"}</div>
        </div>
      ),
    },
    {
      key: "travelDate",
      label: "Travel date",
      render: (booking) => booking.travelDate || "N/A",
    },
    {
      key: "numberOfSeats",
      label: "Seats",
      render: (booking) => booking.numberOfSeats ?? 0,
    },
    {
      key: "totalAmount",
      label: "Amount",
      render: (booking) =>
        formatCurrency(booking.totalAmount),
    },
    {
      key: "bookingStatus",
      label: "Status",
      render: (booking) => (
        <StatusBadge status={booking.bookingStatus} />
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (booking) => (
        <AdminActionButtons
          onEdit={() => setSelectedBooking(booking)}
          onDelete={() => setDeleteBooking(booking)}
        />
      ),
    },
  ];

  return (
    <AdminLayout>
      <AdminPageHeader
        title="Manage Bookings"
        description="View and manage all customer bookings."
      />

      <div className="admin-page-toolbar">
        <AdminSearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search by booking ID, passenger or bus..."
        />
      </div>

      <AdminTable
        columns={columns}
        data={filteredBookings}
        loading={loading}
        emptyMessage={
          search
            ? "No bookings match your search."
            : "No bookings found."
        }
      />

      <AdminFormModal
        isOpen={Boolean(selectedBooking)}
        onClose={() => setSelectedBooking(null)}
        title={`Booking #${selectedBooking?.bookingId || ""}`}
      >
        {selectedBooking && (
          <div className="admin-booking-details">
            <div>
              <strong>Passenger</strong>
              <p>{selectedBooking.user?.name || "N/A"}</p>
            </div>

            <div>
              <strong>Email</strong>
              <p>{selectedBooking.user?.email || "N/A"}</p>
            </div>

            <div>
              <strong>Bus</strong>
              <p>
                {selectedBooking.bus?.busName || "N/A"} (
                {selectedBooking.bus?.busNumber || "N/A"})
              </p>
            </div>

            <div>
              <strong>Route</strong>
              <p>
                {selectedBooking.bus?.route?.source || "N/A"} →{" "}
                {selectedBooking.bus?.route?.destination || "N/A"}
              </p>
            </div>

            <div>
              <strong>Travel date</strong>
              <p>{selectedBooking.travelDate || "N/A"}</p>
            </div>

            <div>
              <strong>Seats</strong>
              <p>
                {selectedBooking.seats
                  ?.map((seat) => seat.seatNumber)
                  .join(", ") || "N/A"}
              </p>
            </div>

            <div>
              <strong>Number of seats</strong>
              <p>{selectedBooking.numberOfSeats ?? 0}</p>
            </div>

            <div>
              <strong>Total amount</strong>
              <p>
                {formatCurrency(selectedBooking.totalAmount)}
              </p>
            </div>

            <div>
              <strong>Booking status</strong>
              <p>
                <StatusBadge
                  status={selectedBooking.bookingStatus}
                />
              </p>
            </div>

            <div>
              <strong>Booking date</strong>
              <p>{selectedBooking.bookingDate || "N/A"}</p>
            </div>

            <div className="admin-booking-details-actions">
              <Button
                type="button"
                onClick={() => setSelectedBooking(null)}
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </AdminFormModal>

      <ConfirmDialog
        isOpen={Boolean(deleteBooking)}
        onClose={() => setDeleteBooking(null)}
        onConfirm={handleDelete}
        title="Delete Booking"
        message={
          deleteBooking
            ? `Are you sure you want to delete booking #${deleteBooking.bookingId}?`
            : "Are you sure you want to delete this booking?"
        }
      />
    </AdminLayout>
  );
};

export default ManageBookings;