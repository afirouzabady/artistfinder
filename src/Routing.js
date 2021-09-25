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

  var pointA = new L.LatLng(42.1513917, 24.7518429);
  var pointA1 = new L.LatLng(42.1514719, 24.7520994);
  var pointA2 = new L.LatLng(42.1512018, 24.7525993);
  var pointA3 = new L.LatLng(42.1509599, 24.7527699);
  var pointA4 = new L.LatLng(42.1506462, 24.7527501);
  var pointA5 = new L.LatLng(42.1501516, 24.7528296);
  var pointA6 = new L.LatLng(42.1498123, 24.7527169);
  var pointA7 = new L.LatLng(42.1498821, 24.752088);
  var pointA8 = new L.LatLng(42.1498543, 24.7517316);
  var pointA9 = new L.LatLng(42.1493502, 24.7512481);
  var pointA10 = new L.LatLng(42.1491302, 24.7510015);
  var pointA11 = new L.LatLng(42.1490071, 24.7507278);
  var pointA12 = new L.LatLng(42.148504, 24.7508233);
  var pointA13 = new L.LatLng(42.1464868, 24.7513463);
  // var pointA14 = new L.LatLng(42.1460398, 24.7514965);
  // var pointA15 = new L.LatLng(42.1455053, 24.7514219);
  var pointA16 = new L.LatLng(42.1461421249647, 24.751389687387558);
  var pointA17 = new L.LatLng(42.14600037075263, 24.75210997935969);

  var pointB = new L.LatLng(42.1461055, 24.7523223);
  var pointList = [
    pointA,
    pointA1,
    pointA2,
    pointA3,
    pointA4,
    pointA5,
    pointA6,
    pointA7,
    pointA8,
    pointA9,
    pointA10,
    pointA11,
    pointA12,
    pointA13,
    // pointA14,
    // pointA15,
    pointA16,
    pointA17,
    pointB,
  ];

  // var firstpolyline = new L.Polyline(pointList, {
  //   color: "red",
  //   weight: 3,
  //   opacity: 0.5,
  //   smoothFactor: 1,
  // });
  // firstpolyline.addTo(map);

  // L.latLng(42.1513917, 24.7518429),
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
  // L.latLng(42.1455053, 24.7514219),
  // L.latLng(42.1459829, 24.7522539),
  // L.latLng(42.1461055, 24.7523223),

  useEffect(() => {
    if (!map) return;

    const routingControl = new L.Polyline(pointList, {
      color: "#ff000d",
      weight: 6,
      opacity: 1,
      smoothFactor: 1,
    }).addTo(map);

    return () => map.removeControl(routingControl);
  }, [map]);

  return null;
}
