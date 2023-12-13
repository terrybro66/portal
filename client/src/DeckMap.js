import React, { useEffect, useState } from "react";
import { DeckGL } from "@deck.gl/react";
import { GeoJsonLayer } from "@deck.gl/layers";
import { Map } from "react-map-gl";
import * as d3 from "d3";

function DeckMap() {
  const [data, setData] = useState(null);

  function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random between 0-255
    const g = Math.floor(Math.random() * 256); // Random between 0-255
    const b = Math.floor(Math.random() * 256); // Random between 0-255
    return [r, g, b, 200]; // Return as RGBA
  }

  useEffect(() => {
    let geojsonUrl = "https://skgrange.github.io/www/data/london_sport.json";
    let csvUrl =
      "https://data.london.gov.uk/download/land-area-and-population-density-ward-and-borough/77e9257d-ad9d-47aa-aeed-59a00741f301/housing-density-borough.csv";

    Promise.all([d3.json(geojsonUrl), d3.csv(csvUrl)]).then(
      ([geojsonData, csvData]) => {
        geojsonData.features.forEach((d) => {
          let result = csvData.filter(
            (e) => e.borough_name === d.properties.borough_name
          );
          d.properties.population = result[0] ? result[0].population : null;
          d.properties.boro_color = getRandomColor();
        });
        console.log(geojsonData);
        setData(geojsonData);
      }
    );
  }, []);

  const layers = [
    new GeoJsonLayer({
      id: "geojson-layer",
      data,
      getElevation: (d) => d.properties.pop_2001 / 100,
      getFillColor: (d) => d.properties.boro_color,
      material: {
        ambient: 0.64,
        diffuse: 0.6,
        shininess: 32,
        specularColor: [51, 51, 51],
      },
      extruded: true,
    }),
  ];

  return (
    <DeckGL
      initialViewState={{
        longitude: -0.1275,
        latitude: 51.5072,
        zoom: 10,
        pitch: 45,
        bearing: 0,
      }}
      controller={true}
      layers={layers}
    >
      <Map
        mapStyle="https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
      />
    </DeckGL>
  );
}

export default DeckMap;
