import Sidebar from "../components/Sidebar";

function Settings() {
  return (
    <div className="dm-layout">
      <Sidebar />
      <div className="dm-main">
        <div className="dm-page">
          <div className="dm-page-header">
            <div>
              <div className="dm-page-title">Settings</div>
              <div className="dm-page-subtitle">Manage your account preferences</div>
            </div>
          </div>

          <div className="dm-card" style={{ maxWidth: 560 }}>
            <div className="dm-card-header">
              <span className="dm-card-title">⚙️ Account Settings</span>
            </div>
            <div className="dm-card-body">
              <div className="dm-form-group">
                <label className="dm-label">Company Name</label>
                <input
                  className="dm-input"
                  placeholder="Acme Corporation"
                />
              </div>

              <div className="dm-form-group">
                <label className="dm-label">Email Notifications</label>
                <select className="dm-select">
                  <option>Enabled</option>
                  <option>Disabled</option>
                </select>
              </div>

              <div className="dm-form-group">
                <label className="dm-label">Timezone</label>
                <select className="dm-select">
                  <option>UTC+5:30 (IST)</option>
                  <option>UTC+0 (GMT)</option>
                  <option>UTC-5 (EST)</option>
                  <option>UTC-8 (PST)</option>
                </select>
              </div>

              <button className="dm-btn dm-btn-success">
                💾 Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;