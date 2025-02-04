import Kbd from "../../../components/Kbd";
import useKeyShortcut from "../../../hooks/useKeyShortcut";

const HelpButton = () => {
  const { keyCap } = useKeyShortcut({
    key: "Control",
    action: () => {
      alert("Alert");
    },
  });
  return (
    <button>
      --help <Kbd keycaps={keyCap} />
    </button>
  );
};

export default HelpButton;
