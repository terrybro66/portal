import React from "react";
import ReactMapGL from "react-map-gl";

const Flight = () => {
  const mapboxToken =
    "pk.eyJ1IjoidGVycnlicm82NiIsImEiOiJjbG95Nzk0YzYwMWNnMmxvOHI4dHU5Z2doIn0.CA8p9gVQG-WfyXvopxXcVQ";

  const viewport = {
    width: "100%",
    height: "400px",
    latitude: 0,
    longitude: 0,
    zoom: 1,
  };

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={mapboxToken}
      mapStyle="mapbox://styles/mapbox/dark-v10"
    />
  );
};

export default Flight;
