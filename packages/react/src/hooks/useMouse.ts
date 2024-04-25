import { addEventListener } from "@zkbridge/fdn-dom";
import { useEffect } from "react";

type MouseListener<T extends HTMLElement | Document> = (e: React.MouseEvent<T>) => void;

export const useMouseMove = <T extends HTMLElement | Document>(listener: MouseListener<T>) => {
  useEffect(() => {
    return addEventListener(document, "mousemove", listener as any);
  }, [listener]);
};
