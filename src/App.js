import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { iconPersonPinPointer } from "./icon";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import Routing from "./Routing";
import React, { useState } from "react";

function App() {
  const position = [42.1431055, 24.7523223];
  const [postion, setPosition] = useState([51.505, -0.09]);
  const [intervalId, setIntvalId] = useState(null);
  const [mapFirst, setMapFirest] = useState(false);
  const [locate, setLoacted] = useState(false);

  function FinderComponent() {
    const map = useMapEvents({
      layeradd() {
        map.locate();
      },
      locationfound(e) {
        console.log(e);
        setPosition(e.latlng);
        if (!mapFirst) {
          map.flyTo(e.latlng, 15);
          setMapFirest(true);
          setLoacted(true);
        }
      },
      locationerror() {
        setPosition({ lat: 35.6997, lng: 51.3381 });
      },
    });
    return null;
  }

  function FinderComponentEvery() {
    const map = useMapEvents({
      layeradd() {
        map.locate();
        let interval = setInterval(() => {
          map.locate();
        }, 10000);
        setIntvalId(interval);
      },
      locationfound(e) {
        setPosition(e.latlng);
        setLoacted(true);
      },
      locationerror() {
        setPosition({ lat: 35.6997, lng: 51.3381 });
      },
    });
    return null;
  }

  return (
    <div className="App">
      <div className="video-section">
        <iframe width="100%" height="100%" src="https://www.youtube.com/embed/WjqEIXn2hcA?controls=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allow='autoplay' allowfullscreen></iframe>
      </div>
      <div className="map-section">
        <MapContainer center={position} zoom={16} style={{ height: "100vh" }}>
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Routing pos={position} />
          <FinderComponentEvery />
          <FinderComponent />

          <Marker icon={iconPersonPinPointer} position={postion} />
        </MapContainer>
      </div>

      <div className="text-section">
        <br />
        <p>
          Кой контролира контролиращите, или запис от моето преминаване
        </p><br /><p>Who Controls the Controllers; Or a Record of My Passing By
          (2009-21)
        </p>
      </div>
    </div>
  );
}

export default App;
