import { useEffect, useState } from "react";
import {
  Users,
  BusFront,
  Map,
  Ticket,
  CreditCard,
} from "lucide-react";
import AdminLayout from "../../components/admin/AdminLayout";
import AdminPageHeader from "../../components/admin/AdminPageHeader";
import AdminStatCard from "../../components/admin/AdminStatCard";
import AdminRecentBookings from "../../components/admin/AdminRecentBookings";
import AdminRecentPayments from "../../components/admin/AdminRecentPayments";
import AdminLoadingState from "../../components/admin/AdminLoadingState";
import api from "../../services/api";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [buses, setBuses] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadDashboardData = async () => {
      try {
        setLoading(true);

        const [
          usersResponse,
          busesResponse,
          routesResponse,
          bookingsResponse,
          paymentsResponse,
        ] = await Promise.all([
          api.get("/admins/alladmins"),
          api.get("/buses/allbuses"),
          api.get("/routes/allroutes"),
          api.get("/api/bookings/allbookings"),
          api.get("/api/payments/allpayments"),
        ]);

        setUsers(usersResponse.data || []);
        setBuses(busesResponse.data || []);
        setRoutes(routesResponse.data || []);
        setBookings(bookingsResponse.data || []);
        setPayments(paymentsResponse.data || []);
      } catch (error) {
        console.error("Failed to load admin dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadDashboardData();
  }, []);

  const recentBookings = [...bookings]
    .sort(
      (a, b) =>
        new Date(b.bookingDate || 0) -
        new Date(a.bookingDate || 0)
    )
    .slice(0, 5);

  const recentPayments = [...payments]
    .sort(
      (a, b) =>
        new Date(b.paymentTime || 0) -
        new Date(a.paymentTime || 0)
    )
    .slice(0, 5);

  if (loading) {
    return (
      <AdminLayout>
        <AdminLoadingState message="Loading dashboard..." />
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <AdminPageHeader
        title="Dashboard"
        description="Overview of your bus booking system."
      />

      <section className="admin-stats-grid">
        <AdminStatCard
          title="Total Users"
          value={users.length}
          icon={Users}
          description="Registered users"
        />

        <AdminStatCard
          title="Total Buses"
          value={buses.length}
          icon={BusFront}
          description="Available bus records"
        />

        <AdminStatCard
          title="Total Routes"
          value={routes.length}
          icon={Map}
          description="Configured routes"
        />

        <AdminStatCard
          title="Total Bookings"
          value={bookings.length}
          icon={Ticket}
          description="All bookings"
        />

        <AdminStatCard
          title="Total Payments"
          value={payments.length}
          icon={CreditCard}
          description="All payment records"
        />
      </section>

      <section className="admin-dashboard-grid">
        <div className="admin-dashboard-panel">
          <div className="admin-dashboard-panel-header">
            <div>
              <h2>Recent Bookings</h2>
              <p>Latest booking activity</p>
            </div>
          </div>

          <AdminRecentBookings bookings={recentBookings} />
        </div>

        <div className="admin-dashboard-panel">
          <div className="admin-dashboard-panel-header">
            <div>
              <h2>Recent Payments</h2>
              <p>Latest payment activity</p>
            </div>
          </div>

          <AdminRecentPayments payments={recentPayments} />
        </div>
      </section>
    </AdminLayout>
  );
};

export default AdminDashboard;