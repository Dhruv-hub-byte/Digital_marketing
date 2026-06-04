import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="bg-dark text-white p-3 vh-100">
      <h4>Marketing System</h4>

      <ul className="list-unstyled">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/campaigns">Campaigns</Link></li>
        <li><Link to="/audience">Audience</Link></li>
        <li><Link to="/leads">Leads</Link></li>
        <li><Link to="/reports">Reports</Link></li>
        <li><Link to="/settings">Settings</Link></li>
      </ul>
    </div>
  );
}

export default Sidebar;