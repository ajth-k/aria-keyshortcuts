import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import useShortcutScope from "../useShortcutScope";
import { KeyShortcutProps } from "./types";
import { getKeyCap } from "../../utils/keycap";

const useKeyShortcut = <T extends HTMLElement>(args: KeyShortcutProps<T>) => {
  const {
    key,
    action,
    options: { scopes = "__global", ref },
  } = args;
  const { isInScopes } = useShortcutScope();
  const actionRef = useRef(action);
  useLayoutEffect(() => {
    actionRef.current = action;
  });
  const handleKeyPress = useCallback(
    (event: KeyboardEvent) => {
      const [targetKey, ...holdedKeys] = key.split("+").reverse();
      const isTargetKeyPressed =
        targetKey === event.key &&
        holdedKeys.every((key) => {
          return event[`${key}Key`];
        });

      if (isInScopes(scopes) && isTargetKeyPressed) actionRef.current(event);
    },
    [isInScopes, key, scopes],
  );
  useEffect(() => {
    ref?.current.setAttribute("aria-keyshortcuts", key);
    const targetNode = ref?.current ?? document;
    targetNode.addEventListener("keydown", handleKeyPress as EventListener);

    return () =>
      targetNode.removeEventListener(
        "keydown",
        handleKeyPress as EventListener,
      );
  }, [handleKeyPress, ref]);
  return {
    keyCap: getKeyCap(key),
  };
};
export default useKeyShortcut;
