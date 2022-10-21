import { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFBX, useGLTF } from "@react-three/drei";

const Jester = () => {
  const ref = useRef<THREE.Mesh>(null!);
  const fbx = useFBX("assets/SK_Chr_Jester_01.fbx");
  console.log(fbx);

  // useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  return (
    <primitive ref={ref} object={fbx} position={[1.2, 0, 0]} scale={0.02} />
  );
};

export default Jester;
