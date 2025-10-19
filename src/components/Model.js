import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";


function Model() {
  // Use absolute path for public assets
  const { scene } = useGLTF("/model.glb");
  return <primitive object={scene} />;
}

export default function ModelGlove() {
  return (
    <div
      style={{
        width: '100%',
        minWidth: '400px',
        aspectRatio: '16 / 10',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'block',
      }}
    >
      <Canvas
        camera={{ position: [2, 0.8, 0.1] }}
        style={{ width: '100%', height: '100%', display: 'block', background: 'radial-gradient(ellipse at 60% 40%, #23272f 70%, #0a0a0a 100%)' }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Model />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
