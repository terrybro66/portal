import React from 'react';
import { useNavigate } from 'react-router';
import { Box } from '@react-three/drei';

const Section = ({ section }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${section}`);
  };

  return (
    <Box onClick={handleClick} position={[Math.random() * 5, Math.random() * 5, Math.random() * 5]}>
      <meshBasicMaterial attach="material" color="blue" />
    </Box>
  );
};

export default Section;
