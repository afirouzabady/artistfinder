import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function Routing({pos}) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [L.latLng(42.1513917,24.7518429), L.latLng(42.1461055,24.7523223) ],
      routeWhileDragging: false,
      addWaypoints:false,
      draggableWaypoints:false
      
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
