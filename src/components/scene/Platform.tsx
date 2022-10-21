import * as THREE from "three";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useSpring, animated, config } from "@react-spring/three";
import { Box as FlexBox, useFlexSize, useReflow } from "@react-three/flex";
import { useTranslation } from "react-i18next";

import { useColorModeValueInScene } from "./ChakraThemeExtender";
import { observer } from "mobx-react-lite";
import { Instance } from "mobx-state-tree";

import ModelPlatform from "models/Platform";
import { Html } from "@react-three/drei";
import Card from "./Card";

const Platform = ({
  platform,
}: {
  platform: Instance<typeof ModelPlatform>;
}) => {
  const { t } = useTranslation();
  const [width, height] = useFlexSize();
  const bg = useColorModeValueInScene("red.700", "red.500");
  const hoverBg = useColorModeValueInScene("blue.700", "blue.500");

  const ref = useRef<THREE.Mesh>(null!);
  const reflow = useReflow();
  const { scale } = useSpring({
    scale: platform.clicked ? 2 : 1,
    config: config.wobbly,
  });

  // console.log(width, height);

  // useFrame((state, delta) => (ref.current.rotation.x += 0.01));
  return (
    <animated.mesh
      position={platform.position}
      ref={ref}
      scale={scale}
      onClick={(event) => platform.toggleClick()}
      onPointerOver={(event) => platform.hover(true)}
      onPointerOut={(event) => platform.hover(false)}
    >
      <Card width="300px">{t(platform.description)}</Card>
      <boxGeometry args={[platform.dimensions[0], platform.dimensions[1], 1]} />
      <meshStandardMaterial color={platform.hovered ? hoverBg : bg} />
    </animated.mesh>
  );
};

export default observer(Platform);
