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
import Link from "next/link";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Flex bg="blackAlpha.700" height="5rem">
        <HStack color="yellow.400">
          <BracketLeft height="50px" />
          <Heading as="h1" lineHeight="50px">
            <Link href="/">samcostigan.dev</Link>
          </Heading>
          <BracketRight height="50px" />
        </HStack>
        <Spacer />
        <HStack>
          <Link href="/about">About</Link>
        </HStack>
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
