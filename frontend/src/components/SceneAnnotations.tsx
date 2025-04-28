import { Sphere, Html } from "@react-three/drei"; // Sphere and Html are super helpful
import { AnnotationDto } from "../types";
import { useState } from "react";

export const SceneAnnotations = ({
  annotations,
}: {
  annotations: AnnotationDto[];
}) => {
  return (
    <>
      {annotations.map((annotation, index) => (
        <HoverableSphere key={index} annotation={annotation} />
      ))}
    </>
  );
};

const HoverableSphere = ({ annotation }: { annotation: AnnotationDto }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <group
      position={[
        annotation.coordinates.x,
        annotation.coordinates.y,
        annotation.coordinates.z,
      ]}
    >
      <Sphere
        args={[hovered ? 0.5 : 0.2, 16, 16]} // Radius grows on hover
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial color={hovered ? "hotpink" : "pink"} />
      </Sphere>

      {hovered && (
        <Html distanceFactor={10}>
          <div className="bg-white text-black p-1 rounded shadow-md">
            {annotation.label}
          </div>
        </Html>
      )}
    </group>
  );
};
