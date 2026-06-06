import AdminSidebar from "../../components/AdminSidebar";
import api from "../../services/api";
import { useEffect, useState } from "react";

function AdminDashboard() {
  const [data, setData] = useState({ totalUsers: 0, totalCampaigns: 0, totalLeads: 0 });

  useEffect(() => {
    api.get("/admin/dashboard")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);

  const cards = [
    { label: "Total Users",     value: data.totalUsers,     icon: "👥", color: "accent" },
    { label: "Total Campaigns", value: data.totalCampaigns, icon: "📢", color: "info" },
    { label: "Total Leads",     value: data.totalLeads,     icon: "💼", color: "success" },
  ];

  return (
    <div className="dm-layout">
      <AdminSidebar />
      <div className="dm-main">
        <div className="dm-page">
          <div className="dm-page-header">
            <div>
              <div className="dm-page-title">Admin Dashboard</div>
              <div className="dm-page-subtitle">Platform-wide overview and statistics</div>
            </div>
            <div className="dm-avatar">A</div>
          </div>

          <div className="dm-stats-grid">
            {cards.map((card) => (
              <div key={card.label} className={`dm-stat-card ${card.color}`}>
                <div className={`dm-stat-icon ${card.color}`}>{card.icon}</div>
                <div className="dm-stat-value">{card.value}</div>
                <div className="dm-stat-label">{card.label}</div>
              </div>
            ))}
          </div>

          <div className="dm-card">
            <div className="dm-card-header">
              <span className="dm-card-title">🕐 Recent Activity</span>
            </div>
            <div className="dm-card-body">
              <div className="dm-empty">
                <div className="dm-empty-icon">🕐</div>
                <p>No recent activity to display</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;