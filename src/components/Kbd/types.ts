import { KeyCap } from "../../types/keys";

export type KbdProps = {
  keycaps: KeyCap[];
  /** @default false
   * if enabled, keycaps will be visible for touch screens
   */
  shouldShowOnTouch?: boolean;
};
