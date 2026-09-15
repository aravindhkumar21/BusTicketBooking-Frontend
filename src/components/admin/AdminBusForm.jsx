import { useState } from "react";
import { BusFront, DollarSign, Hash, Route } from "lucide-react";
import Input from "../common/Input";
import Dropdown from "../common/Dropdown";
import Button from "../common/Button";
import { BUS_TYPES } from "../../utils/constants";

const AdminBusForm = ({
  bus = null,
  routes = [],
  adminId,
  onSubmit,
  loading = false,
}) => {
  const [formData, setFormData] = useState({
    busName: bus?.busName || "",
    busNumber: bus?.busNumber || "",
    busType: bus?.busType || "",
    fare: bus?.fare || "",
    totalSeats: bus?.totalSeats || "",
    adminId: bus?.admin?.adminId || adminId || "",
    routeId: bus?.route?.routeId || "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (
      !formData.busName ||
      !formData.busNumber ||
      !formData.busType ||
      !formData.fare ||
      !formData.totalSeats ||
      !formData.adminId ||
      !formData.routeId
    ) {
      return;
    }

    const busData = {
      busName: formData.busName,
      busNumber: formData.busNumber,
      busType: formData.busType,
      fare: Number(formData.fare),
      totalSeats: Number(formData.totalSeats),
      adminId: Number(formData.adminId),
      routeId: Number(formData.routeId),
    };

    onSubmit?.(busData);
  };

  const routeOptions = routes.map((route) => ({
    value: route.routeId,
    label: `${route.source} → ${route.destination}`,
  }));

  const busTypeOptions = Object.values(BUS_TYPES).map((type) => ({
    value: type,
    label: type.replaceAll("_", " "),
  }));

  return (
    <form className="admin-bus-form" onSubmit={handleSubmit}>
      <Input
        label="Bus name"
        name="busName"
        value={formData.busName}
        onChange={handleChange}
        icon={<BusFront size={18} />}
        required
      />

      <Input
        label="Bus number"
        name="busNumber"
        value={formData.busNumber}
        onChange={handleChange}
        icon={<Hash size={18} />}
        required
      />

      <Dropdown
        label="Bus type"
        name="busType"
        value={formData.busType}
        onChange={handleChange}
        options={busTypeOptions}
        required
      />

      <Input
        label="Fare"
        name="fare"
        type="number"
        min="0.01"
        step="0.01"
        value={formData.fare}
        onChange={handleChange}
        icon={<DollarSign size={18} />}
        required
      />

      <Input
        label="Total seats"
        name="totalSeats"
        type="number"
        min="1"
        value={formData.totalSeats}
        onChange={handleChange}
        icon={<Hash size={18} />}
        required
      />

      <Dropdown
        label="Route"
        name="routeId"
        value={formData.routeId}
        onChange={handleChange}
        options={routeOptions}
        required
      />

      <div className="admin-form-actions">
        <Button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : bus
              ? "Update bus"
              : "Create bus"}
        </Button>
      </div>
    </form>
  );
};

export default AdminBusForm;