import { useRef } from "react";
import useKeyShortcut from "../hooks/useKeyShortcut";
import useShortcutScope from "../hooks/useShortcutScope";
export const ShowCase = () => {
  const ref = useRef(null);
  const { toggleScope } = useShortcutScope();
  const { keyCap } = useKeyShortcut({
    key: "meta+'",
    action: () => {
      alert("In global scope");
      toggleScope("save-modal");
    },
    options: { ref },
  });
  useKeyShortcut({
    key: "meta+'",
    action: () => {
      alert("Scope changed to save-modal");
      toggleScope("__global");
    },
    options: { scopes: "save-modal", ref },
  });
  return (
    <div>
      <button ref={ref}>
        Press <kbd>{keyCap}</kbd>
      </button>
    </div>
  );
};
