import { useEffect, useMemo, useState } from "react";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminPageHeader from "../../components/admin/AdminPageHeader";
import AdminSearchBar from "../../components/admin/AdminSearchBar";
import AdminTable from "../../components/admin/AdminTable";
import AdminActionButtons from "../../components/admin/AdminActionButtons";
import AdminFormModal from "../../components/admin/AdminFormModal";
import AdminUserForm from "../../components/admin/AdminUserForm";
import ConfirmDialog from "../../components/common/ConfirmDialog";
import api from "../../services/api";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [deleteUser, setDeleteUser] = useState(null);

  const loadUsers = async () => {
    try {
      setLoading(true);

      const response = await api.get("/users/alluser");

      setUsers(response.data || []);
    } catch (error) {
      console.error("Failed to load users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) {
      return users;
    }

    return users.filter(
      (user) =>
        user.name?.toLowerCase().includes(value) ||
        user.email?.toLowerCase().includes(value) ||
        user.phone?.includes(value)
    );
  }, [users, search]);

  const handleUpdateUser = async (formData) => {
    if (!selectedUser) return;

    try {
      setSaving(true);

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
      };

      // Password is sent only when the admin entered a new password.
      if (formData.password?.trim()) {
        payload.password = formData.password;
      }

      const response = await api.put(
        `/users/update-user/${selectedUser.userId}`,
        payload
      );

      setUsers((currentUsers) =>
        currentUsers.map((user) =>
          user.userId === selectedUser.userId
            ? response.data
            : user
        )
      );

      setSelectedUser(null);
    } catch (error) {
      console.error("Failed to update user:", error);
    } finally {
      setSaving(false);
    }
  };

  const handleDeleteUser = async () => {
    if (!deleteUser) return;

    try {
      await api.delete(`/users/delete-user/${deleteUser.userId}`);

      setUsers((currentUsers) =>
        currentUsers.filter(
          (user) => user.userId !== deleteUser.userId
        )
      );

      setDeleteUser(null);
    } catch (error) {
      console.error("Failed to delete user:", error);
    }
  };

  const columns = [
    {
      key: "userId",
      label: "ID",
    },
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "phone",
      label: "Phone",
      render: (user) => user.phone || "—",
    },
    {
      key: "actions",
      label: "Actions",
      render: (user) => (
        <AdminActionButtons
          onEdit={() => setSelectedUser(user)}
          onDelete={() => setDeleteUser(user)}
        />
      ),
    },
  ];

  return (
    <AdminLayout>
      <AdminPageHeader
        title="Manage Users"
        description="View, search, update and manage registered users."
      />

      <div className="admin-page-toolbar">
        <AdminSearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search users by name, email or phone..."
        />
      </div>

      <AdminTable
        columns={columns}
        data={filteredUsers}
        loading={loading}
        emptyMessage={
          search
            ? "No users match your search."
            : "No users found."
        }
      />

      <AdminFormModal
        isOpen={Boolean(selectedUser)}
        onClose={() => !saving && setSelectedUser(null)}
        title="Update User"
      >
        <AdminUserForm
          user={selectedUser}
          onSubmit={handleUpdateUser}
          loading={saving}
        />
      </AdminFormModal>

      <ConfirmDialog
        isOpen={Boolean(deleteUser)}
        onClose={() => setDeleteUser(null)}
        onConfirm={handleDeleteUser}
        title="Delete User"
        message={
          deleteUser
            ? `Are you sure you want to delete ${deleteUser.name}?`
            : "Are you sure you want to delete this user?"
        }
      />
    </AdminLayout>
  );
};

export default ManageUsers;