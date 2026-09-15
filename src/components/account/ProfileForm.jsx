import { useState } from "react";
import { Mail, Phone, User } from "lucide-react";
import Input from "../common/Input";
import Button from "../common/Button";

const ProfileForm = ({
  user,
  onSubmit,
  loading = false,
}) => {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    password: "",
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

    onSubmit?.(formData);
  };

  return (
    <form
      className="profile-form"
      onSubmit={handleSubmit}
    >
      <Input
        label="Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        icon={<User size={18} />}
        required
      />

      <Input
        label="Email"
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        icon={<Mail size={18} />}
        required
      />

      <Input
        label="Phone"
        name="phone"
        type="tel"
        value={formData.phone}
        onChange={handleChange}
      />

      <Input
        label="Password"
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        icon={<Phone size={18} />}
        placeholder="Enter password"
      />

      <Button
        type="submit"
        disabled={loading}
      >
        {loading ? "Updating..." : "Update profile"}
      </Button>
    </form>
  );
};

export default ProfileForm;
