import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function Campaigns() {
  const [name, setName] = useState("");
  const [type, setType] = useState("Lead Generation");
  const [budget, setBudget] = useState("");
  const [status, setStatus] = useState("Active");
  const [loading, setLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetchCampaigns();
  }, []);

  const fetchCampaigns = async () => {
    try {
      const res = await api.get("/campaigns");
      setCampaigns(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  async function handleCreate(e) {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post("/campaigns", { 
        campaign_name: name, 
        objective: type, 
        budget, 
        status 
      });
      alert("Campaign created!");
      setName(""); setBudget("");
      fetchCampaigns();
    } catch (err) {
      console.log(err);
      alert("Failed to create campaign");
    } finally {
      setLoading(false);
    }
  }

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
      <Sidebar />
      <div className="dm-main">
        <div className="dm-page">
          <div className="dm-page-header">
            <div>
              <div className="dm-page-title">Campaigns</div>
              <div className="dm-page-subtitle">Create and manage your marketing campaigns</div>
            </div>
            <span className="dm-badge info">{campaigns.length} Campaigns</span>
          </div>

          <div className="dm-card" style={{ maxWidth: 560, marginBottom: "28px" }}>
            <div className="dm-card-header">
              <span className="dm-card-title">📢 Create New Campaign</span>
            </div>
            <div className="dm-card-body">
              <form onSubmit={handleCreate}>
                <div className="dm-form-group">
                  <label className="dm-label">Campaign Name</label>
                  <input
                    className="dm-input"
                    placeholder="e.g. Q3 LinkedIn Outreach"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="dm-form-group">
                  <label className="dm-label">Campaign Objective</label>
                  <select className="dm-select" value={type} onChange={(e) => setType(e.target.value)}>
                    <option>Lead Generation</option>
                    <option>Brand Awareness</option>
                    <option>Retargeting</option>
                    <option>Product Launch</option>
                  </select>
                </div>

                <div className="dm-form-group">
                  <label className="dm-label">Budget ($)</label>
                  <input
                    type="number"
                    className="dm-input"
                    placeholder="5000"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    required
                  />
                </div>

                <div className="dm-form-group">
                  <label className="dm-label">Status</label>
                  <select className="dm-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>Active</option>
                    <option>Paused</option>
                    <option>Draft</option>
                  </select>
                </div>

                <button type="submit" className="dm-btn dm-btn-primary" disabled={loading}>
                  {loading ? "Creating…" : "✚ Create Campaign"}
                </button>
              </form>
            </div>
          </div>

          <div className="dm-card">
            <div className="dm-card-header">
              <span className="dm-card-title">📋 My Campaigns</span>
            </div>
            <div className="dm-table-wrap">
              <table className="dm-table">
                <thead>
                  <tr>
                    <th>Campaign Name</th>
                    <th>Objective</th>
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
                        <td><strong>{c.campaign_name}</strong></td>
                        <td>{c.objective || "—"}</td>
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

export default Campaigns;