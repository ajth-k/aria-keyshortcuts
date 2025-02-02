import { createContext, PropsWithChildren, useState } from "react";
import { ShortcutContextProps } from "./types";

export type Scope = "__global" | (string & object);

export const ShortcutContext = createContext<ShortcutContextProps | null>(null);

const KeyShortcutProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const [activeScope, setActiveScope] = useState<Scope>("__global");

  return (
    <ShortcutContext.Provider value={{ activeScope, setActiveScope }}>
      {children}
    </ShortcutContext.Provider>
  );
};

export default KeyShortcutProvider;
