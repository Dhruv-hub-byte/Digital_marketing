import Sidebar from "../components/Sidebar";

function Audience() {
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
          </div>

          <div className="dm-card" style={{ maxWidth: 560 }}>
            <div className="dm-card-header">
              <span className="dm-card-title">🎯 Audience Filters</span>
            </div>
            <div className="dm-card-body">
              <div className="dm-form-group">
                <label className="dm-label">Industry</label>
                <select className="dm-select">
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
                />
              </div>

              <div className="dm-form-group">
                <label className="dm-label">Experience Level</label>
                <select className="dm-select">
                  <option>Entry Level</option>
                  <option>Mid Level</option>
                  <option>Senior Level</option>
                  <option>Executive</option>
                </select>
              </div>

              <div className="dm-form-group">
                <label className="dm-label">Company Size</label>
                <select className="dm-select">
                  <option>1–50</option>
                  <option>51–200</option>
                  <option>201–1000</option>
                  <option>1000+</option>
                </select>
              </div>

              <button className="dm-btn dm-btn-primary">
                💾 Save Audience
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audience;