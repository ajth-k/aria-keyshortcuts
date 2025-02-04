import "./styles.css";
import HelpButton from "./components/Help";
export const ShowCase = () => {
  return (
    <div className="container">
      <div className="todo__container">
        <div className="todo__header">
          <h1>Todo List</h1>
          <HelpButton />
        </div>
        {/* <InputField /> */}
      </div>
    </div>
  );
};
