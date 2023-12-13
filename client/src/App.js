import React, { useState, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useTexture,
  Html,
  Text,
} from "@react-three/drei";
import { TextureLoader, Backside } from "three";
import * as THREE from "three";
import Menu from "./Menu";
import Globe from "./Globe";
import Soldier from "./Soldier";
import "./App.css";
import { color } from "d3";
import Graph from "./Graph";
import DeckMap from "./DeckMap";
import styles from "./App.module.css";

function App() {
  const [activeSection, setActiveSection] = useState("graph");
  const [isFading, setIsFading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

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
    <div
      className={`container ${isLoaded ? "fade-in" : ""} ${
        isFading ? "fade-out" : ""
      }`}
    >
      {activeSection === "graph" && <Graph handleMenuClick={handleMenuClick} />}
      {activeSection === "rtf" && (
        <>
          <button
            className={styles.home}
            onClick={() => handleMenuClick("graph")}
          >
            My Button
          </button>

          <Canvas
            camera={{ position: [0, 10, 40], near: 0.1, far: 1000, fov: 60 }}
          >
            <Environment background={"only"} files={"textures/bg.hdr"} />

            {activeSection === "shooter" && <Soldier position={[-4, 2, -4]} />}
            {activeSection === "globe" && <Globe />}
            {activeSection === "rtf" && (
              <Menu handleMenuClick={handleMenuClick} active={activeSection} />
            )}
          </Canvas>
        </>
      )}
      {activeSection === "pop" && <DeckMap />}
    </div>
  );
}

export default App;
