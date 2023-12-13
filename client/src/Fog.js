import React, { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Fog = ({ count = 5000, size = 1, color = "white" }) => {
  const mesh = useRef();
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const x = Math.random() * 2000 - 1000;
      const y = Math.random() * 2000 - 1000;
      const z = Math.random() * 2000 - 1000;
      temp.push(x, y, z);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.0005;
      mesh.current.rotation.y += 0.0005;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={size}
        sizeAttenuation
        color={color}
        transparent
        opacity={0.5}
      />
    </points>
  );
};

export default Fog;
