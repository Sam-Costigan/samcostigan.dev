import type { NextPage } from "next";
import { Flex, Text } from "@chakra-ui/react";

import Header from "components/ui/Header";

const About: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      <Text>Content goes in here!</Text>
      {/* <Canvas /> */}
    </Flex>
  );
};

export default About;
