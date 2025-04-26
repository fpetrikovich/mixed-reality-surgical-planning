import { useMemo } from 'react'
import '../App.css'
import * as THREE from 'three';
import { Scene } from '../components/Scene';
import { Model } from '../components/Model';

function App() {

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

