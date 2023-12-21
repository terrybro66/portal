import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import Menu from "./Menu";
import Globe from "./Globe";
import Soldier from "./Soldier";
import "./App.css";
import Graph from "./Graph";
import DeckMap from "./DeckMap";
import Heatmap from "./Heatmap";
import Word from "./Word";
import Head from "./Head";
import Train from "./Train";
import Tube from "./Tube";
import styles from "./App.module.css";

function App() {
  const [activeSection, setActiveSection] = useState("graph");
  const [isFading, setIsFading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const wordData = [
    { text: "hello", value: 12 },
    { text: "world", value: 2 },
  ];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMenuClick = (section) => {
    setIsFading(true);

    setTimeout(() => {
      setActiveSection(section);
      setIsFading(false);
    }, 500); // Delay for 1 second (adjust as needed)
  };
  return (
    <>
      <div className={styles.head}>
        <Head homeLink={handleMenuClick} />
      </div>
      <div
        className={`container ${isLoaded ? "fade-in" : ""} ${
          isFading ? "fade-out" : ""
        }`}
      >
        {activeSection === "graph" && (
          <Graph handleMenuClick={handleMenuClick} />
        )}
        {activeSection === "rtf" && (
          <Canvas
            camera={{ position: [0, 10, 40], near: 0.1, far: 1000, fov: 60 }}
          >
            <Environment background={"only"} files={"textures/bg.hdr"} />
            <Menu handleMenuClick={handleMenuClick} active={activeSection} />
            {activeSection === "shooter" && <Soldier position={[-4, 2, -4]} />}
            {activeSection === "globe" && <Globe />}
          </Canvas>
        )}
        {activeSection === "tube" && <Tube />}
        {activeSection === "train" && <Train />}
        {activeSection === "pop" && <DeckMap />}
        {activeSection === "heat" && <Heatmap />}
        {activeSection === "word" && (
          <Word id={2} w={100} h={100} data={wordData} />
        )}
      </div>
    </>
  );
}

export default App;
