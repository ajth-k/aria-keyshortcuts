import { useCallback, useContext } from "react";
import { ShortcutContext } from "../../components/KeyShortcutProvider";
import { Scope } from "../../types/keys";

const useShortcutScope = () => {
  const state = useContext(ShortcutContext);
  const isInScopes = useCallback(
    (scopes: string[] | string) => {
      if (!state) return true;
      return (
        (typeof scopes !== "string" &&
          scopes.some((scope) => scope === state.activeScope)) ||
        scopes === state.activeScope
      );
    },
    [state?.activeScope],
  );
  const updateScope = (scope: Scope) => {
    if (!state)
      throw new Error("updateScope must be used within a KeyShortcutProvider ");
    state.setActiveScope(scope);
  };
  const toggleScope = (scope: Scope) => {
    if (!state)
      throw new Error("updateScope must be used within a KeyShortcutProvider ");
    state.setActiveScope((prevScope) =>
      prevScope === scope ? "__global" : scope,
    );
  };

  return { isInScopes, updateScope, toggleScope };
};
export default useShortcutScope;
