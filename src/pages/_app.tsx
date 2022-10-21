import "../styles/globals.css";
import type { AppProps } from "next/app";
import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

import "i18n";
import theme from "theme";

import { Store, StoreProvider } from "store";
import { IStore, IStoreSnapshotIn } from "store/models/Store";

const initialState: IStoreSnapshotIn = {
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
const initializeRootStore = (snapshot: IStoreSnapshotIn): IStore => {
  return Store.create(snapshot);
};

const store = initializeRootStore(initialState);

function App({ Component, pageProps }: AppProps) {
  return (
    <React.StrictMode>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <StoreProvider value={store}>
          <Component {...pageProps} />
        </StoreProvider>
      </ChakraProvider>
    </React.StrictMode>
  );
}

export default App;
