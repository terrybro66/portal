import React, { useEffect, useState } from "react";
import DeckGL from "@deck.gl/react";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import { Map } from "react-map-gl";
import { csv } from "d3-fetch";

const INITIAL_VIEW_STATE = {
  longitude: -0.1275,
  latitude: 51.5072,
  zoom: 11,
  pitch: 45,
  bearing: 0,
};

export default function Heatmap() {
  const [data, setData] = useState([]);

  useEffect(() => {
    csv(
      "https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/3d-heatmap/heatmap-data.csv"
    ).then((data) => {
      const formattedData = data.map((d) => [Number(d.lng), Number(d.lat)]);
      setData(formattedData);
    });
  }, []);

  const layer = new HexagonLayer({
    id: "hexagon-layer",
    data,
    pickable: true,
    radius: 100,
    elevationScale: 100,
    getPosition: (d) => d,
    elevationRange: [0, 100],
    extruded: true,
    opacity: 1,
  });

  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={[layer]}
    >
      <Map mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} />
    </DeckGL>
  );
}
