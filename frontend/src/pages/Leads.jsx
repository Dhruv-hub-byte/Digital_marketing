import Sidebar from "../components/sidebar";

function Leads() {

  const leads = [
    {
      id: 1,
      name: "John Smith",
      email: "john@gmail.com",
      company: "Microsoft",
      status: "New"
    },
    {
      id: 2,
      name: "David",
      email: "david@gmail.com",
      company: "Google",
      status: "Contacted"
    }
  ];

  return (
    <div className="d-flex">
      <Sidebar />

      <div className="container mt-4">

        <h2>Lead Management</h2>

        <table className="table table-bordered">

          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>

            {leads.map((lead) => (
              <tr key={lead.id}>
                <td>{lead.name}</td>
                <td>{lead.email}</td>
                <td>{lead.company}</td>
                <td>{lead.status}</td>
                <td>
                  <button className="btn btn-info btn-sm">
                    View
                  </button>
                </td>
              </tr>
            ))}

          </tbody>

        </table>

      </div>
    </div>
  );
}

export default Leads;