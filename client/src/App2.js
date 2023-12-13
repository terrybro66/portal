import React, { useState } from "react";
import Graph from "./Graph";
import styles from "./App.module.css";
import "mapbox-gl/dist/mapbox-gl.css";

const App2 = () => {
  const [viewState, setViewState] = useState({
    longitude: 185.4157,
    latitude: -20.2324,
    zoom: 9,
    pitch: 45,
    minZoom: 5,
    maxZoom: 15,
  });
  return (
    <div className={styles.map}>
      <Graph
        height={"100vh"}
        width={"100vw"}
        viewState={viewState}
        setViewState={setViewState}
      />
    </div>
  );
};

export default App2;
