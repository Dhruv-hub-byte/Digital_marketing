import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import api from "../../services/api";

function CampaignManagement() {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => { fetchCampaigns(); }, []);

  const fetchCampaigns = async () => {
    try {
      const res = await api.get("/admin/campaigns");
      setCampaigns(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const statusColor = (status) => {
    if (!status) return "info";
    const s = status.toLowerCase();
    if (s === "active") return "success";
    if (s === "paused") return "warning";
    if (s === "draft")  return "info";
    return "danger";
  };

  return (
    <div className="dm-layout">
      <AdminSidebar />
      <div className="dm-main">
        <div className="dm-page">
          <div className="dm-page-header">
            <div>
              <div className="dm-page-title">Campaign Management</div>
              <div className="dm-page-subtitle">View and manage all marketing campaigns</div>
            </div>
            <span className="dm-badge info">{campaigns.length} Campaigns</span>
          </div>

          <div className="dm-card">
            <div className="dm-card-header">
              <span className="dm-card-title">📢 All Campaigns</span>
            </div>
            <div className="dm-table-wrap">
              <table className="dm-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Campaign Name</th>
                    <th>Budget</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {campaigns.length === 0 ? (
                    <tr>
                      <td colSpan={4}>
                        <div className="dm-empty">
                          <div className="dm-empty-icon">📢</div>
                          <p>No campaigns found</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    campaigns.map((c) => (
                      <tr key={c.id}>
                        <td style={{ color: "var(--text-muted)" }}>#{c.id}</td>
                        <td><strong>{c.campaign_name}</strong></td>
                        <td>${c.budget?.toLocaleString?.() ?? c.budget}</td>
                        <td>
                          <span className={`dm-badge ${statusColor(c.status)}`}>
                            {c.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampaignManagement;