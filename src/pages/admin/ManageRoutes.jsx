import { useEffect, useMemo, useState } from "react";
import { Plus } from "lucide-react";

import AdminLayout from "../../components/admin/AdminLayout";
import AdminPageHeader from "../../components/admin/AdminPageHeader";
import AdminSearchBar from "../../components/admin/AdminSearchBar";
import AdminTable from "../../components/admin/AdminTable";
import AdminActionButtons from "../../components/admin/AdminActionButtons";
import AdminFormModal from "../../components/admin/AdminFormModal";
import AdminRouteForm from "../../components/admin/AdminRouteForm";
import ConfirmDialog from "../../components/common/ConfirmDialog";
import Button from "../../components/common/Button";

import api from "../../services/api";

const ManageRoutes = () => {
  const [routes, setRoutes] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [showForm, setShowForm] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [deleteRoute, setDeleteRoute] = useState(null);

  const loadRoutes = async () => {
    try {
      setLoading(true);

      const response = await api.get("/routes/allroutes");

      setRoutes(response.data || []);
    } catch (error) {
      console.error("Failed to load routes:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRoutes();
  }, []);

  const filteredRoutes = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return routes;
    }

    return routes.filter(
      (route) =>
        route.source?.toLowerCase().includes(value) ||
        route.destination?.toLowerCase().includes(value)
    );
  }, [routes, search]);

  const openCreateForm = () => {
    setSelectedRoute(null);
    setShowForm(true);
  };

  const openEditForm = (route) => {
    setSelectedRoute(route);
    setShowForm(true);
  };

  const closeForm = () => {
    if (saving) return;

    setShowForm(false);
    setSelectedRoute(null);
  };

  const handleSubmit = async (formData) => {
    try {
      setSaving(true);

      if (selectedRoute) {
        const response = await api.put(
          `/routes/update-route/${selectedRoute.routeId}`,
          formData
        );

        setRoutes((currentRoutes) =>
          currentRoutes.map((route) =>
            route.routeId === selectedRoute.routeId
              ? response.data
              : route
          )
        );
      } else {
        const response = await api.post(
          "/routes/register-route",
          formData
        );

        setRoutes((currentRoutes) => [
          ...currentRoutes,
          response.data,
        ]);
      }

      closeForm();
    } catch (error) {
      console.error("Failed to save route:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteRoute) return;

    try {
      await api.delete(
        `/routes/delete-route/${deleteRoute.routeId}`
      );

      setRoutes((currentRoutes) =>
        currentRoutes.filter(
          (route) => route.routeId !== deleteRoute.routeId
        )
      );

      setDeleteRoute(null);
    } catch (error) {
      console.error("Failed to delete route:", error);
    }
  };

  const formatTime = (time) => {
    if (!time) return "—";

    return time.slice(0, 5);
  };

  const columns = [
    {
      key: "routeId",
      label: "ID",
    },
    {
      key: "source",
      label: "Source",
    },
    {
      key: "destination",
      label: "Destination",
    },
    {
      key: "departureTime",
      label: "Departure",
      render: (route) => formatTime(route.departureTime),
    },
    {
      key: "arrivalTime",
      label: "Arrival",
      render: (route) => formatTime(route.arrivalTime),
    },
    {
      key: "actions",
      label: "Actions",
      render: (route) => (
        <AdminActionButtons
          onEdit={() => openEditForm(route)}
          onDelete={() => setDeleteRoute(route)}
        />
      ),
    },
  ];

  return (
    <AdminLayout>
      <AdminPageHeader
        title="Manage Routes"
        description="Create, update and manage bus routes."
        action={
          <Button type="button" onClick={openCreateForm}>
            <Plus size={18} />
            Add Route
          </Button>
        }
      />

      <div className="admin-page-toolbar">
        <AdminSearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search routes by source or destination..."
        />
      </div>

      <AdminTable
        columns={columns}
        data={filteredRoutes}
        loading={loading}
        emptyMessage={
          search
            ? "No routes match your search."
            : "No routes found."
        }
      />

      <AdminFormModal
        isOpen={showForm}
        onClose={closeForm}
        title={selectedRoute ? "Update Route" : "Create Route"}
      >
        <AdminRouteForm
          route={selectedRoute}
          onSubmit={handleSubmit}
          loading={saving}
        />
      </AdminFormModal>

      <ConfirmDialog
        isOpen={Boolean(deleteRoute)}
        onClose={() => setDeleteRoute(null)}
        onConfirm={handleDelete}
        title="Delete Route"
        message={
          deleteRoute
            ? `Are you sure you want to delete the route ${deleteRoute.source} → ${deleteRoute.destination}?`
            : "Are you sure you want to delete this route?"
        }
      />
    </AdminLayout>
  );
};

export default ManageRoutes;