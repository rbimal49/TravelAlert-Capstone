// MapContainer.jsx
import React from "react";
import { GoogleMap, Marker, DirectionsRenderer } from "@react-google-maps/api";

// Define the style for the map container
const containerStyle = {
  width: "100%",
  height: "100%",
};

// MapContainer component definition
const MapContainer = ({
  center,
  zoom,
  mapOptions,
  onLoad,
  directionsResponse,
}) => {
  return (
    // Render GoogleMap component with the specified properties
    <GoogleMap
      center={center}
      zoom={zoom}
      mapContainerStyle={containerStyle}
      options={mapOptions}
      onLoad={onLoad}
    >
      <Marker position={center} />
      {directionsResponse && (
        // Conditionally render DirectionsRenderer if directionsResponse is provided
        <DirectionsRenderer directions={directionsResponse} />
      )}
    </GoogleMap>
  );
};

export default MapContainer;
