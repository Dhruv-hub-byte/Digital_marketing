import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function Reports() {
  const [stats, setStats] = useState({
    totalCampaigns: 0,
    totalLeads: 0,
    activeCampaigns: 0,
    conversionRate: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/reports")
      .then((res) => setStats(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const cards = [
    { label: "Total Campaigns",  value: stats.totalCampaigns,  icon: "📢", color: "accent" },
    { label: "Total Leads",      value: stats.totalLeads,      icon: "💼", color: "success" },
    { label: "Active Campaigns", value: stats.activeCampaigns, icon: "✅", color: "info" },
    { label: "Conversion Rate",  value: `${stats.conversionRate}%`, icon: "📈", color: "warning" },
  ];

  return (
    <div className="dm-layout">
      <Sidebar />
      <div className="dm-main">
        <div className="dm-page">
          <div className="dm-page-header">
            <div>
              <div className="dm-page-title">Reports & Analytics</div>
              <div className="dm-page-subtitle">Live insights from your marketing database</div>
            </div>
          </div>

          {loading ? (
            <div className="dm-empty">
              <div className="dm-empty-icon">⏳</div>
              <p>Loading data…</p>
            </div>
          ) : (
            <div className="dm-stats-grid">
              {cards.map((s) => (
                <div key={s.label} className={`dm-stat-card ${s.color}`}>
                  <div className={`dm-stat-icon ${s.color}`}>{s.icon}</div>
                  <div className="dm-stat-value">{s.value}</div>
                  <div className="dm-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="dm-card">
            <div className="dm-card-header">
              <span className="dm-card-title">📊 Analytics Chart</span>
            </div>
            <div className="dm-card-body">
              <div className="dm-empty">
                <div className="dm-empty-icon">📊</div>
                <p>Chart integration coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reports;