import { Dispatch, SetStateAction } from "react";
import { Scope } from "../../types/keys";

export type ShortcutContextProps = {
  activeScope: Scope;
  setActiveScope: Dispatch<SetStateAction<Scope>>;
};
