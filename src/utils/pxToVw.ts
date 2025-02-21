import { isNumber } from "lodash";

export function pxToVw(px: number | string, width = 1920) {
  if (!isNumber(px)) {
    return px;
  }
  return `${(Number(px) / width) * 100}vw`;
}
