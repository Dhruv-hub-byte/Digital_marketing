import Sidebar from "../components/sidebar";

function Reports() {
  return (
    <div className="d-flex">

      <Sidebar />

      <div className="container mt-4">

        <h2>Reports & Analytics</h2>

        <div className="row">

          <div className="col-md-3">
            <div className="card p-3">
              <h5>Total Campaigns</h5>
              <h3>15</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3">
              <h5>Total Leads</h5>
              <h3>450</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3">
              <h5>Active Campaigns</h5>
              <h3>10</h3>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card p-3">
              <h5>Conversion Rate</h5>
              <h3>20%</h3>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Reports;