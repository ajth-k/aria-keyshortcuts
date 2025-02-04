import { useRef, useState } from "react";
import useKeyShortcut from "../../../hooks/useKeyShortcut";
import Kbd from "../../../components/Kbd";

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
    key: "Alt+/",
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
            Press <Kbd keycaps={keyCap} />
            to add todo
          </>
        ) : (
          <>
            Press <Kbd keycaps={focusKeyCap} /> to start typing
          </>
        )}
      </span>
    </div>
  );
};
export default InputField;
