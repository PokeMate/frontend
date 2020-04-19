import { TYPES } from "../constants/index";

export function toPokedexId(id) {
  var threeDigitId = id.toString();
  while (threeDigitId.length < 3) {
    threeDigitId = "0" + threeDigitId;
  }
  return "#" + threeDigitId;
}

export function getType(typeName) {
  typeName = typeName.toLowerCase();
  var arr = TYPES.filter((type) => {
    return type.name === typeName;
  });
  if (arr.length > 0) {
    return arr[0];
  } else {
    return { name: "undefined", color: "red", icon: "undefined" };
  }
}
