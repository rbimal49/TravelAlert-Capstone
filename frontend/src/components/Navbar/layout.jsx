import { Link, useLocation } from "react-router-dom";
import { useUserContext } from "../../Context/UserContext";
import "./style.css";

export function Navbar() {
  const { currentUser } = useUserContext();
  const location = useLocation();

  if (location.pathname === "/") {
    return null; // Hide navbar on login page
  }
  if (location.pathname === "/register") {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid mx-3">
        {/* Navbar brand/logo */}
        <Link className="navbar-brand" to="/home">
          <img
            src="/travelAlert.svg"
            alt="Travel Alert Logo"
            width="30"
            className="me-2"
          />{" "}
          Travel Alert
        </Link>

        {/* Toggler button for mobile view */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible navbar content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Left-aligned navbar items */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item flex-container">
              <Link
                className="nav-link text-dark"
                aria-current="page"
                to="/home"
              >
                Home
              </Link>
            </li>
            <li className="nav-item flex-container">
              <Link
                className="nav-link text-dark"
                aria-current="page"
                to="/alerts"
              >
                Alerts
              </Link>
            </li>
          </ul>

          {/* Right-aligned navbar items */}
          <div className="d-flex align-items-center">
            <div className="me-3">{currentUser.emailId}</div>

            <div className="login-button">
              <Link className="login-link" to="/">
                Logout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
