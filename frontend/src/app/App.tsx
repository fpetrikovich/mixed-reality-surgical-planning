import { useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '../App.css'
import { CONFIGURATION } from '../config/constants';
import * as THREE from 'three';
import Stats from 'three/examples/jsm/libs/stats.module.js'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { Canvas } from '@react-three/fiber'
import { createRoot } from 'react-dom/client';
import { Scene } from '../components/Scene';
import { Model } from '../components/Model';

function App() {
  // useEffect(() => {
  //   const scene = new THREE.Scene();

  //   const camera = new THREE.PerspectiveCamera(
  //     50, 
  //     window.innerWidth / window.innerHeight, 
  //     1, 
  //     1000
  //   );
  //   camera.position.z = 96;

  //   const canvas = document.getElementById('myThreeJsCanvas');
    
  //   if (!(canvas instanceof HTMLCanvasElement)) {
  //     throw new Error('Canvas element not found or not a canvas!');
  //   }

  //   const renderer = new THREE.WebGLRenderer({ 
  //     canvas,
  //     antialias: true, // So 3D objects look smoother
  //   });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   document.body.appendChild(renderer.domElement);

  //   const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); 
  //   ambientLight.castShadow = true;
  //   scene.add(ambientLight);

  //   const spotLight = new THREE.SpotLight(0xffffff, 1);
  //   spotLight.castShadow = true;
  //   spotLight.position.set(0, 64, 32);
  //   scene.add(spotLight);

  //   const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
  //   const boxMaterial = new THREE.MeshStandardMaterial();
  //   const box = new THREE.Mesh(boxGeometry, boxMaterial);
  //   scene.add(box);

  //   // Add orbit controls to the camera
  //   const controls = new OrbitControls(camera, renderer.domElement);

  //   // Add FPS stats
  //   const stats = new Stats();
  //   document.body.appendChild(stats.dom);

  //   // Recursively calls animate function to render the scene
  //   const animate = () => {
  //     // box.rotation.x += 0.01;
  //     // box.rotation.y += 0.01;
  //     stats.update();
  //     controls.update();
  //     renderer.render(scene, camera);
  //     window.requestAnimationFrame(animate);
  //   }
  //   animate();
  // }, [])

  const position = useMemo(() => new THREE.Vector3(0, 0, 0), []);

  return (
    <div style={{ height: '100vh', width: '100vw', margin: 0, padding: 0 }}>
      <Scene>
        <Model modelPath='/Lantern.glb' isCompressed={false} scale={0.1} position={position} />
      </Scene>
    </div>
  )
}

export default App

