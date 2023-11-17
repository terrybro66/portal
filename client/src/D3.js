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
      <Canvas camera={{ position: [0, 0, 30], near: 0.1, far: 100, fov: 60 }}>
        <ambientLight intensity={0.5} />
        <Environment preset="sunset" />
        <OrbitControls />
        <Plane
          args={[100, 100]}
          rotation-x={-Math.PI / 2}
          meshStandardMaterial={"hotpink"}
        />
      </Canvas>
    </>
  );
};

export default D3;
