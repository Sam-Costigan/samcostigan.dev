import type { NextPage } from "next";
import { Flex } from "@chakra-ui/react";

import Header from "components/ui/Header";
import { observer } from "mobx-react-lite";

const Home: NextPage = () => {
  return (
    <Flex direction="column">
      <Header />
      {/* <Canvas /> */}
    </Flex>
  );
};

export default observer(Home);
