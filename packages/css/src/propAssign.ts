import { isNil } from "@zkbridge/utils";
export const propAssign = (prop: string, value: unknown) => {
  if (isNil(value)) {
    return {};
  }
  return {
    [prop]: value,
  };
};
