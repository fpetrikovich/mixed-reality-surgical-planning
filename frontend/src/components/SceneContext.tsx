import * as THREE from "three";
import { memo, useCallback, useEffect, useRef } from "react";
import { Model } from "./Model";
import { Html } from "@react-three/drei";
import { useThree } from "@react-three/fiber";

interface SceneContextProps {
  selectedModelLocation?: string;
  selectedModelIsCompressed?: boolean;
  setPendingPoint: (annotation?: THREE.Vector3) => void;
  setPointModalOpen: (open: boolean) => void;
  annotationsEnabled: boolean;
}

export const SceneContext = memo(
  ({
    selectedModelLocation,
    selectedModelIsCompressed,
    setPendingPoint,
    setPointModalOpen,
    annotationsEnabled,
  }: SceneContextProps) => {
    const { camera, gl: renderer, scene } = useThree();
    const raycaster = useRef(new THREE.Raycaster());
    const mouse = useRef(new THREE.Vector2());

    const handleClick = useCallback(
      (event: MouseEvent) => {
        if (!annotationsEnabled) return;
        // Returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
        const rect = renderer.domElement.getBoundingClientRect();

        // The event returns the position in pixels from the top left corner of the page.
        // In normalized device coordinates, the origin is in the center of the screen.
        // x -> Get how far the mouse is from the left inside the canvas normalised to the canvas width
        // y -> Get how far the mouse is from the top inside the canvas normalised to the canvas height
        // * 2 - 1 -> Normalise the coordinates to the range [-1, 1]
        mouse.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

        // Ray originates from the camera and goes through the mouse position
        raycaster.current.setFromCamera(mouse.current, camera);

        // List of objects from near to far that the ray intersects
        const intersects = raycaster.current.intersectObjects(
          scene.children,
          true
        );

        if (intersects.length > 0) {
          const point = intersects[0].point;

          setPendingPoint(point);
          setPointModalOpen(true);
        }
      },
      [camera, scene, renderer, annotationsEnabled]
    );

    useEffect(() => {
      renderer.domElement.addEventListener("click", handleClick);
      return () =>
        renderer.domElement.removeEventListener("click", handleClick); // Cleanup when unmounting
    }, [renderer, handleClick]);

    return selectedModelLocation ? (
      <Model
        modelPath={selectedModelLocation}
        isCompressed={selectedModelIsCompressed ?? false}
        scale={1}
      />
    ) : (
      <Html center>
        <div className="text-white">Select a model to begin...</div>
      </Html>
    );
  }
);
