import { Key, Scope } from "../../types/keys";
import { RefObject } from "react";

export type KeyShortcutProps<T extends HTMLElement> = {
  /** The hotkey keyboard combination. */
  key: Key;
  /** The event handler to be triggered when the hotkey is pressed.*/
  action: (event: KeyboardEvent) => void;
  options?: {
    /**
     * A reference to the DOM element that triggers the shortcut.
     * If provided, the shortcut will only be active when this element is focused.
     */
    ref?: RefObject<T> | null;
    /**
     * The scope(s) in which the hotkey is activated.     *
     * @default "__global__"
     */
    scopes?: Scope | Scope[];
  };
};
