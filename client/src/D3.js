import {
  Environment,
  OrbitControls,
  useTexture,
  Plane,
} from "@react-three/drei";
import * as THREE from "three";
import Project from "./Project";
import { Canvas } from "@react-three/fiber";

const D3 = () => {
  return (
    <>
      <Plane
        args={[1, 1]}
        rotation-x={-Math.PI / 2}
        meshStandardMaterial={"hotpink"}
      />
    </>
  );
};

export default D3;
