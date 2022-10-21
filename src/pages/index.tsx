import type { NextPage } from "next";

import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "../theme";

import App from "../components/App";
import Store from "../store";
import { Instance, SnapshotIn } from "mobx-state-tree";
import StoreProvider from "../storeProvider";

import "i18n";

declare global {
  interface Window {
    store: any;
  }
}

const initialState: SnapshotIn<typeof Store> = {
  platforms: [
    {
      name: "Landing",
      description: "landing",
      dimensions: [10, 2],
      position: [0, -6, 0],
    },
    {
      name: "skills",
      description: "skills",
      dimensions: [5, 2],
      position: [0, -18, 0],
    },
  ],
};
const createRootStore = (
  snapshot: SnapshotIn<typeof Store>
): Instance<typeof Store> => {
  return Store.create(snapshot);

  // return store;
};

const store = createRootStore(initialState);

const Home: NextPage = () => {
  return (
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <StoreProvider value={store}>
          <App />
        </StoreProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
};

export default Home;
