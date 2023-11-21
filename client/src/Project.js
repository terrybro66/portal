import React, { useRef } from "react";
import {
  RoundedBox,
  MeshPortalMaterial,
  Environment,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

const Project = ({
  children,
  handleMenuClick,
  texture,
  name,
  component: Component,
  ...props
}) => {
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
          <ambientLight intensity={0.6} />
          <Environment preset="sunset" />
          {/* <D3 position={[0, -0.9, 0]} rotation={[0, 0.3, 0]} /> */}
          <Component position={[0, -0.9, 0]} rotation={[0, 0.3, 0]} />
          <mesh>
            <sphereGeometry args={[10, 64, 64]} />
            <meshStandardMaterial map={map} side={THREE.BackSide} />
          </mesh>
        </MeshPortalMaterial>
      </RoundedBox>
    </group>
  );
};

export default Project;
