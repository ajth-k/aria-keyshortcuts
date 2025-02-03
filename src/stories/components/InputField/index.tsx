import { useRef, useState } from "react";
import useKeyShortcut from "../../../hooks/useKeyShortcut";

const InputField = () => {
  const [inputVal, setInputVal] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef(null);
  const addTodo = () => {
    setInputVal("");
  };
  const { keyCap } = useKeyShortcut({
    key: "Enter",
    action: addTodo,
    options: {
      ref,
    },
  });
  const { keyCap: focusKeyCap } = useKeyShortcut({
    key: "Fn+/",
    action: () => {
      ref.current?.focus();
    },
  });
  return (
    <div>
      <div className="add-todo">
        <input
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          ref={ref}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Add todo"
        />
        <button onClick={addTodo}>➕</button>
      </div>
      <span className="input__kbd">
        {isFocused ? (
          <>
            Press <kbd>{JSON.stringify(keyCap)}</kbd> to add todo
          </>
        ) : (
          <>
            Press <kbd>{JSON.stringify(focusKeyCap)}</kbd> to start typing
          </>
        )}
      </span>
    </div>
  );
};
export default InputField;
