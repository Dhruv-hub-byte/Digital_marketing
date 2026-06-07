import { useState } from "react";
import AdminSidebar from "../../components/AdminSidebar";
import api from "../../services/api";

function AdminSettings() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null); // { type: "success" | "error", text: string }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage(null);

    try {
      setLoading(true);

      const payload = { name: form.name, email: form.email };
      if (form.password) payload.password = form.password;

      const res = await api.put("/admin/settings", payload);

      setMessage({ type: "success", text: res.data.message || "Profile updated successfully!" });
      setForm({ ...form, password: "" }); // clear password field after success

    } catch (error) {
      console.log(error);
      setMessage({
        type: "error",
        text: error?.response?.data?.message || "Failed to update profile."
      });
    } finally {
      setLoading(false);
    }
  };

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
              <span className="dm-card-title">⚙️ Update Profile</span>
            </div>
            <div className="dm-card-body">

              {message && (
                <div
                  style={{
                    marginBottom: "16px",
                    padding: "10px 14px",
                    borderRadius: "8px",
                    fontSize: "13.5px",
                    fontWeight: 500,
                    background: message.type === "success"
                      ? "var(--success-light)"
                      : "var(--danger-light)",
                    color: message.type === "success"
                      ? "var(--success)"
                      : "var(--danger)",
                    border: `1px solid ${message.type === "success" ? "var(--success)" : "var(--danger)"}`,
                  }}
                >
                  {message.type === "success" ? "✅" : "❌"} {message.text}
                </div>
              )}

              <form onSubmit={handleUpdate}>

                <div className="dm-form-group">
                  <label className="dm-label">Admin Name</label>
                  <input
                    type="text"
                    name="name"
                    className="dm-input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="dm-form-group">
                  <label className="dm-label">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="dm-input"
                    placeholder="admin@company.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="dm-form-group">
                  <label className="dm-label">New Password <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>(leave blank to keep current)</span></label>
                  <input
                    type="password"
                    name="password"
                    className="dm-input"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="dm-btn dm-btn-primary"
                  disabled={loading}
                >
                  {loading ? "Updating…" : "💾 Update Profile"}
                </button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminSettings;