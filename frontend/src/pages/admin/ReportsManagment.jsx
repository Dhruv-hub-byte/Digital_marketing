import AdminSidebar from "../../components/AdminSidebar";
import { useEffect, useState } from "react";
import api from "../../services/api";

function ReportsManagement() {
  const [statsData, setStatsData] = useState({
    totalCampaigns: 0,
    totalLeads: 0,
    activeCampaigns: 0,
    conversionRate: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("/reports")
      .then((res) => setStatsData(res.data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  const stats = [
    { label: "Total Campaigns",  value: statsData.totalCampaigns,  icon: "📢", color: "accent" },
    { label: "Total Leads",      value: statsData.totalLeads,      icon: "💼", color: "success" },
    { label: "Active Campaigns", value: statsData.activeCampaigns, icon: "✅", color: "info" },
    { label: "Conversion Rate",  value: `${statsData.conversionRate}%`, icon: "📈", color: "warning" },
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

          {loading ? (
            <div className="dm-empty">
              <div className="dm-empty-icon">⏳</div>
              <p>Loading analytics…</p>
            </div>
          ) : (
            <div className="dm-stats-grid">
              {stats.map((s) => (
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