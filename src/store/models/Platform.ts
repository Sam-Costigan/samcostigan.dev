import { types, Instance, SnapshotIn, SnapshotOut } from "mobx-state-tree";
import Vector2 from "store/types/Vector2";
import Vector3 from "store/types/Vector3";

const Platform = types
  .model("Platform", {
    name: types.string,
    description: types.string,
    dimensions: Vector2,
    position: Vector3,
    hovered: false,
    clicked: false,
  })
  .actions((self) => ({
    hover(val: boolean) {
      self.hovered = val;
    },
    click(val: boolean) {
      self.clicked = val;
    },
    toggleClick() {
      self.clicked = !self.clicked;
    },
  }));

export type IStore = Instance<typeof Platform>;
export type IStoreSnapshotIn = SnapshotIn<typeof Platform>;
export type IStoreSnapshotOut = SnapshotOut<typeof Platform>;
export default Platform;
