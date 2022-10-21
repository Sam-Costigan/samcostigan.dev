import { observer } from "mobx-react-lite";
import { useStore } from "store";
import { Flex, Box as FlexBox } from "@react-three/flex";
import Jester from "./Jester";
import Platform from "./Platform";
import { useThree } from "@react-three/fiber";
import { useAspect } from "@react-three/drei";

const Scene = () => {
  const store = useStore();
  const { size } = useThree();
  // console.log(size);
  const [vpWidth, vpHeight] = useAspect(size.width, size.height);
  console.log(vpWidth, vpHeight);
  return (
    <group position={[0, 0, 0]}>
      <Flex
        flexDirection="row"
        size={[vpWidth, vpHeight, 0]}
        position={[-vpWidth / 2, vpHeight / 2, 0]}
      >
        {store.platforms.map((platform) => (
          <FlexBox key={platform.name} margin={1} flexGrow={1} centerAnchor>
            <Platform platform={platform} />
          </FlexBox>
        ))}
      </Flex>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
    </group>
  );
};

export default observer(Scene);
