import { Box, BoxProps } from "@chakra-ui/react";
import { Html } from "@react-three/drei";
import { useColorModeValueInScene } from "./ChakraThemeExtender";

const Card = ({ children, ...props }: BoxProps) => {
  const bg = useColorModeValueInScene("gray.400", "gray.100");
  const color = useColorModeValueInScene("white", "black");
  return (
    <Html as="div">
      <Box
        borderRadius="12px"
        py="10px"
        px="16px"
        bg={bg}
        color={color}
        {...props}
      >
        {children}
      </Box>
    </Html>
  );
};

export default Card;
