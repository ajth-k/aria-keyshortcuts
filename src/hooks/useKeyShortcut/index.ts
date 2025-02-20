import {
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { KeyShortcutProps } from "./types";
import { getKeyCaps } from "../../utils/keycap";
import { ShortcutContext } from "../../components/KeyShortcutProvider";

const useKeyShortcut = <T extends HTMLElement>(args: KeyShortcutProps<T>) => {
  const { key, action } = args;
  const { ref, scopes = "__global" } = args.options ?? {};
  const { scopes: currentScopes } = useContext(ShortcutContext);
  const actionRef = useRef(action);
  useLayoutEffect(() => {
    actionRef.current = action;
  });
  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    const [targetKey, ...holdedKeys] = key.split("+").reverse();
    const isTargetKeyPressed =
      targetKey === event.key &&
      holdedKeys.every((key) => {
        return event.getModifierState(key);
      });

    if (
      currentScopes.some((scope) => scopes.includes(scope)) &&
      isTargetKeyPressed
    )
      actionRef.current(event);
  }, []);
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
    keyCap: getKeyCaps(key),
  };
};
export default useKeyShortcut;
