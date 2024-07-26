import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAlerts as fetchAlerts } from "./AlertServices";

// Define the AlertList component
export default function AlertList() {
  // Declare a state variable 'alerts' and a function 'setAlerts' to update it
  const [alerts, setAlerts] = useState([]);

  // useEffect hook to fetch alerts when the component is mounted
  useEffect(() => {
    const fetchAndSetAlerts = async () => {
      const data = await fetchAlerts();
      setAlerts(data);
    };

    fetchAndSetAlerts();
  }, []);

  // Function to handle refreshing the list of alerts
  const handleRefresh = async () => {
    const data = await fetchAlerts();
    setAlerts(data);
  };

  // Function to delete an alert by its ID
  function deleteAlert(id) {
    fetch(`http://localhost:8080/api/roadworks/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete the alert");
        }
        handleRefresh();
      })
      .catch((error) => {
        alert(`Unable to delete the alert: ${error.message}`);
      });
  }

  // Return the JSX to render the component
  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Alerts</h2>

      <div className="row mb-3">
        <div className="col">
          <Link className="btn btn-primary me-1" to="/alertform" role="button">
            Create Alert
          </Link>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Road</th>
            <th>Suburb</th>
            <th>City</th>
            <th>Country</th>
            <th>Start Location</th>
            <th>End Location</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {alerts.map((alert, index) => (
            // Render each alert as a row in the table
            <tr key={alert._id || index}>
              <td>{index + 1}</td>
              <td>{alert.roadName}</td>
              <td>{alert.suburb}</td>
              <td>{alert.city}</td>
              <td>{alert.country}</td>
              <td>{alert.startLocation}</td>
              <td>{alert.endLocation}</td>
              <td>{alert.startDate}</td>
              <td>{alert.endDate}</td>
              <td>{alert.startTime}</td>
              <td>{alert.endTime}</td>
              <td>{alert.description}</td>
              <td style={{ width: "10px", whiteSpace: "nowrap" }}>
                <Link
                  to={`/editalert/${alert._id}`}
                  className="btn btn-primary btn-sm me-1"
                >
                  Edit
                </Link>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteAlert(alert._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
