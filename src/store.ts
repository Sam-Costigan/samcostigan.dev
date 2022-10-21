import { types } from "mobx-state-tree";

import Platform from "models/Platform";

const Store = types
  .model("Store", {
    platforms: types.array(Platform),
  })
  .actions((self) => ({}));

export default Store;
