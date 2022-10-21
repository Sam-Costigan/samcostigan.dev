import { Flex } from "@chakra-ui/react";

import Header from "components/ui/Header";
import Canvas from "components/scene/Canvas";
import Store from "store";
import { Instance } from "mobx-state-tree";
import { observer } from "mobx-react-lite";

const App = () => {
  return (
    <Flex direction="column">
      <Header />
      <Canvas />
    </Flex>
  );
};

export default observer(App);
