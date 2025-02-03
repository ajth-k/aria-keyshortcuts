import useKeyShortcut from "../../../hooks/useKeyShortcut";

const HelpButton = () => {
  const { keyCap } = useKeyShortcut({
    key: "Meta+h",
    action: () => {
      alert("Alert");
    },
  });
  return <button>--help {JSON.stringify(keyCap)}</button>;
};

export default HelpButton;
