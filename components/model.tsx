import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";

const Model = () => {
  return (
    <Canvas>
      <OrbitControls />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={12}
        saturation={0}
        fade
        speed={5}
      />
    </Canvas>
  );
};

export default Model;
