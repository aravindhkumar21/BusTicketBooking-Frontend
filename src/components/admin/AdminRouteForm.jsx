import { useState } from "react";
import { MapPin, Clock } from "lucide-react";
import Input from "../common/Input";
import Button from "../common/Button";

const AdminRouteForm = ({
  route = null,
  onSubmit,
  loading = false,
}) => {
  const [formData, setFormData] = useState({
    source: route?.source || "",
    destination: route?.destination || "",
    departureTime: route?.departureTime || "",
    arrivalTime: route?.arrivalTime || "",
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
      !formData.source ||
      !formData.destination ||
      !formData.departureTime ||
      !formData.arrivalTime
    ) {
      return;
    }

    const routeData = {
      source: formData.source,
      destination: formData.destination,
      departureTime: formData.departureTime,
      arrivalTime: formData.arrivalTime,
    };

    onSubmit?.(routeData);
  };

  return (
    <form className="admin-route-form" onSubmit={handleSubmit}>
      <Input
        label="Source"
        name="source"
        value={formData.source}
        onChange={handleChange}
        icon={<MapPin size={18} />}
        required
      />

      <Input
        label="Destination"
        name="destination"
        value={formData.destination}
        onChange={handleChange}
        icon={<MapPin size={18} />}
        required
      />

      <Input
        label="Departure time"
        name="departureTime"
        type="time"
        value={formData.departureTime}
        onChange={handleChange}
        icon={<Clock size={18} />}
        required
      />

      <Input
        label="Arrival time"
        name="arrivalTime"
        type="time"
        value={formData.arrivalTime}
        onChange={handleChange}
        icon={<Clock size={18} />}
        required
      />

      <div className="admin-form-actions">
        <Button type="submit" disabled={loading}>
          {loading
            ? "Saving..."
            : route
              ? "Update route"
              : "Create route"}
        </Button>
      </div>
    </form>
  );
};

export default AdminRouteForm;