import { ID, IDable } from "@zkbridge/types";
import { assert, isNullish } from "@zkbridge/utils";
import _ from "lodash";
import { useCallback } from "react";

type SwitchOnFn = (id: ID) => void;

//keep only one element is on
export const useExclusive = <T extends IDable>(
  data: T[],
  key: keyof T,
  update: (data: T[], prev: T[]) => void
): SwitchOnFn => {
  assert(!isNullish(data), "data is Nullish");

  return useCallback(
    (id: ID) => {
      assert(!isNullish(id), `invalide id ${id}`);
      const newData = data.map(e => {
        if (e.id === id) {
          return { ...e, [key]: true };
        }
        return { ...e, [key]: false };
      });
      if (!_.isEqual(newData, data)) {
        update(newData, data);
      }
    },
    [data, key, update]
  );
};
