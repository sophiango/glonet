import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L, { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

// Ensure Leaflet marker images are handled properly
// import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
// import markerIcon from "leaflet/dist/images/marker-icon.png";
// import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default icon path for Vite
// delete (L.Icon.Default.prototype as any)._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl: markerIcon2x,
//   iconUrl: markerIcon,
//   shadowUrl: markerShadow,
// });

type HealthStatus = "healthy" | "warning" | "critical" | "unknown";

interface Store {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  health: HealthStatus;
  bandwidth: string;
  deviceCount: number;
}

function App() {
  const [stores, setStores] = useState<Store[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/stores")
      .then((res) => res.json())
      .then((data: Store[]) => setStores(data))
      .catch((err) => console.error("Error loading stores", err));
  }, []);

  const getIcon = (status: HealthStatus): Icon => {
    var iconProp
    if (status === "healthy") {
        return new L.Icon({
          iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-green.png",
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
    } else if (status === "warning") {
      return new L.Icon({
          iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-yellow.png",
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
    } else if (status === "critical") {
      return new L.Icon({
          iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
    } else {
      return new L.Icon({
          iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-grey.png",
          shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        })
    }
  }

  return (
    <div>
      <h1>GLONET</h1>
      <MapContainer center={[51.505, -0.09]} zoom={3} scrollWheelZoom={true} style={{ height: '500px' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {stores.map((store) => (
          <Marker
            key={store.id}
            position={[store.latitude, store.longitude]}
            icon={getIcon(store.health)}
          >
            <Popup>
              <strong>{store.name}</strong>
              <br />
              Status: {store.health}
              <br />
              Bandwidth: {store.bandwidth}
              <br />
              Device Count: {store.deviceCount}
            </Popup>
          </Marker>
        ))}
    </MapContainer>
    </div>
  );
}

export default App;
