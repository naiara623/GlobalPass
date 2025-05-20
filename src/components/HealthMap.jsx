import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

function LocateUser({ setUserPosition }) {
  const map = useMap();
  useEffect(() => {
    map.locate({ setView: true, maxZoom: 16 }).on("locationfound", function (e) {
      console.log("Localização do usuário:", e.latlng);
      setUserPosition(e.latlng);
      map.setView(e.latlng, 15);
    });
  }, [map]);
  return null;
}

const customUserIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
  iconSize: [32, 32],
});

const customPlaceIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  shadowSize: [41, 41],
});

export default function HealthMap() {
  const [userPosition, setUserPosition] = useState(null);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [mapRef, setMapRef] = useState(null);
  
  useEffect(() =>
    console.log(searchResults)
    
    ,[searchResults])

  const handleSearch = async () => {
    if (!search) return;
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(search)}`
      );
      const data = await res.json();
      setSearchResults(data);
      if (data.length > 0 && mapRef) {
        mapRef.setView([data[0].lat, data[0].lon], 15);
      }
    } catch (error) {
      console.error("Erro na busca:", error);
    }
  };

  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      <div style={{ position: "absolute", top: "10px", left: "10px", zIndex: 1000 }}>
        <input
          type="text"
          placeholder="Buscar local no mapa..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "250px",
            padding: "8px",
            borderRadius: "4px",
            border: "1px solid #ccc",
            marginRight: "8px",
          }}
        />
        <button onClick={handleSearch} style={{ padding: "8px 12px", cursor: "pointer" }}>Buscar</button>
      </div>

      <MapContainer
        center={[-27.595377, -48.54805]}
        zoom={13}
        scrollWheelZoom={true}
        whenCreated={setMapRef}
        style={{ width: "100%", height: "100%", zIndex: 0 }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <LocateUser setUserPosition={setUserPosition} />

        {userPosition && (
          <Marker position={userPosition} icon={customUserIcon}>
            <Popup>Sua localização</Popup>
          </Marker>
        )}

        {searchResults.map((result, index) => (
          <Marker
            key={index}
            position={[parseFloat(result.lat), parseFloat(result.lon)]}
            icon={customPlaceIcon}
          >
            <Popup>{result.display_name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
