import { KeyCap } from "../../types/keys";

export type KbdProps = {
  /** @default +
   * seperator between kbd element
   */
  seperator?: string;
  keycaps: KeyCap[];
  /** @default false
   * if enabled, keycaps will be visible for touch screens
   */
  shouldShowOnTouch?: boolean;
};
