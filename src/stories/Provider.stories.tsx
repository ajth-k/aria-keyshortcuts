import "./styles.css";
import HelpButton from "./components/Help";
import InputField from "./components/InputField";
import ShortcutScope from "../components/KeyShortcutProvider";
export const ShowCase = () => {
  return (
    <ShortcutScope scopes={["sample"]}>
      <div className="container">
        <div className="todo__container">
          <div className="todo__header">
            <h1>Todo List</h1>
            <HelpButton />
          </div>
          <InputField />
        </div>
      </div>
    </ShortcutScope>
  );
};
