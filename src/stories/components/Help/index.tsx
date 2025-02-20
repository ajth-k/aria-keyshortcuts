import Kbd from "../../../components/Kbd";
import useKeyShortcut from "../../../hooks/useKeyShortcut";

const HelpButton = () => {
  const { keyCap } = useKeyShortcut({
    key: "Meta+m",
    action: () => {
      alert("Alert");
    },
  });
  return (
    <button className="button__help">
      --help <Kbd seperator="" keycaps={keyCap} />
    </button>
  );
};

export default HelpButton;
