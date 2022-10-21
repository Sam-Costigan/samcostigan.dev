import React from "react";
import { get } from "lodash";
import theme from "../../theme";

const ChakraContext = React.createContext(theme);
const ChakraProviderExtender = ({
  children,
  colorMode,
  theme,
}: {
  children: React.ReactNode;
  colorMode: string;
  theme: any;
}) => {
  return (
    <ChakraContext.Provider value={{ colorMode, theme }}>
      {children}
    </ChakraContext.Provider>
  );
};

export const useChakraInScene = () => React.useContext(ChakraContext);

export const useThemeInScene = () => {
  const { theme } = useChakraInScene();
  return theme;
};

export const useColorModeInScene = () => {
  const { colorMode } = useChakraInScene();
  return colorMode;
};

export const useColorModeValueInScene = (c1: string, c2: string) => {
  const { theme, colorMode } = useChakraInScene();

  let color = get(theme.colors, c1);
  if (colorMode === "dark") {
    color = get(theme.colors, c2);
  }
  return color;
};

export default ChakraProviderExtender;
