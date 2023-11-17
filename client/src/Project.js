import React, { useRef } from "react";
import {
  RoundedBox,
  MeshPortalMaterial,
  Environment,
  useTexture,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

import * as THREE from "three";
import Vanguard from "./Vanguard";
import Globe from "./Globe";

const Project = ({ children, handleMenuClick, texture, name, ...props }) => {
  const map = useTexture(texture);
  const meshRef = useRef();

  return (
    <group {...props}>
      <RoundedBox
        args={[2, 3, 0.1]}
        onClick={() => handleMenuClick(name)}
        scale={5}
      >
        <MeshPortalMaterial side={THREE.DoubleSide}>
          <ambientLight intensity={0.8} />
          <Environment preset="sunset" />
          <Globe texture={"/textures/stars.jpg"} />
          <mesh>
            <sphereGeometry args={[10, 64, 64]} position={[-10, 10, 0]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};

export default Project;
