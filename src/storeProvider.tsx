import React, { ReactNode } from "react";
import Store from "store";
import { Instance } from "mobx-state-tree";

export const StoreContext = React.createContext<Instance<typeof Store>>(null!);

const StoreProvider = ({
  value,
  children,
}: {
  value: Instance<typeof Store>;
  children: ReactNode;
}) => {
  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
export default StoreProvider;
