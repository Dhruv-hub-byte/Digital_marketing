import AdminSidebar from "../../components/AdminSidebar";

function AdminSettings() {
  return (
    <div className="dm-layout">
      <AdminSidebar />
      <div className="dm-main">
        <div className="dm-page">
          <div className="dm-page-header">
            <div>
              <div className="dm-page-title">Admin Settings</div>
              <div className="dm-page-subtitle">Manage platform configuration and admin profile</div>
            </div>
          </div>

          <div className="dm-card" style={{ maxWidth: 560 }}>
            <div className="dm-card-header">
              <span className="dm-card-title">⚙️ Admin Profile</span>
            </div>
            <div className="dm-card-body">
              <div className="dm-form-group">
                <label className="dm-label">Admin Name</label>
                <input type="text" className="dm-input" placeholder="Admin Name" />
              </div>

              <div className="dm-form-group">
                <label className="dm-label">Email</label>
                <input type="email" className="dm-input" placeholder="admin@company.com" />
              </div>

              <div className="dm-form-group">
                <label className="dm-label">New Password</label>
                <input type="password" className="dm-input" placeholder="••••••••" />
              </div>

              <button className="dm-btn dm-btn-primary">
                💾 Update Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;