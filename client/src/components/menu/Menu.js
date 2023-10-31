import React from 'react';
import { Canvas } from '@react-three/fiber';
import Section from '../sections/Section';

const Menu = ({ sections }) => (
  <Canvas>
    {sections.map((section, index) => (
      <Section key={index} section={section} />
    ))}
  </Canvas>
);

export default Menu;