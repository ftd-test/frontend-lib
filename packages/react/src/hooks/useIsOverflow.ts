import { isOverflow as checkIsOverflow } from "@zkbridge/dom";
import { useCallback, useState } from "react";
import { useMutationObserver } from "./useMutationObserver";

export const useIsOverflow = <T extends HTMLElement>() => {
  const [isOverflow, setIsOverflow] = useState(false);

  const _watch = useMutationObserver();

  const watch = useCallback(
    (el: T, direction: "both" | "vertical" | "horizontal" = "both") => {
      //check initial state
      setIsOverflow(checkIsOverflow(el, direction));

      //watch for changes
      _watch(
        el,
        (e: MutationRecord[]) => {
          setIsOverflow(checkIsOverflow(el, direction));
        },
        { attributes: true, childList: true, subtree: true, characterData: true }
      );
    },
    [_watch]
  );
  return [isOverflow, watch] as const;
};
