import Sidebar from "../components/sidebar";

function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container mt-4">
        <h2>Dashboard</h2>

        <div className="row">

          <div className="col-md-3">
            <div className="card p-3">
              <h5>Total Campaigns</h5>
              <h3>12</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3">
              <h5>Total Leads</h5>
              <h3>350</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3">
              <h5>Active Campaigns</h5>
              <h3>8</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3">
              <h5>Conversion Rate</h5>
              <h3>18%</h3>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;