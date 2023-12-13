import React from "react";
import {
  OrbitControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";

const SceneContainer = () => {
  return (
    <>
      <OrbitControls />
      <Environment background={"only"} files={"/bg.hdr"} />
    </>
  );
};

export default SceneContainer;
