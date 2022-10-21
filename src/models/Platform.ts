import { types } from "mobx-state-tree";
import Vector2 from "./Vector2";
import Vector3 from "./Vector3";

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

export default Platform;
