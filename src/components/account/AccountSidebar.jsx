import { NavLink } from "react-router-dom";
import {
  CalendarCheck,
  CreditCard,
  LayoutDashboard,
  User,
} from "lucide-react";

const AccountSidebar = () => {
  const links = [
    {
      to: "/account",
      label: "Overview",
      icon: LayoutDashboard,
    },
    {
      to: "/my-bookings",
      label: "My bookings",
      icon: CalendarCheck,
    },
    {
      to: "/profile",
      label: "Profile",
      icon: User,
    },
    {
      to: "/payment-history",
      label: "Payment history",
      icon: CreditCard,
    },
  ];

  return (
    <aside className="account-sidebar">
      <nav aria-label="Account navigation">
        {links.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/account"}
            className={({ isActive }) =>
              `account-sidebar-link ${
                isActive ? "active" : ""
              }`
            }
          >
            <Icon size={19} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default AccountSidebar;