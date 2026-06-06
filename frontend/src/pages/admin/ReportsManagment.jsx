import AdminSidebar from "../../components/AdminSidebar";

function ReportsManagement() {
  const stats = [
    { label: "Total Leads",      value: "0",  icon: "💼", color: "success" },
    { label: "Converted Leads",  value: "0",  icon: "✅", color: "accent" },
    { label: "Campaign ROI",     value: "0%", icon: "📈", color: "warning" },
  ];

  return (
    <div className="dm-layout">
      <AdminSidebar />
      <div className="dm-main">
        <div className="dm-page">
          <div className="dm-page-header">
            <div>
              <div className="dm-page-title">Reports</div>
              <div className="dm-page-subtitle">Platform-wide analytics and performance metrics</div>
            </div>
          </div>

          <div className="dm-stats-grid">
            {stats.map((s) => (
              <div key={s.label} className={`dm-stat-card ${s.color}`}>
                <div className={`dm-stat-icon ${s.color}`}>{s.icon}</div>
                <div className="dm-stat-value">{s.value}</div>
                <div className="dm-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          <div className="dm-card">
            <div className="dm-card-header">
              <span className="dm-card-title">📊 Analytics</span>
            </div>
            <div className="dm-card-body">
              <div className="dm-empty">
                <div className="dm-empty-icon">📊</div>
                <p>Advanced analytics coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReportsManagement;