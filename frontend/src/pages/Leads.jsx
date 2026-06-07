import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import api from "../services/api";

function Leads() {
  const [leads, setLeads] = useState([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState("New");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = () => {
    api.get("/leads")
      .then((res) => setLeads(res.data))
      .catch((err) => console.log(err));
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post("/leads", { name, email, company, status });
      alert("Lead created!");
      setName(""); setEmail(""); setCompany(""); setStatus("New");
      fetchLeads();
    } catch (err) {
      console.log(err);
      alert("Failed to create lead");
    } finally {
      setLoading(false);
    }
  };

  const statusColor = (status) => {
    if (!status) return "info";
    const s = status.toLowerCase();
    if (s === "qualified") return "success";
    if (s === "contacted") return "info";
    if (s === "lost") return "danger";
    return "warning";
  };

  return (
    <div className="dm-layout">
      <Sidebar />
      <div className="dm-main">
        <div className="dm-page">
          <div className="dm-page-header">
            <div>
              <div className="dm-page-title">Leads</div>
              <div className="dm-page-subtitle">Track and manage your sales leads</div>
            </div>
            <span className="dm-badge info">{leads.length} Total</span>
          </div>

          <div className="dm-card" style={{ maxWidth: 560, marginBottom: "28px" }}>
            <div className="dm-card-header">
              <span className="dm-card-title">➕ Add New Lead</span>
            </div>
            <div className="dm-card-body">
              <form onSubmit={handleCreate}>
                <div className="dm-form-group">
                  <label className="dm-label">Lead Name</label>
                  <input
                    className="dm-input"
                    placeholder="e.g. Jane Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="dm-form-group">
                  <label className="dm-label">Email</label>
                  <input
                    type="email"
                    className="dm-input"
                    placeholder="jane@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="dm-form-group">
                  <label className="dm-label">Company</label>
                  <input
                    className="dm-input"
                    placeholder="e.g. Acme Corp"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>

                <div className="dm-form-group">
                  <label className="dm-label">Status</label>
                  <select className="dm-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option>New</option>
                    <option>Contacted</option>
                    <option>Qualified</option>
                    <option>Lost</option>
                  </select>
                </div>

                <button type="submit" className="dm-btn dm-btn-primary" disabled={loading}>
                  {loading ? "Adding…" : "✚ Add Lead"}
                </button>
              </form>
            </div>
          </div>

          <div className="dm-card">
            <div className="dm-card-header">
              <span className="dm-card-title">💼 Lead Pipeline</span>
            </div>
            <div className="dm-table-wrap">
              <table className="dm-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Company</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.length === 0 ? (
                    <tr>
                      <td colSpan={5}>
                        <div className="dm-empty">
                          <div className="dm-empty-icon">💼</div>
                          <p>No leads found</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    leads.map((lead) => (
                      <tr key={lead.id}>
                        <td><strong>{lead.name}</strong></td>
                        <td>{lead.email}</td>
                        <td>{lead.company || "—"}</td>
                        <td>
                          <span className={`dm-badge ${statusColor(lead.status)}`}>
                            {lead.status}
                          </span>
                        </td>
                        <td>
                          <button className="dm-btn dm-btn-secondary dm-btn-sm">View</button>
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

export default Leads;