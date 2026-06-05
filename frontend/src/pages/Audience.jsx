import Sidebar from "../components/sidebar";

function Audience() {
  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container mt-4">
        <h2>Audience Targeting</h2>

        <div className="card p-4">

          <div className="mb-3">
            <label>Industry</label>
            <select className="form-control">
              <option>IT</option>
              <option>Finance</option>
              <option>Healthcare</option>
              <option>Education</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Location</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Location"
            />
          </div>

          <div className="mb-3">
            <label>Experience Level</label>
            <select className="form-control">
              <option>Entry Level</option>
              <option>Mid Level</option>
              <option>Senior Level</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Company Size</label>
            <select className="form-control">
              <option>1-50</option>
              <option>51-200</option>
              <option>201-1000</option>
              <option>1000+</option>
            </select>
          </div>

          <button className="btn btn-primary">
            Save Audience
          </button>

        </div>
      </div>
    </div>
  );
}

export default Audience;