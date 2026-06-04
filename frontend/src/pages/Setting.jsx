import Sidebar from "../components/sidebar";

function Settings() {
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="container mt-4">

        <h2>Settings</h2>

        <div className="card p-4">

          <div className="mb-3">
            <label>Company Name</label>
            <input
              className="form-control"
              placeholder="Enter Company Name"
            />
          </div>

          <div className="mb-3">
            <label>Email Notifications</label>
            <select className="form-control">
              <option>Enabled</option>
              <option>Disabled</option>
            </select>
          </div>

          <button className="btn btn-success">
            Save Settings
          </button>

        </div>

      </div>
    </div>
  );
}

export default Settings;