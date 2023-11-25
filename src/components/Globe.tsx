import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useTexture } from "@react-three/drei";
import img from "../assets/globe.webp";
import "../styles/GLobe.css";


const Box = () => {
  const texture = useTexture(img);
  const meshRef: any = useRef();
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.001;
    }
  });
  window.addEventListener("scroll", () => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.0018;
    }
  });
  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2, 256, 128]} />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
};

const Globe = () => {
  return (
    <div id="canvas-conta">
      <Canvas camera={{ position: [-5, 1, 4], fov: 40 }}>
        <spotLight position={[4, 3, 1]} intensity={50} />
        <directionalLight position={[5, 5, 3]} intensity={0.6} />
        <Box />
      </Canvas>
    </div>
  );
};

export default Globe;
