import { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  draggable: false,
});

export default function Routing({ pos }) {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(42.1513917, 24.7518429),
        // L.latLng(42.1514719, 24.7520994),
        // L.latLng(42.1512018, 24.7525993),
        // L.latLng(42.1509599, 24.7527699),
        // L.latLng(42.1506462, 24.7527501),
        // L.latLng(42.1501516, 24.7528296),
        // L.latLng(42.1498123, 24.7527169),
        // L.latLng(42.1498821, 24.752088),
        // L.latLng(42.1498543, 24.7517316),
        // L.latLng(42.1493502, 24.7512481),
        // L.latLng(42.1491302, 24.7510335),
        // L.latLng(42.1490071, 24.7507278),
        // L.latLng(42.148504, 24.7508233),
        // L.latLng(42.1464868, 24.7513463),
        // L.latLng(42.1460398, 24.7514965),
        L.latLng(42.1455053, 24.7514219),
        // L.latLng(42.1459829, 24.7522539),
        // L.latLng(42.1461055, 24.7523223),
      ],
      routeWhileDragging: false,
      addWaypoints: false,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
