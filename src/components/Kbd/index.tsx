"use client";

import { Fragment, useMemo } from "react";
import { KbdProps } from "./types";

const Kbd = (props: KbdProps) => {
  const { keycaps, shouldShowOnTouch = false, seperator = "+" } = props;
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
  return (
    <kbd className="rak-kbd">
      {keycaps.map((keycap) => (
        <Fragment key={keycap.key}>
          <kbd className="rak-kbd">{keycap.symbol}</kbd>
          <span>{seperator}</span>
        </Fragment>
      ))}
    </kbd>
  );
};
export default Kbd;
