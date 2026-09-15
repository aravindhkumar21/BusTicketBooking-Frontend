import { useState } from "react";
import {
  Mail,
  Phone,
  User,
  Hash,
  Pencil,
  Save,
  X,
} from "lucide-react";

import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/layout/PageContainer";
import Card from "../../components/common/Card";
import SectionHeader from "../../components/layout/SectionHeader";
import InfoRow from "../../components/common/InfoRow";

import useAuth from "../../hooks/useAuth";
import { updateUser } from "../../services/userApi";

const Profile = () => {
  const { user } = useAuth();

  const [editing, setEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleEdit = () => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      password: "",
    });

    setMessage("");
    setError("");
    setEditing(true);
  };

  const handleCancel = () => {
    setEditing(false);
    setError("");
    setMessage("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setMessage("");

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || null,
        password: formData.password.trim() || null,
      };

      const updatedUser = await updateUser(
        user.userId,
        payload
      );

      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );

      setMessage("Profile updated successfully!");

      setTimeout(() => {
        window.location.reload();
      }, 800);
    } catch (err) {
      console.error("Unable to update profile:", err);

      setError(
        err.response?.data?.message ||
          "Unable to update profile."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <MainLayout>
      <PageContainer>
        <div className="profile-page">
          <SectionHeader
            title="My Profile"
            subtitle="View and update your account information."
          />

          <Card className="profile-card">
            <div className="profile-header">
              <div className="profile-avatar">
                <User size={32} />
              </div>

              <div>
                <h2>{user?.name || "Traveller"}</h2>
                <p>
                  {user?.email || "No email available"}
                </p>
              </div>

              {!editing && (
                <button
                  type="button"
                  onClick={handleEdit}
                  className="profile-edit-button"
                >
                  <Pencil size={17} />
                  Edit Profile
                </button>
              )}
            </div>

            {!editing ? (
              <div className="profile-info">
                <InfoRow
                  icon={<Hash size={18} />}
                  label="User ID"
                  value={user?.userId ?? "N/A"}
                />

                <InfoRow
                  icon={<User size={18} />}
                  label="Name"
                  value={user?.name || "N/A"}
                />

                <InfoRow
                  icon={<Mail size={18} />}
                  label="Email"
                  value={user?.email || "N/A"}
                />

                <InfoRow
                  icon={<Phone size={18} />}
                  label="Phone"
                  value={user?.phone || "Not provided"}
                />
              </div>
            ) : (
              <form
                className="profile-edit-form"
                onSubmit={handleSubmit}
              >
                <div className="profile-form-group">
                  <label>Name</label>

                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="profile-form-group">
                  <label>Email</label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="profile-form-group">
                  <label>Phone</label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div className="profile-form-group">
                  <label>New Password</label>

                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Leave blank to keep current password"
                  />
                </div>

                {error && (
                  <p className="profile-error">
                    {error}
                  </p>
                )}

                {message && (
                  <p className="profile-success">
                    {message}
                  </p>
                )}

                <div className="profile-form-actions">
                  <button
                    type="button"
                    onClick={handleCancel}
                    disabled={loading}
                  >
                    <X size={17} />
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                  >
                    <Save size={17} />

                    {loading
                      ? "Updating..."
                      : "Save Changes"}
                  </button>
                </div>
              </form>
            )}
          </Card>
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default Profile;