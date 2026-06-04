import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/dashboard">
          Digital Marketing System
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/campaigns">
                Campaigns
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/leads">
                Leads
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/reports">
                Reports
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Logout
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;