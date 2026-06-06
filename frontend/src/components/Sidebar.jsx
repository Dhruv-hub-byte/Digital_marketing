import { Link, useLocation } from "react-router-dom";

const navItems = [
  { to: "/dashboard", icon: "⬡",  label: "Dashboard" },
  { to: "/campaigns", icon: "📢", label: "Campaigns" },
  { to: "/audience",  icon: "🎯", label: "Audience" },
  { to: "/leads",     icon: "💼", label: "Leads" },
  { to: "/reports",   icon: "📊", label: "Reports" },
  { to: "/settings",  icon: "⚙️", label: "Settings" },
];

function Sidebar() {
  const location = useLocation();

  return (
    <div className="dm-sidebar">
      <div className="dm-sidebar-brand">
        <div className="brand-icon">📈</div>
        <div>
          <h2>Marketing Hub</h2>
          <span>User Panel</span>
        </div>
      </div>

      <nav className="dm-sidebar-nav">
        <div className="dm-sidebar-section">Menu</div>
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

export default Sidebar;