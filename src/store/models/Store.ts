import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import Platform from "./Platform";

const Store = types
  .model("Store", {
    platforms: types.array(Platform),
  })
  .actions((self) => ({}));

export type IStore = Instance<typeof Store>;
export type IStoreSnapshotIn = SnapshotIn<typeof Store>;
export type IStoreSnapshotOut = SnapshotOut<typeof Store>;
export default Store;
