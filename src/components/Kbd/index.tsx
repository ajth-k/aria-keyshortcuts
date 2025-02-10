"use client";
import { useMemo } from "react";
import { KbdProps } from "./types";

const Kbd = (props: KbdProps) => {
  const { keycaps, shouldShowOnTouch = false } = props;
  const isTouchScreen = useMemo(() => {
    if (window.PointerEvent && "maxTouchPoints" in navigator) {
      if (navigator.maxTouchPoints > 0) {
        return true;
      }
    } else {
      if (
        window.matchMedia &&
        window.matchMedia("(any-pointer:coarse)").matches
      ) {
        return true;
      } else if (window.TouchEvent || "ontouchstart" in window) {
        return true;
      }
      return false;
    }
  }, []);
  if (isTouchScreen && !shouldShowOnTouch) return;
  return keycaps.map((keycap) => <kbd key={keycap.key}>{keycap.symbol}</kbd>);
};
export default Kbd;
