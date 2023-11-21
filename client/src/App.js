import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Menu from "./Menu";
import D3 from "./D3";
import Vanguard from "./Vanguard";
import "./App.css";

function App() {
  const [activeSection, setActiveSection] = useState("r3f");

  const handleMenuClick = (section) => {
    console.log("section", section);
    setActiveSection(section);
  };

  return (
    <div className="container">
      {activeSection === "kepler" && <Vanguard />}
      {activeSection === "d3" && (
        <Canvas shadows camera={{ position: [0, 0, 0], fov: 30 }}>
          <D3 />
        </Canvas>
      )}

      {activeSection === "r3f" && (
        <Canvas
          camera={{ position: [0, 10, 40], near: 0.1, far: 1000, fov: 60 }}
        >
          <Environment background={"only"} files={"/textures/moonless.exr"} />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Menu handleMenuClick={handleMenuClick} />
        </Canvas>
      )}
    </div>
  );
}

export default App;
