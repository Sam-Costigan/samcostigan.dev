import { types } from "mobx-state-tree";

type Vector2Type = [x: number, y: number];
const Vector2 = types.custom<Vector2Type, Vector2Type>({
  name: "Vector3",
  fromSnapshot(value: Vector2Type) {
    return value;
  },
  toSnapshot(value: Vector2Type) {
    return value;
  },
  isTargetType(value: Vector2Type): boolean {
    return value instanceof Array;
  },
  getValidationMessage(value: Vector2Type): string {
    if (value.length === 2 && value.every((v) => typeof v === "number"))
      return ""; // OK
    return `'${value}' doesn't look like a valid Vector2`;
  },
});

export default Vector2;
