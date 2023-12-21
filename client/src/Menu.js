import React from "react";
import { OrbitControls } from "@react-three/drei";

import Project from "./Project";
import Globe from "./Globe";
import Soldier from "./Soldier";
import D3 from "./D3";

function Menu({ handleMenuClick, active }) {
  const texture = "/textures/stars5.jpg";
  const texture2 = "/textures/stars.jpg";
  return (
    <>
      <OrbitControls
        position={[0, 4, 0]} // Set the position of the camera
        minPolarAngle={Math.PI / 3} // Restrict to 45 degrees (in radians)
        maxPolarAngle={Math.PI / 1.5}
      />
      <Project
        handleMenuClick={handleMenuClick}
        name={"globe"}
        texture={texture}
        component={Globe}
      />
      <Project
        handleMenuClick={handleMenuClick}
        texture={texture2}
        position-x={-15}
        rotation-y={Math.PI / 32}
        name={"shooter"}
        component={Soldier}
        active={active}
      />
      <Project
        handleMenuClick={handleMenuClick}
        texture={texture2}
        position-x={15}
        rotation-y={(Math.PI / 32) * -1}
        name={"kepler"}
        component={D3}
      />
    </>
  );
}

export default Menu;
