import { createContext, useContext, ReactNode } from "react";

import Store, { IStore } from "./models/Store";

export const StoreContext = createContext<IStore>(null!);
export const StoreProvider = ({
  value,
  children,
}: {
  value: IStore;
  children: ReactNode;
}) => <StoreContext.Provider value={value} children={children} />;

export { Store };
export const useStore = () => useContext(StoreContext);
export default useStore;
