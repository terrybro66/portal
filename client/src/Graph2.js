import React, { useState } from "react";
import Map, { Layer, Source } from "react-map-gl";
import geojson from "./london_sport.json";

function Graph2({ viewState, setViewState }) {
  const colors = [
    "#ff0000",
    "#00ff00",
    "#0000ff",
    "#ffff00",
    "#00ffff",
    "#ff00ff",
  ];

  return (
    <Map
      {...viewState}
      mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
      onMove={(evt) => setViewState(evt.viewState)}
    >
      <Source id="london-boroughs" type="geojson" data={geojson}>
        <Layer
          id="borough-boundaries"
          type="fill-extrusion"
          source="london-boroughs"
          paint={{
            "fill-extrusion-color": ["get", "color"],
            "fill-extrusion-height": 1000, // Set the height of the extrusion
            "fill-extrusion-base": 0, // Set the base height of the extrusion

            "fill-extrusion-opacity": 0.5,
          }}
        />

        <Layer
          id="borough-labels"
          type="symbol"
          source="london-boroughs"
          layout={{
            "text-field": ["get", "name"],
            "text-size": 12,
            "text-anchor": "center",
            "text-justify": "center",
            "text-offset": [0, 1],
          }}
          paint={{
            "text-color": "#ffffff",
          }}
        />
      </Source>
    </Map>
  );
}

export default Graph2;
