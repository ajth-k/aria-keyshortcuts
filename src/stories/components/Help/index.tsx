import useKeyShortcut from "../../../hooks/useKeyShortcut";

const HelpButton = () => {
  const { keyCap } = useKeyShortcut({
    key: "meta+h",
    action: () => {
      alert("Alert");
    },
  });
  return <button>--help {keyCap}</button>;
};

export default HelpButton;
