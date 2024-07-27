import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import { useJsApiLoader } from "@react-google-maps/api";
import MapContainer from "./MapContainer";
import SearchBox from "./SearchBox";
import "./style.css";

// Coordinates for the initial center of the map
const center = {
  lat: -36.84737714284502,
  lng: 174.7657620744427,
};

// Options for map controls
const mapOptions = {
  zoomControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  fullscreenControl: false,
};

// Google Maps API Key (included directly)
const googleMapsApiKey = "My_API_KEY";

const Map = () => {
  const [libraries] = useState(["places"]);
  const [map, setMap] = useState(null);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState(""); // State for distance
  const [duration, setDuration] = useState(""); // State for duration
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey, // Directly included API key
    libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  // Function to calculate and display the route
  const showRoute = async (originRef, destinationRef) => {
    if (originRef.current.value === "" || destinationRef.current.value === "") {
      return;
    }
    try {
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route({
        origin: originRef.current.value,
        destination: destinationRef.current.value,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
    } catch (error) {
      console.error("Error fetching directions: ", error);
    }
  };

  // Function to clear the route and reset input fields
  const clearRoute = (originRef, destinationRef) => {
    setDirectionsResponse(null);
    setDistance(""); // Clear distance state
    setDuration(""); // Clear duration state
    originRef.current.value = "";
    destinationRef.current.value = "";
    if (map) {
      map.setZoom(15);
    }
  };

  // Function to pan the map to the initial center
  const panToCenter = () => {
    if (map) {
      map.panTo(center);
      map.setZoom(15);
    }
  };

  return (
    <Container fluid className="container-fluid map-container">
      <SearchBox
        onShowRoute={showRoute}
        onClearRoute={clearRoute}
        onPanToCenter={panToCenter}
        distance={distance} // Pass distance
        duration={duration} // Pass duration
      />
      <Container fluid className="container-fluid map-box">
        <MapContainer
          center={center}
          zoom={15}
          mapOptions={mapOptions}
          onLoad={(map) => setMap(map)}
          directionsResponse={directionsResponse}
        />
      </Container>
    </Container>
  );
};

export default Map;
