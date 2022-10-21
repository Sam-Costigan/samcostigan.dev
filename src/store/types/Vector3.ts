import { types } from "mobx-state-tree";

type Vector3Type = [x: number, y: number, z: number];
const Vector3 = types.custom<Vector3Type, Vector3Type>({
  name: "Vector3",
  fromSnapshot(value: Vector3Type) {
    return value;
  },
  toSnapshot(value: Vector3Type) {
    return value;
  },
  isTargetType(value: Vector3Type): boolean {
    return value instanceof Array;
  },
  getValidationMessage(value: Vector3Type): string {
    if (value.length === 3 && value.every((v) => typeof v === "number"))
      return ""; // OK
    return `'${value}' doesn't look like a valid Vector3`;
  },
});

export default Vector3;
