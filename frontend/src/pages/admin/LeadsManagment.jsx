import { useEffect, useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import api from "../../services/api";

function LeadsManagement() {
  const [leads, setLeads] = useState([]);

  useEffect(() => { fetchLeads(); }, []);

  const fetchLeads = async () => {
    try {
      const res = await api.get("/admin/leads");
      setLeads(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const statusColor = (status) => {
    if (!status) return "info";
    const s = status.toLowerCase();
    if (s === "qualified") return "success";
    if (s === "contacted") return "info";
    if (s === "lost")      return "danger";
    return "warning";
  };

  return (
    <div className="dm-layout">
      <AdminSidebar />
      <div className="dm-main">
        <div className="dm-page">
          <div className="dm-page-header">
            <div>
              <div className="dm-page-title">Leads Management</div>
              <div className="dm-page-subtitle">Track and manage all inbound leads</div>
            </div>
            <span className="dm-badge info">{leads.length} Leads</span>
          </div>

          <div className="dm-card">
            <div className="dm-card-header">
              <span className="dm-card-title">🎯 All Leads</span>
            </div>
            <div className="dm-table-wrap">
              <table className="dm-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.length === 0 ? (
                    <tr>
                      <td colSpan={4}>
                        <div className="dm-empty">
                          <div className="dm-empty-icon">🎯</div>
                          <p>No leads found</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    leads.map((lead) => (
                      <tr key={lead.id}>
                        <td style={{ color: "var(--text-muted)" }}>#{lead.id}</td>
                        <td><strong>{lead.name}</strong></td>
                        <td>{lead.email}</td>
                        <td>
                          <span className={`dm-badge ${statusColor(lead.status)}`}>
                            {lead.status}
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

export default LeadsManagement;