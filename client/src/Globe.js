import React, { useRef } from "react";
import { useTexture, Text } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
const Globe = () => {
  const meshRef = useRef();
  const map = useTexture("/textures/earth.jpg");

  useFrame(() => {
    if (meshRef.current) {
      // Continuously rotate the globe
      meshRef.current.rotation.y += 0.003;
    }
  });

  return (
    <>
      <mesh>
        <Text
          fontSize={0.3}
          position={[0, -1, 0]}
          anchorY={"bottom"}
          font="fonts/Chopsic.otf"
        >
          Flight
        </Text>
      </mesh>
      <mesh ref={meshRef} position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.7, 82, 82]} />
        <meshStandardMaterial map={map} />
      </mesh>
    </>
  );
};

export default Globe;
