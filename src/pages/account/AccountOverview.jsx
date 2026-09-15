
import { Link } from "react-router-dom";
import { CalendarDays, CreditCard, User, Ticket } from "lucide-react";

import MainLayout from "../../components/layout/MainLayout";
import PageContainer from "../../components/layout/PageContainer";
import Card from "../../components/common/Card";
import SectionHeader from "../../components/layout/SectionHeader";
import useAuth from "../../hooks/useAuth";

const AccountOverview = () => {
  const { user } = useAuth();

  return (
    <MainLayout>
      <PageContainer>
        <div className="account-overview-page">
          <SectionHeader
            title="My Account"
            subtitle="Manage your profile, bookings and payments."
          />

          <Card className="account-welcome-card">
            <div className="account-welcome-icon">
              <User size={28} />
            </div>

            <div>
              <p>Welcome back</p>
              <h2>{user?.name || "Traveller"}</h2>
              <span>{user?.email || ""}</span>
            </div>
          </Card>

          <div className="account-overview-grid">
            <Link to="/account/profile">
              <Card className="account-menu-card">
                <User size={24} />
                <h3>My Profile</h3>
                <p>View and update your personal information.</p>
              </Card>
            </Link>

            <Link to="/account/bookings">
              <Card className="account-menu-card">
                <Ticket size={24} />
                <h3>My Bookings</h3>
                <p>View your booked bus tickets and travel details.</p>
              </Card>
            </Link>

            <Link to="/account/payments">
              <Card className="account-menu-card">
                <CreditCard size={24} />
                <h3>Payment History</h3>
                <p>View your previous payment information.</p>
              </Card>
            </Link>

            <Link to="/search">
              <Card className="account-menu-card">
                <CalendarDays size={24} />
                <h3>Book a Trip</h3>
                <p>Search buses and plan your next journey.</p>
              </Card>
            </Link>
          </div>
        </div>
      </PageContainer>
    </MainLayout>
  );
};

export default AccountOverview;
