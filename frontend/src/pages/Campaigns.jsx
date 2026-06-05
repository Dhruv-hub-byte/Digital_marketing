function Campaigns() {
  return (
    <div className="container mt-4">

      <h2>Create Campaign</h2>

      <input
        className="form-control mb-2"
        placeholder="Campaign Name"
      />

      <select className="form-control mb-2">
        <option>Lead Generation</option>
        <option>Brand Awareness</option>
      </select>

      <input
        className="form-control mb-2"
        placeholder="Budget"
      />

      <button className="btn btn-success">
        Create Campaign
      </button>

    </div>
  );
}

export default Campaigns;