// All the requirements for assignments are solved in this code only

import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";


const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41],
});

// Component to handle click events { Just tried some more dynamic markers }
const ClickHandler = ({ setMarkerPosition }) => {
  useMapEvents({
    click: (e) => {
      setMarkerPosition([e.latlng.lat, e.latlng.lng]);
    },
  });
  return null;
};

function App() {
  const [markerPosition, setMarkerPosition] = useState([19.8762, 75.3433]);

  return (
    <div className="map-container">
      <MapContainer center={markerPosition} zoom={13} className="map-container">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <ClickHandler setMarkerPosition={setMarkerPosition} />
        <Marker position={markerPosition} icon={customIcon}>
          <Popup>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", padding: "5px" }}>
              {/* Profile Image */}
              <img
                src="https://avatars.githubusercontent.com/u/99215698?v=4"
                alt="Sanket Rathod"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
              {/* Name & Portfolio Link */}
              <div style={{ display: "flex", flexDirection: "column" }}>
                <h3 style={{ margin: "0", fontSize: "16px" }}>Sanket Hanjari Rathod</h3>
                <a
                  href="https://sanketrathod.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: "none", color: "#007bff", fontSize: "14px" }}
                >
                  Visit My Portfolio
                </a>
              </div>
            </div>
            {/* Coordinates */}
            <p style={{ margin: "5px 0", fontSize: "12px", textAlign: "center" }}>
              Lat: {markerPosition[0].toFixed(5)}, Lng: {markerPosition[1].toFixed(5)}
            </p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default App;
