import { useEffect, useMemo, useState } from "react";
import { Plus } from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";
import AdminPageHeader from "../../components/admin/AdminPageHeader";
import AdminSearchBar from "../../components/admin/AdminSearchBar";
import AdminTable from "../../components/admin/AdminTable";
import AdminActionButtons from "../../components/admin/AdminActionButtons";
import AdminFormModal from "../../components/admin/AdminFormModal";
import AdminBusForm from "../../components/admin/AdminBusForm";
import ConfirmDialog from "../../components/common/ConfirmDialog";
import Button from "../../components/common/Button";
import StatusBadge from "../../components/common/StatusBadge";

import useAuth from "../../hooks/useAuth";
import api from "../../services/api";

const ManageBuses = () => {
  const { user } = useAuth();

  const [buses, setBuses] = useState([]);
  const [routes, setRoutes] = useState([]);

  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [deleteBus, setDeleteBus] = useState(null);

  const loadData = async () => {
    try {
      setLoading(true);

      const [busesResponse, routesResponse] = await Promise.all([
        api.get("/buses/allbuses"),
        api.get("/routes/allroutes"),
      ]);

      setBuses(busesResponse.data || []);
      setRoutes(routesResponse.data || []);
    } catch (error) {
      console.error("Failed to load buses:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const filteredBuses = useMemo(() => {
  const value = search.trim().toLowerCase();

  if (!value) {
    return buses;
  }

  // If user enters only a number, search by exact Bus ID
  if (/^\d+$/.test(value)) {
    return buses.filter(
      (bus) => String(bus.busId) === value
    );
  }

  return buses.filter((bus) => {
    const routeText = `${bus.route?.source || ""} ${
      bus.route?.destination || ""
    }`.toLowerCase();

    return (
      bus.busName?.toLowerCase().includes(value) ||
      bus.busNumber?.toLowerCase().includes(value) ||
      bus.busType?.toLowerCase().includes(value) ||
      routeText.includes(value)
    );
  });
}, [buses, search]);

  const openCreateForm = () => {
    setSelectedBus(null);
    setShowForm(true);
  };

  const openEditForm = (bus) => {
    setSelectedBus(bus);
    setShowForm(true);
  };

  const closeForm = () => {
    if (saving) return;

    setShowForm(false);
    setSelectedBus(null);
  };

  const handleSubmit = async (formData) => {
    try {
      setSaving(true);

      if (selectedBus) {
        const response = await api.put(
          `/buses/update-bus/${selectedBus.busId}`,
          formData
        );

        setBuses((currentBuses) =>
          currentBuses.map((bus) =>
            bus.busId === selectedBus.busId ? response.data : bus
          )
        );
      } else {
        const response = await api.post(
          "/buses/register-bus",
          formData
        );

        setBuses((currentBuses) => [
          ...currentBuses,
          response.data,
        ]);
      }

      closeForm();
    } catch (error) {
      console.error("Failed to save bus:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteBus) return;

    try {
      await api.delete(
        `/buses/delete-bus/${deleteBus.busId}`
      );

      setBuses((currentBuses) =>
        currentBuses.filter(
          (bus) => bus.busId !== deleteBus.busId
        )
      );

      setDeleteBus(null);
    } catch (error) {
      console.error("Failed to delete bus:", error);
    }
  };

  const columns = [
    {
      key: "busId",
      label: "ID",
    },
    {
      key: "busName",
      label: "Bus",
      render: (bus) => (
        <div>
          <strong>{bus.busName}</strong>
          <div>{bus.busNumber}</div>
        </div>
      ),
    },
    {
      key: "busType",
      label: "Type",
      render: (bus) =>
        bus.busType?.replaceAll("_", " ") || "—",
    },
    {
      key: "route",
      label: "Route",
      render: (bus) =>
        bus.route
          ? `${bus.route.source} → ${bus.route.destination}`
          : "—",
    },
    {
      key: "fare",
      label: "Fare",
      render: (bus) =>
        bus.fare != null ? `₹${bus.fare}` : "—",
    },
    {
      key: "availableSeats",
      label: "Seats",
      render: (bus) =>
        `${bus.availableSeats ?? 0}/${bus.totalSeats ?? 0}`,
    },
    {
      key: "active",
      label: "Status",
      render: (bus) => (
        <StatusBadge
          status={bus.active ? "ACTIVE" : "INACTIVE"}
        />
      ),
    },
    {
      key: "actions",
      label: "Actions",
      render: (bus) => (
        <AdminActionButtons
          onEdit={() => openEditForm(bus)}
          onDelete={() => setDeleteBus(bus)}
        />
      ),
    },
  ];

  return (
    <AdminLayout>
      <AdminPageHeader
        title="Manage Buses"
        description="Create, update and manage buses in the booking system."
        action={
          <Button type="button" onClick={openCreateForm}>
            <Plus size={18} />
            Add Bus
          </Button>
        }
      />

      <div className="admin-page-toolbar">
        <AdminSearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search buses by name, number, type or route..."
        />
      </div>

      <AdminTable
        columns={columns}
        data={filteredBuses}
        loading={loading}
        emptyMessage={
          search
            ? "No buses match your search."
            : "No buses found."
        }
      />

      <AdminFormModal
        isOpen={showForm}
        onClose={closeForm}
        title={selectedBus ? "Update Bus" : "Create Bus"}
      >
        <AdminBusForm
          bus={selectedBus}
          routes={routes}
          adminId={user?.userId}
          onSubmit={handleSubmit}
          loading={saving}
        />
      </AdminFormModal>

      <ConfirmDialog
        isOpen={Boolean(deleteBus)}
        onClose={() => setDeleteBus(null)}
        onConfirm={handleDelete}
        title="Delete Bus"
        message={
          deleteBus
            ? `Are you sure you want to delete ${deleteBus.busName}?`
            : "Are you sure you want to delete this bus?"
        }
      />
    </AdminLayout>
  );
};

export default ManageBuses;