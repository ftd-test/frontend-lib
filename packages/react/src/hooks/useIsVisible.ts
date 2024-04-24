import React, { useCallback, useEffect, useState } from "react";
import { useIntersectionObserver } from "./useIntersectionObserver";

/**
 * @return {boolean} Whether the element is visible in the root.
 */

export const useIsVisible = <T extends HTMLElement>() => {
  const [isVisible, setIsVisible] = useState(false);
  const _watch = useIntersectionObserver<T>();

  const watch = useCallback(
    (ref: React.RefObject<T>, option?: IntersectionObserverInit) => {
      return _watch(
        ref,
        async entries => {
          setIsVisible(entries[0].isIntersecting);
        },
        option
      );
    },
    [_watch]
  );

  return [isVisible, watch] as const;
};
