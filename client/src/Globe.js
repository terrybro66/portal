import React, { useRef } from "react";
import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Globe = ({ texture }) => {
  const meshRef = useRef();

  const map = useTexture(texture);

  useFrame(() => {
    meshRef.current.rotation.y += 0.01;
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.5, 82, 82]} />
      <meshStandardMaterial map={map} side={THREE.BackSide} />
    </mesh>
  );
};

export default Globe;
