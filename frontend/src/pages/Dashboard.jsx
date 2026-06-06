import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import api from "../services/api";

function Dashboard() {
  const [stats, setStats] = useState({
    totalCampaigns: 0,
    totalLeads: 0,
    activeCampaigns: 0,
    conversionRate: 0,
  });

  useEffect(() => {
    api.get("/dashboard")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err));
  }, []);

  const cards = [
    { label: "Total Campaigns", value: stats.totalCampaigns, icon: "📢", color: "accent" },
    { label: "Total Leads",     value: stats.totalLeads,     icon: "💼", color: "success" },
    { label: "Active Campaigns",value: stats.activeCampaigns,icon: "✅", color: "info" },
    { label: "Conversion Rate", value: `${stats.conversionRate}%`, icon: "📈", color: "warning" },
  ];

  return (
    <div className="dm-layout">
      <Sidebar />
      <div className="dm-main">
        <div className="dm-page">
          <div className="dm-page-header">
            <div>
              <div className="dm-page-title">Dashboard</div>
              <div className="dm-page-subtitle">Overview of your marketing performance</div>
            </div>
            <div className="dm-avatar">U</div>
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
              <span className="dm-card-title">Recent Activity</span>
            </div>
            <div className="dm-card-body">
              <div className="dm-empty">
                <div className="dm-empty-icon">📋</div>
                <p>No recent activity to show</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;