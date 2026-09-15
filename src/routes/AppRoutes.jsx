import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Search from "../pages/Search";
import AIChat from "../pages/AIChat";
import SeatSelection from "../pages/SeatSelection";
import BookingSummary from "../pages/BookingSummary";
import Payment from "../pages/Payment";

import BookingDetails from "../pages/account/BookingDetails";
import AccountOverview from "../pages/account/AccountOverview";
import MyBookings from "../pages/account/MyBookings";
import PaymentHistory from "../pages/account/PaymentHistory";
import Profile from "../pages/account/Profile";

import ProtectedRoute from "./ProtectedRoute";

import AdminLogin from "../pages/admin/AdminLogin";
import AdminRoute from "./AdminRoute";
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageUsers from "../pages/admin/ManageUsers";
import ManageBuses from "../pages/admin/ManageBuses";
import ManageRoutes from "../pages/admin/ManageRoutes";
import ManageBookings from "../pages/admin/ManageBookings";
import ManagePayments from "../pages/admin/ManagePayments";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Customer */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search />} />
        <Route path="/ai" element={<AIChat />} />
        <Route path="/seat-selection" element={<SeatSelection />} />
        <Route path="/booking-summary" element={<BookingSummary />} />
        <Route path="/payment" element={<Payment />} />
        <Route
          path="/booking/:bookingId"
          element={<BookingDetails />}
        />

        {/* Protected Customer Account Routes */}
        <Route element={<ProtectedRoute />}>
          <Route
            path="/account"
            element={<AccountOverview />}
          />
          <Route
            path="/account/profile"
            element={<Profile />}
          />
          <Route
            path="/account/bookings"
            element={<MyBookings />}
          />
          <Route
            path="/account/payments"
            element={<PaymentHistory />}
          />
        </Route>

        {/* Admin Login */}
        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* Protected Admin Routes */}
        <Route element={<AdminRoute />}>
          <Route
            path="/admin"
            element={<AdminDashboard />}
          />
          <Route
            path="/admin/users"
            element={<ManageUsers />}
          />
          <Route
            path="/admin/buses"
            element={<ManageBuses />}
          />
          <Route
            path="/admin/routes"
            element={<ManageRoutes />}
          />
          <Route
            path="/admin/bookings"
            element={<ManageBookings />}
          />
          <Route
            path="/admin/payments"
            element={<ManagePayments />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;