import {
  Heading,
  Flex,
  Spacer,
  IconButton,
  useColorMode,
  HStack,
} from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

import BracketLeft from "components/icons/BracketLeft";
import BracketRight from "components/icons/BracketRight";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex bg="blackAlpha.700" height="5rem">
        <HStack color="yellow.400">
          <BracketLeft height="50px" />
          <Heading as="h1" lineHeight="50px">
            samcostigan.dev
          </Heading>
          <BracketRight height="50px" />
        </HStack>
        <Spacer />
        <IconButton
          variant="ghost"
          aria-label={`Switch to ${
            colorMode === "light" ? "dark" : "light"
          } mode`}
          icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
          onClick={toggleColorMode}
        />
      </Flex>
    </>
  );
};

export default Header;
