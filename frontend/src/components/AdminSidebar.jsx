import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/admin/dashboard", icon: "⬡", label: "Dashboard" },
  { to: "/admin/users",     icon: "👥", label: "Users" },
  { to: "/admin/campaigns", icon: "📢", label: "Campaigns" },
  { to: "/admin/leads",     icon: "🎯", label: "Leads" },
  { to: "/admin/reports",   icon: "📊", label: "Reports" },
  { to: "/admin/settings",  icon: "⚙️", label: "Settings" },
];

function AdminSidebar() {
  const location = useLocation();

  return (
    <div className="dm-sidebar">
      <div className="dm-sidebar-brand">
        <div className="brand-icon">⚡</div>
        <div>
          <h2>DM Admin</h2>
          <span>Control Panel</span>
        </div>
      </div>

      <nav className="dm-sidebar-nav">
        <div className="dm-sidebar-section">Navigation</div>
        {navItems.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            className={`dm-nav-link ${location.pathname === item.to ? "active" : ""}`}
          >
            <span className="nav-icon">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="dm-sidebar-footer">
        <Link to="/login" className="dm-logout-btn">
          <span>🚪</span>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default AdminSidebar;