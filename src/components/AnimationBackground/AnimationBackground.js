import React from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { confettiConfig } from '../services/constans';

function AnimationBackground() {

const particlesInit = async (main) => {
    await loadFull(main);
  };
  
  return   (
  <div className="confetti-body">
    <Particles init={particlesInit} options={confettiConfig} />
  <div className="container">
  </div>
</div>) }

export default AnimationBackground