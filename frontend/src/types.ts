import * as THREE from 'three';

export interface ModelLabel {
    id: string;
    label: string;
    coordinates: THREE.Vector3;
}

export interface ModelInfo {
    id: string;
    name: string;
    location: string;
  }