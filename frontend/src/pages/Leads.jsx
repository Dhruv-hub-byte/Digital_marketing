import Sidebar from "../components/Sidebar";
import { useEffect, useState } from "react";
import api from "../services/api";

function Leads() {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    api.get("/leads")
      .then((res) => setLeads(res.data))
      .catch((err) => console.log(err));
  }, []);

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