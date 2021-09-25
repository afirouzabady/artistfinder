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
        <iframe
          src="https://player.vimeo.com/video/10528962?h=277b919f00&color=f9fc1e"
          width="100%"
          height="100%"
          frameborder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowfullscreen
        ></iframe>
        <p>
          <a href="https://vimeo.com/10528962">Art and Art History</a> from{" "}
          <a href="https://vimeo.com/jesseborkowski">Jesse Borkowski</a> on{" "}
          <a href="https://vimeo.com">Vimeo</a>.
        </p>
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
        <p>past your text here </p>
      </div>
    </div>
  );
}

export default App;
