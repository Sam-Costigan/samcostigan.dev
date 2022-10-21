import { Suspense } from "react";
import { useTheme, useColorMode, Box } from "@chakra-ui/react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { OrbitControls, useContextBridge } from "@react-three/drei";

import ChakraProviderExtender from "./ChakraThemeExtender";
import Loader from "./Loader";
import Scene from "./Scene";
import { StoreContext } from "storeProvider";

const Canvas = () => {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  const StoreBridge = useContextBridge(StoreContext);

  return (
    <Box height="calc(100vh - 5rem)">
      <ThreeCanvas camera={{ position: [0, 0, 25] }}>
        <ChakraProviderExtender colorMode={colorMode} theme={theme}>
          <StoreBridge>
            <Suspense fallback={<Loader />}>
              {/* <OrbitControls /> */}
              <Scene />
            </Suspense>
          </StoreBridge>
        </ChakraProviderExtender>
      </ThreeCanvas>
    </Box>
  );
};

export default Canvas;
