import React from "react";
import { useTexture, OrbitControls } from "@react-three/drei";

import Project from "./Project";
import Globe from "./Globe";
import Soldier from "./Soldier";
import D3 from "./D3";
import { TrackballControls } from "three/addons/controls/TrackballControls.js";

function Menu({ handleMenuClick }) {
  const texture = "/textures/stars.jpg";
  const texture2 = "/textures/mountains.jpg";
  return (
    <>
      <OrbitControls
        position={[0, 0, 0]} // Set the position of the camera
      />
      <Project
        handleMenuClick={handleMenuClick}
        name={"d3"}
        texture={texture}
        component={Globe}
      />
      <Project
        handleMenuClick={handleMenuClick}
        texture={texture2}
        position-x={-15}
        rotation-y={Math.PI / 32}
        name={"kepler"}
        component={Soldier}
      />
      <Project
        handleMenuClick={handleMenuClick}
        texture={texture2}
        position-x={15}
        rotation-y={Math.PI / 32}
        name={"kepler"}
        component={D3}
      />
    </>
  );
}

export default Menu;
