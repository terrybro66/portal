import React, { useState, useEffect, useRef } from "react";
import * as d3 from "d3";
import Map, { Layer, Marker } from "react-map-gl";

import styles from "./Train.module.css";

const Train = () => {
  const [stations, setStations] = useState([]);
  const [viewport, setViewport] = useState({
    longitude: 184.931386,
    latitude: -19.746891,
    zoom: 12.1,
    pitch: 30,
    bearing: 20,
  });

  const mapRef = useRef();
  useEffect(() => {
    d3.csv("stops.csv")
      .then((data) => {
        setStations(data);
      })
      .catch((error) => {
        console.error("Error fetching CSV file:", error);
      });
  }, []);

  return (
    <Map
      ref={mapRef}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      {...viewport}
      onMove={(evt) => setViewport(evt.viewState)}
      mapStyle="mapbox://styles/mapbox/satellite-v9"
      interactive={false}
      onLoad={({ map }) => {
        mapRef.current = map;
      }}
    >
      {stations.map((station, index) => (
        <Marker
          key={index}
          longitude={station.longitude}
          latitude={station.latitude}
        >
          <div>Station</div>
        </Marker>
      ))}
    </Map>
  );
};

export default Train;
