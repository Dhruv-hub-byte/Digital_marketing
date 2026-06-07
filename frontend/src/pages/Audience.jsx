import { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import api from "../services/api";

function Audience() {
  const [industry, setIndustry] = useState("IT");
  const [location, setLocation] = useState("");
  const [experienceLevel, setExperienceLevel] = useState("Entry Level");
  const [companySize, setCompanySize] = useState("1–50");
  const [loading, setLoading] = useState(false);
  const [audiences, setAudiences] = useState([]);

  useEffect(() => {
    fetchAudiences();
  }, []);

  const fetchAudiences = async () => {
    try {
      const res = await api.get("/audiences");
      setAudiences(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await api.post("/audiences", {
        industry,
        location,
        experience_level: experienceLevel,
        company_size: companySize
      });
      alert("Audience saved!");
      setLocation("");
      fetchAudiences();
    } catch (err) {
      console.log(err);
      alert("Failed to save audience");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dm-layout">
      <Sidebar />
      <div className="dm-main">
        <div className="dm-page">
          <div className="dm-page-header">
            <div>
              <div className="dm-page-title">Audience Targeting</div>
              <div className="dm-page-subtitle">Define and filter your target audience segments</div>
            </div>
            <span className="dm-badge info">{audiences.length} Segments</span>
          </div>

          <div className="dm-card" style={{ maxWidth: 560, marginBottom: "28px" }}>
            <div className="dm-card-header">
              <span className="dm-card-title">🎯 Audience Filters</span>
            </div>
            <div className="dm-card-body">
              <form onSubmit={handleSave}>
                <div className="dm-form-group">
                  <label className="dm-label">Industry</label>
                  <select className="dm-select" value={industry} onChange={(e) => setIndustry(e.target.value)}>
                    <option>IT</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                    <option>Education</option>
                  </select>
                </div>

                <div className="dm-form-group">
                  <label className="dm-label">Location</label>
                  <input
                    type="text"
                    className="dm-input"
                    placeholder="e.g. San Francisco, CA"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                  />
                </div>

                <div className="dm-form-group">
                  <label className="dm-label">Experience Level</label>
                  <select className="dm-select" value={experienceLevel} onChange={(e) => setExperienceLevel(e.target.value)}>
                    <option>Entry Level</option>
                    <option>Mid Level</option>
                    <option>Senior Level</option>
                    <option>Executive</option>
                  </select>
                </div>

                <div className="dm-form-group">
                  <label className="dm-label">Company Size</label>
                  <select className="dm-select" value={companySize} onChange={(e) => setCompanySize(e.target.value)}>
                    <option>1–50</option>
                    <option>51–200</option>
                    <option>201–1000</option>
                    <option>1000+</option>
                  </select>
                </div>

                <button type="submit" className="dm-btn dm-btn-primary" disabled={loading}>
                  {loading ? "Saving…" : "💾 Save Audience"}
                </button>
              </form>
            </div>
          </div>

          <div className="dm-card">
            <div className="dm-card-header">
              <span className="dm-card-title">📋 Saved Audiences</span>
            </div>
            <div className="dm-table-wrap">
              <table className="dm-table">
                <thead>
                  <tr>
                    <th>Industry</th>
                    <th>Location</th>
                    <th>Experience Level</th>
                    <th>Company Size</th>
                  </tr>
                </thead>
                <tbody>
                  {audiences.length === 0 ? (
                    <tr>
                      <td colSpan={4}>
                        <div className="dm-empty">
                          <div className="dm-empty-icon">🎯</div>
                          <p>No audience segments saved</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    audiences.map((a) => (
                      <tr key={a.id}>
                        <td><strong>{a.industry}</strong></td>
                        <td>{a.location || "—"}</td>
                        <td>{a.experience_level}</td>
                        <td>{a.company_size}</td>
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

export default Audience;